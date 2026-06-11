const fs = require('fs');
const path = require('path');
const https = require('https');

const projectAssetsDir = path.resolve(__dirname, 'public/assets');
const imgDestDir = path.join(projectAssetsDir, 'Img');
const videoDestDir = path.join(projectAssetsDir, 'videos');

// Create directories
fs.mkdirSync(imgDestDir, { recursive: true });
fs.mkdirSync(videoDestDir, { recursive: true });

// Source assets directory
const srcDir = path.resolve(__dirname, '../assets');
const srcImgDir = path.join(srcDir, 'Img');

if (!fs.existsSync(srcDir)) {
  fs.mkdirSync(srcDir, { recursive: true });
}
if (!fs.existsSync(srcImgDir)) {
  fs.mkdirSync(srcImgDir, { recursive: true });
}

// URLs to download
const assetsToDownload = [
  {
    url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=80',
    localDest: path.join(srcImgDir, 'homepage_hero.jpg'),
    projectDest: path.join(imgDestDir, 'homepage_hero.jpg')
  },
  {
    url: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80',
    localDest: path.join(srcImgDir, 'ourstory.jpg'),
    projectDest: path.join(imgDestDir, 'ourstory.jpg')
  }
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    console.log(`Downloading: ${path.basename(dest)}...`);
    const file = fs.createWriteStream(dest);
    https.get(url, response => {
      if (response.statusCode !== 200) {
        reject(new Error(`Status ${response.statusCode}`));
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

// Mappings for other existing images
const imgMappings = {
  "homepage_hero.jpg": "homepage_hero.jpg",
  "ourstory.jpg": "ourstory.jpg",
  "chakra logo.jpg": "chakra_logo.jpg",
  "Chakra is a popular restaurant located in Sakinaka, Mumbai that specializes in serving delicious.jpg": "ambience_entrance.jpg",
  "Chakra is a popular restaurant located in Sakinaka, Mumbai that specializes in serving deliciou.webp": "ambience_interior.webp",
  "The restaurant has an array of Vegetarian & Non-Vegetarian dishes that are sure to satisfy food .jpg": "veg_spread.jpg",
  "Chakra in Sakinaka sets the bar high with its irresistible chicken wings. Succulent, perfectly s.jpg": "chicken_wings.jpg",
  "Chicken starters are a popular choice to kick off a meal for several reasons. Firstly, chicken .webp": "chicken_starters.webp",
  "Indulge in the Irresistible Delight of Chakras Succulent Roasted Chicken Starter...#chicken #fo.jpg": "roasted_chicken.jpg",
  "Indulge in a Love Affair with Flavors at Chakra! ❤️🍽️ Our delectable lunch spread is a symphon.jpg": "lunch_spread.jpg"
};

// Mappings for videos
const videoMappings = {
  "At Chakra, we measure our success by the happiness of our valued customers.As we bask in the war.mp4": "customer_happiness.mp4",
  "Looking for a delicious and satisfying meal Look no further than our mouth-watering kebabs! Our .mp4": "kebab_promo.mp4",
  "Midweek bliss at Chakra Restaurant! Who says Wednesdays cant be extraordinary Join us for a tan.mp4": "midweek_bliss.mp4",
  "Welcome to Chakra, where the divine concoctions of mixology and the spirits of taste collide, cr.mp4": "mixology_welcome.mp4"
};

async function run() {
  // 1. Download missing/new assets
  for (const item of assetsToDownload) {
    try {
      await downloadFile(item.url, item.localDest);
      fs.copyFileSync(item.localDest, item.projectDest);
      console.log(`Success downloading ${path.basename(item.localDest)}`);
    } catch (err) {
      console.error(`Error downloading ${path.basename(item.localDest)}:`, err.message);
    }
  }

  console.log('Copying and renaming other local assets...');

  // Copy and rename images
  if (fs.existsSync(srcImgDir)) {
    fs.readdirSync(srcImgDir).forEach(file => {
      const srcPath = path.join(srcImgDir, file);
      const destName = imgMappings[file] || file.toLowerCase().replace(/[^a-z0-9.]/g, '_');
      const destPath = path.join(imgDestDir, destName);
      
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied Image: ${file} -> ${destName}`);
    });
  }

  // Copy and rename videos
  const srcVideoDir = path.join(srcDir, 'videos');
  if (fs.existsSync(srcVideoDir)) {
    fs.readdirSync(srcVideoDir).forEach(file => {
      const srcPath = path.join(srcVideoDir, file);
      const destName = videoMappings[file] || file.toLowerCase().replace(/[^a-z0-9.]/g, '_');
      const destPath = path.join(videoDestDir, destName);
      
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied Video: ${file} -> ${destName}`);
    });
  }

  console.log('Asset copy and renaming completed successfully!');
}

run();
