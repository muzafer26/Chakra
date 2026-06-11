const fs = require('fs');
const path = require('path');

const assetsDir = path.resolve(__dirname, 'public/assets');
const imgDir = path.join(assetsDir, 'Img');
const videoDir = path.join(assetsDir, 'videos');

// Create directories
fs.mkdirSync(imgDir, { recursive: true });
fs.mkdirSync(videoDir, { recursive: true });

// Copy existing local assets
const localAssetsPath = path.resolve(__dirname, '../assets');
if (fs.existsSync(localAssetsPath)) {
  console.log('Copying existing local assets...');
  copyFolderSync(localAssetsPath, assetsDir);
  console.log('Asset copy complete!');
} else {
  console.error(`Error: Could not find source assets at ${localAssetsPath}`);
}

function copyFolderSync(from, to) {
  if (!fs.existsSync(from)) return;
  if (!fs.existsSync(to)) {
    fs.mkdirSync(to, { recursive: true });
  }
  fs.readdirSync(from).forEach(element => {
    const fromPath = path.join(from, element);
    const toPath = path.join(to, element);
    const stat = fs.lstatSync(fromPath);
    if (stat.isFile()) {
      fs.copyFileSync(fromPath, toPath);
    } else if (stat.isDirectory()) {
      copyFolderSync(fromPath, toPath);
    }
  });
}
