const puppeteer = require('puppeteer');
const fs = require('fs');
require('dotenv').config();

// Load from .env
const bumpURL = process.env.BUMP_URL;
const cookiesPath = process.env.COOKIES_PATH || './cookies.json';
const headlessMode = process.env.HEADLESS === 'true'; // 'false' by default

// Randomized delay helper
const delay = (ms) => new Promise(res => setTimeout(res, ms));

// Generate a wait time: 30 + random(0–15) minutes
const getRandomizedDelay = () => {
    const baseMinutes = 30;
    const extraMinutes = Math.floor(Math.random() * 16); // 0–15
    return (baseMinutes + extraMinutes) * 60 * 1000; // in ms
};

// Bump request
async function bumpThread(page) {
    try {
        console.log(`🔄 Bumping thread at ${new Date().toLocaleTimeString()}...`);
        await page.goto(bumpURL, { waitUntil: 'networkidle2' });
        console.log('✅ Bump sent successfully!');
    } catch (err) {
        console.error('❌ Error during bump:', err.message);
    }
}

(async () => {
    const browser = await puppeteer.launch({
        headless: headlessMode,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    // Load cookies from .env path
    const cookies = JSON.parse(fs.readFileSync(cookiesPath, 'utf8'));
    await page.setCookie(...cookies);

    // Loop forever with smart delay
    while (true) {
        await bumpThread(page);

        const nextDelay = getRandomizedDelay();
        const minutes = Math.floor(nextDelay / 60000);
        console.log(`⏳ Waiting ${minutes} minutes until next bump...`);

        await delay(nextDelay);
    }

    // Optional: await browser.close();
})();
