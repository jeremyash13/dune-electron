const {
  app,
  BrowserWindow,
  ipcMain,
  webContents,
  session,
} = require("electron");

const fs = require("fs");
const path = require("path");
const url = require("url");
const dataurl = require("dataurl");
const { resolve } = require("path");

const {Howl, Howler} = require('howler');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

const convertSongToDataUrl = (filePath) => {
  const songPromise = new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data.toString('base64'))
      // resolve(dataurl.convert({ data, mimetype: "audio/mpeg" }));
    });
  });
  return songPromise;
};

const hookLibrary = async () => {
  const readLibraryPromise = new Promise((resolve, reject) => {
    const dirName = "C:/Music";
    fs.readdir(dirName, (err, files) => {
      if (err) reject(err);
      else {
        const songCollection = files
          .filter((file) => path.extname(file) === ".mp3")
          .map((file) => {
            return {
              src: `${dirName}/${file}`,
              title: `${file}`,
              artist: "",
              album: "",
              added: "",
              duration: "",
            };
          });
        resolve(songCollection);
      }
    });
  });
  return await readLibraryPromise;
};

function createWindow() {
  // Install React Dev Tools
  // BrowserWindow.addDevToolsExtension(
  // path.join(
  //   os.homedir(),
  //   "C:\\Users\\jerem\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Extensions\\fmkadmapgofadopljbjfkapdkoienihi\\4.7.0_0"
  // )
  // );

  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // and load the index.html of the app.
  mainWindow.loadURL("http://localhost:3000");

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on("closed", function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.

app.on("ready", async () => {
  // Install React Dev Tools
  await session.defaultSession.loadExtension(
    "C:/Users/jerem/Desktop/react-dev-tools"
  );
  createWindow();
});

// Quit when all windows are closed.
app.on("window-all-closed", function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
ipcMain.on("playSong", async (event, arg) => {
  const json = JSON.parse(arg);
  // const dataUrl = await convertSongToDataUrl(json.src);
  // console.log(dataUrl)
  // event.returnValue = await convertSongToDataUrl(json.src);
  event.returnValue = 'recieved';
});
ipcMain.on("initLibrary", async (event, arg) => {
  const songs = await hookLibrary();
  event.returnValue = songs;
});
