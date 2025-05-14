## 🌟 How to Use the Toyhouse Bump Bot
I have the time and energy to spam bumps on my comms page. So I made a bot as a little side project.

This guide will help you run the bump bot that automatically bumps your Toyhouse thread every 30–45 minutes.

---

### ✅ 1. What You Need

- A computer with **Node.js** installed (you’ll only install this once)
- Your **Toyhouse login cookies**
- A `.env` file (you’ll create this below)
- This bot folder (ask your friend to give it to you or clone from GitHub)

---

### 🧠 One-Time Setup Steps

#### 🟣 A. Install Node.js

1. Go to: https://nodejs.org/
2. Download the **LTS version** (the one that says “Recommended”)
3. Run the installer and follow the steps
4. When it finishes, you're ready to move on!

---

#### 🟣 B. Download the Bot Files

- If someone gave you a `.zip` file, unzip it somewhere easy (like Desktop)
- Or if you're using GitHub, you can click “Code → Download ZIP” and unzip it

---

#### 🟣 C. Open a Terminal

On Windows:
- Press `Windows Key + R`, type `cmd`, press Enter

Then:
- Type `cd Desktop\YourBotFolder` (replace with the real folder name)

---

#### 🟣 D. Install Required Packages

Once you're in the folder:
```bash
npm install
```

This installs everything the bot needs (like Puppeteer).

---

### 📦 Create Your `.env` File

1. Inside the bot folder, create a file named `.env` (no name, just `.env`)
2. Paste this in:

```
COOKIES_PATH=./cookies.json
BUMP_URL=https://toyhou.se/~forums/{WHATEVER}
HEADLESS=false
```

> Replace the `BUMP_URL` with your own! See below how to get it.

---

### 🔗 How to Get Your Bump URL

1. Go to your **forum thread** on [toyhou.se](https://toyhou.se)
2. Click the **“Bump”** button manually
3. While it’s bumping, **look at your browser’s address bar**
4. It should look something like this:

```
https://toyhou.se/~forums/71.art-marketplace/123456.thread-title-here/bump?t=1234567890
```

5. **Copy that full link** and paste it as the `BUMP_URL` in your `.env`

✅ That’s the exact URL the bot will visit to bump your thread automatically.

---

### 🍪 Get Your Toyhouse Cookies

You’ll only need to do this once.

1. Go to [https://toyhou.se](https://toyhou.se) and **log in**
2. Open DevTools (press `F12` on your keyboard)
3. Go to the **Application** tab → **Cookies** on the left
4. Click the `https://toyhou.se` entry
5. Right-click and **Export cookies to JSON** using an extension like:
   - Chrome/Edge: [EditThisCookie](https://chrome.google.com/webstore/detail/editthiscookie/fngmhnnpilhplaeedifhccceomclgfbg)
   - Firefox: [Cookie Quick Manager](https://addons.mozilla.org/en-US/firefox/addon/cookie-quick-manager/)
6. Save the cookies as `cookies.json` in the bot folder

---

### ▶️ Start the Bot

Go back to your terminal (make sure you're still in the bot folder), and run:

```bash
node index.js
```

That’s it! 🎉

The bot will now:
- Open the bump URL
- Wait 30–45 minutes randomly
- Bump again… forever!

---

### ❌ To Stop the Bot

Just close the terminal window, or press `Ctrl + C`

---

### ✅ Tips

- Keep your computer running while the bot is on
- You don’t need to touch anything once it’s running
- If it fails to bump, the bot will retry after the next delay
