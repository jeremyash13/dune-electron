const { app, BrowserWindow, ipcMain, session } = require("electron");

const isDev = require("electron-is-dev");

const fs = require("fs");
const path = require("path");
const url = require("url");
const { resolve } = require("path");
const Library = require("./modules/Library");
const os = require("os");

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
const pathToSystemLibrary = "C:\\Music";

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
    },
  });

  // and load the index.html of the app.
  mainWindow.loadURL("http://localhost:3000");

  // Open the DevTools.
  setTimeout(() => {
    mainWindow.webContents.openDevTools();
  }, 2000);

  // Emitted when the window is closed.
  mainWindow.on("closed", function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
  //   BrowserWindow.addDevToolsExtension(
  //     path.join(os.homedir(), '/Library/Application Support/Google/Chrome/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/4.7.0_0')
  //  )
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.

app.on("ready", async () => {
  // Install React Dev Tools
  await session.defaultSession.loadExtension(
    path.join(
      "C:\\Users\\jerem\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Extensions\\pfgnfdagidkfgccljigdamigbcnndkod\\0.9.22_0"
    )
  );
  await session.defaultSession.loadExtension(
    path.join(
      "C:\\Users\\jerem\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Extensions\\fmkadmapgofadopljbjfkapdkoienihi\\4.7.0_0"
    )
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
ipcMain.on("initLibrary", async (event, arg) => {
  const library = new Library(pathToSystemLibrary);
  const songs = await library.songs();
  event.returnValue = songs;
});
