const fs = require('fs');
const path = require('path');
const https = require('https');

const assetsDir = path.resolve(__dirname, 'public/assets');
const imgDir = path.join(assetsDir, 'Img');
const videoDir = path.join(assetsDir, 'videos');

// Create directories
fs.mkdirSync(imgDir, { recursive: true });
fs.mkdirSync(videoDir, { recursive: true });

// 1. Copy existing local assets if available
const localAssetsPath = path.resolve(__dirname, '../assets');
if (fs.existsSync(localAssetsPath)) {
  console.log('Copying existing local assets...');
  copyFolderSync(localAssetsPath, assetsDir);
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

// 2. Download missing assets with clean paths
const assetsToDownload = [
  {
    url: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1000&q=80',
    dest: path.join(imgDir, 'butter_chicken.jpg')
  },
  {
    url: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=80',
    dest: path.join(imgDir, 'dal_makhani.jpg')
  },
  {
    url: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1000&q=80',
    dest: path.join(imgDir, 'chicken_ghee_roast.jpg')
  },
  {
    url: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1000&q=80',
    dest: path.join(imgDir, 'hara_bhara_kebab.jpg')
  },
  {
    url: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=1000&q=80',
    dest: path.join(imgDir, 'butter_naan.jpg')
  },
  {
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    dest: path.join(imgDir, 'ambience.jpg')
  },
  {
    url: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80',
    dest: path.join(imgDir, 'bar_area.jpg')
  },
  {
    url: 'https://assets.mixkit.co/videos/preview/mixkit-chef-preparing-a-fresh-vegetable-salad-40342-large.mp4',
    dest: path.join(videoDir, 'cooking.mp4')
  }
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(dest)) {
      console.log(`File already exists: ${path.basename(dest)}`);
      return resolve();
    }
    console.log(`Downloading: ${path.basename(dest)}...`);
    const file = fs.createWriteStream(dest);
    https.get(url, response => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: Status ${response.statusCode}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', err => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  for (const item of assetsToDownload) {
    try {
      await downloadFile(item.url, item.dest);
    } catch (err) {
      console.error(`Error downloading ${path.basename(item.dest)}:`, err.message);
    }
  }
  console.log('Asset downloads complete!');
}

run();
