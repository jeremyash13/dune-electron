const {BrowserWindow} = require('electron')
const path = require('path')

module.exports.createWindow = function () {
    // const invisPath = 'file://' + path.join(__dirname, '/audioPlayer.html');
    const invisPath = 'http://localhost:3000/audioPlayer.html';
  
    const win = new BrowserWindow({ 
      width: 400, 
      height: 400, 
      show: true,
      webPreferences: {
          webSecurity: false
      }
    });
  
    win.loadURL(invisPath);
  
    // win.webContents.on('did-finish-load', function () {
    //   win.show();
    // });
  
    // ipcMain.on('dom-is-ready', function (event) {
    //   const input = 100;
    //   win.webContents.send('compute-factorial', input);
    // });
  
    // ipcMain.on('factorial-computed', function (event, input, output) {
    //   const message = `The factorial of ${input} is ${output}`
    //   console.log(message);
    // });

    // console.log('hi from sound window')

  }