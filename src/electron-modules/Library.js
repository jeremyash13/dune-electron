const path = require("path");
const fs = require("fs");
const isDev = require("electron-is-dev");
const mm = require("music-metadata");
const util = require("util");

const readTags = async (files) => {
  // console.log(files[0])
  let songs = files.map((x) => {
    return new Promise((resolve, reject) => {
      mm.parseFile(x)
        .then((metadata) => {
          // console.log(
          //   util.inspect(metadata.common.picture[0].data, {
          //     showHidden: false,
          //     depth: null,
          //   })
          // );
          // console.log("break");
          let albumArt;
          if (metadata.common.picture) {
            albumArt = metadata.common.picture[0].data.toString("base64");
          } else {
            albumArt = 'no art'
          }
          resolve({
            // src needs to be transformed from absolute to relative path for react to be able to laod

            src: `./library/${metadata.common.title}${path.extname(x)}`,
            title: metadata.common.title,
            artist: metadata.common.artist,
            album: metadata.common.album,
            duration: metadata.format.duration * 1000, // convert S to MS
            albumArt: albumArt,
          });
        })
        .catch((err) => {
          console.error(err.message);
        });
    });
  });
  return Promise.all(songs).then((songs) => {
    return songs;
  });
};
const updateLibrary = (srcFiles, srcPath, localFiles, localPath) => {
  // update local Library to match system library

  if (srcFiles.length < localFiles.length) {
    // remove items from local library
    const difference = localFiles.filter((x) => !srcFiles.includes(x));
    for (const item of difference) {
      fs.unlinkSync(path.join(localPath, item));
    }
  } else if (srcFiles.length > localFiles.length) {
    // add items to local library
    const difference = srcFiles.filter((x) => !localFiles.includes(x));
    for (const item of difference) {
      fs.copyFileSync(path.join(srcPath, item), path.join(localPath, item));
    }
  }
};
const checkForUpdates = (srcPath, localPath) => {
  // determines whether library has changed since last launch

  let srcFiles = fs.readdirSync(srcPath);
  let localFiles = fs.readdirSync(localPath);

  let newSrcFiles = srcFiles.filter((x) => {
    // add all audio mimetypes, possibly using an array
    return path.extname(x) === ".mp3";
  });
  let newLocalFiles = localFiles.filter((x) => {
    // add all audio mimetypes, possibly using an array
    return path.extname(x) === ".mp3";
  });
  if (newSrcFiles.length !== newLocalFiles.length) {
    // library has changed, call updateLibrary
    updateLibrary(newSrcFiles, srcPath, newLocalFiles, localPath);
  }
};

class Library {
  constructor(srcPath) {
    this.srcPath = srcPath; // path to music library on PC, will be copied to a local folder to allow React to access
    if (isDev) {
      this.localPath = path.join(__dirname, "/../../", "public", "library");
    } else {
      this.localPath = path.join(__dirname, "library"); // output library folder that is accessible by React, will re-write to use PC's library instead of making duplicate library if i can get the god-forsaken NODE-GYP to work.
    }
    checkForUpdates(this.srcPath, this.localPath);
  }
  async songs() {
    // return obj containing file paths and ID3 tags to songs.
    const songFiles = fs.readdirSync(this.localPath);
    const songPaths = songFiles.map((x) => {
      return path.join(this.localPath, x);
    });
    return await readTags(songPaths);
  }
}

module.exports = Library;
