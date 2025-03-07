const { app, BrowserWindow, Menu, history, webContents } = require('electron');

function createWindow() {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: "C:/Users/Raghav K/WebstormProjects/solar/UID Case Study/clipboard.ico",
    webPreferences: {
    nodeIntegration: true
    }
  });

  win.loadFile("C:/Users/Raghav K/WebstormProjects/solar/UID Case Study/intro.html");

}

const template = [
  
  
  {
    label: '&Help',
    click() { 
      const helpWindow = new BrowserWindow({ width: 400, height: 300 });
      helpWindow.loadFile("C:/Users/Raghav K/WebstormProjects/solar/UID Case Study/help.html");
    }

  }

];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);

app.whenReady().then(createWindow);
