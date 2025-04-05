## 🌟 How to Use the Toyhouse Bump Bot

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
BUMP_URL=https://toyhou.se/~forums/71.art-marketplace/202684.sale-5eur-50eur-open/bump?t=1743815689
HEADLESS=false
```

---

### 🍪 Get Your Toyhouse Cookies

You’ll only need to do this once.

1. Go to [https://toyhou.se](https://toyhou.se) and **log in**
2. Open DevTools (press `F12` on your keyboard)
3. Go to the **Application** tab → Cookies
4. Right-click and export the cookies to a file named: `cookies.json`
5. Save that file in your bot folder

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

---

Let me know if you want this as a downloadable PDF or Markdown version too!
