const https = require('https');
const fs = require('fs');
const path = require('path');

const logos = [
  {
    name: 'Somethings',
    // Using a direct logo URL from their website
    url: 'https://images.squarespace-cdn.com/content/v1/63e8c37b1b8a9c3e8d8f8f8f/favicon.ico',
    filename: 'somethings.png'
  },
  {
    name: 'Heyflow', 
    url: 'https://heyflow.com/favicon.ico',
    filename: 'heyflow.png'
  },
  {
    name: 'Postman',
    url: 'https://www.postman.com/_ar-assets/images/favicon-1-48.png',
    filename: 'postman.png'
  },
  {
    name: 'Lobeco',
    url: 'https://www.lobeco.de/favicon.ico',
    filename: 'lobeco.png'
  },
  {
    name: 'Madespace',
    url: 'https://madespace.ai/favicon.ico',
    filename: 'madespace.png'
  },
  {
    name: 'InsightOrca',
    url: 'https://insightorca.com/favicon.ico',
    filename: 'insightorca.png'
  }
];

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
};

async function main() {
  const dir = path.join(__dirname, '..', 'public', 'assets', 'companies');
  
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  for (const logo of logos) {
    const dest = path.join(dir, logo.filename);
    console.log(`Downloading ${logo.name}...`);
    try {
      await download(logo.url, dest);
      console.log(`✓ ${logo.name} downloaded`);
    } catch (err) {
      console.error(`✗ Failed to download ${logo.name}:`, err.message);
    }
  }
  
  console.log('\nDone! Please check public/assets/companies/ for the logos.');
  console.log('Note: Some logos may need to be downloaded manually from the company websites.');
}

main();
