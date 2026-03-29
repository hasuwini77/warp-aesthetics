#!/usr/bin/env node

const { program } = require('commander');
const fs = require('fs');
const path = require('path');
const os = require('os');
const https = require('https');
const chalk = require('chalk');

const REPO_BASE_URL = 'https://raw.githubusercontent.com/hasuwini77/warp-aesthetics/main/themes';
const CATEGORIES = ['lofi', 'minimal', 'retro', 'cyberpunk', 'nature'];
const WARP_DIR = path.join(os.homedir(), '.warp', 'themes');

// Helper to fetch data via https
const fetchUrl = (url, isBinary = false) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 404) {
        resolve(null);
        return;
      }
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to fetch: ${res.statusCode}`));
        return;
      }
      
      if (isBinary) {
        const data = [];
        res.on('data', (chunk) => data.push(chunk));
        res.on('end', () => resolve(Buffer.concat(data)));
      } else {
        let data = '';
        res.on('data', (chunk) => data += chunk);
        res.on('end', () => resolve(data));
      }
    }).on('error', reject);
  });
};

program
  .name('warped')
  .description('Zero-click CLI to install Warped Aesthetics terminal themes.')
  .version('1.0.0');

program
  .command('install <theme-id>')
  .description('Installs a theme and its background image into your Warp terminal.')
  .action(async (themeId) => {
    console.log(chalk.cyan(`\n✨ Searching for theme: ${chalk.bold(themeId)}...\n`));

    let foundCategory = null;
    let yamlContent = null;

    for (const cat of CATEGORIES) {
      const yamlUrl = `${REPO_BASE_URL}/${cat}/${themeId}.yaml`;
      const content = await fetchUrl(yamlUrl);
      if (content) {
        foundCategory = cat;
        yamlContent = content;
        break;
      }
    }

    if (!foundCategory) {
      console.log(chalk.red(`❌ Theme '${themeId}' not found. Please check the gallery for the correct ID.`));
      process.exit(1);
    }

    console.log(chalk.green(`✅ Found theme in category: ${chalk.bold(foundCategory)}`));
    console.log(chalk.cyan(`📥 Downloading assets...`));

    // Ensure Warp themes directory exists
    if (!fs.existsSync(WARP_DIR)) {
      fs.mkdirSync(WARP_DIR, { recursive: true });
    }

    // Write YAML
    const yamlPath = path.join(WARP_DIR, `${themeId}.yaml`);
    fs.writeFileSync(yamlPath, yamlContent);

    // Check for Background Image in the YAML
    // Looking for a path like: path: 'images/themes/lofi/glowinnight.jpg' or similar
    // Actually, based on our flat setup, the JPG has the exact same name.
    const jpgUrl = `${REPO_BASE_URL}/${foundCategory}/${themeId}.jpg`;
    const jpgContent = await fetchUrl(jpgUrl, true);

    if (jpgContent) {
      const jpgPath = path.join(WARP_DIR, `${themeId}.jpg`);
      fs.writeFileSync(jpgPath, jpgContent);
      console.log(chalk.green(`🖼️  Background image installed.`));
      
      // We must modify the downloaded YAML to ensure the path points strictly to the filename
      // because in the repo it might still have the relative public/images/themes/.. path
      const modifiedYaml = yamlContent.replace(/path:\s*['"].*?['"]/g, `path: '${themeId}.jpg'`);
      fs.writeFileSync(yamlPath, modifiedYaml);
    }

    console.log(chalk.magenta(`\n🎉 Theme '${themeId}' successfully installed!`));
    console.log(chalk.white(`👉 Open Warp > Settings > Appearance > Themes to apply it.\n`));
  });

program.parse();
