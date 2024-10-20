# Kon PageBot

Originally created by Kenneth Aceberos

## Features
- **Mirai/autobot command structure** (Commands are in `neko/commands`)
- **1-hour auto post** (You can change this in `neko_bot.js`)
- **Auto git pull on your repo every restart** (Requires public repo) (Check `main.js` for reference)
- **Commands menu, quick replies, and buttons** (You can customize these)
- **Webpage with some details and restart bot feature**

This page bot is originally from: [Ai-Page-Bot GitHub](https://github.com/muhammadoren/Ai-Page-Bot).

---

## Prerequisites

Before starting, ensure you have a Facebook Page. If you don't have one, [create a Facebook Page](https://www.facebook.com/pages/create/).

---

## Step-by-Step Guide

### Step 1: Go to Facebook Developers
1. **Navigate to Facebook Developers:**
   - Open your web browser and go to [developers.facebook.com](https://developers.facebook.com).

2. **Create a Developer Account (if you don’t have one):**
   - If you’re new to Facebook Developers, log in with your Facebook credentials and follow the prompts to set up a developer account.

---

### Step 2: Create an App
1. **Create an App:**
   - Click on "My Apps" in the top-right corner.
   - Select "Create App".
   - Choose "Business" as the type of app.
   - Fill out the required details such as the app display name and contact email, then click "Create App ID".

---

### Step 3: Add Messenger Product
1. **Add Messenger:**
   - In the left sidebar of your app's dashboard, click on "Add Product".
   - Find "Messenger" and click on the "Set Up" button next to it.

---

### Step 4: Connect Your Facebook Page
1. **Generate a Page Access Token:**
   - Scroll down to the "Access Tokens" section.
   - Click on "Add or Remove Pages".
   - Follow the prompts to connect your Facebook Page.
   - Once connected, generate a Page Access Token by clicking "Generate Token". Copy this token for later use.

---

### Step 5: Set Up Webhooks
1. **Create a web service on Render or any hosting site:**
   - Open [render.com](https://render.com)
   - Sign Up and connect your GitHub account.
   - Click "New" > "Web Service".
   - Go back to GitHub, fork this repo, then return to Render.
   - Refresh Render, and find your forked repo.

2. **Important Configuration on Render:**
   - **Build command:** `npm install`
   - **Start command:** `node main.js`
   - **Environment Variables:**
     - Key: `pass`
     - Value: `<your desired password>`
   - For git pull:
     - Key: `repo`
     - Value: `<your forked repo>`
   - Turn off auto-deploy for git pull.
   - Create the web service.

3. **Configure the Webhooks (Messenger):**
   - In the Messenger settings, scroll to the "Webhooks" section.
   - Click on "Setup Webhooks".
   - Enter the following details:
     - **Callback URL:** `https://your_hosting.site/webhook`
     - **Verify Token:** `nekoai`
   - Subscribe to the following fields:
     - `messages`
     - `messaging_optins`
     - `messaging_postbacks`
     - `feed`
   - Click "Verify and Save".

---

### Step 6: Add Page Subscriptions
1. **Subscribe to Page Events:**
   - In the Webhooks section, under "Page Subscriptions", select the page you connected earlier.
   - Ensure that `messages`, `messaging_optins`, `messaging_postbacks`, and `feed` are selected for this subscription.

---

### Step 7: Get Your Page Access Token
1. **Retrieve Token:**
   - Go back to the "Access Tokens" section.
   - Copy the generated Page Access Token.

---

### Step 8: Enter Page Access Token
1. **Configure Bot with Token:**
   - Paste the Page Access Token into `neko/api.js` on `const token`.

   **Recommended for security:**
   - Put your token in Environment Variables. Edit the environment variables in the "Environments" tab.
     - Key: `token`
     - Value: `<your copied page access token>`
   - Save the changes.

---

### Step 9: Test Your Messenger Bot
1. **Test Bot Functionality:**
   - Open your connected Facebook Page.
   - Send a message to your page.
   - Just send the prefix (Default is "/") or "hi" to check if it's working.

---

### Notes:
- You're in developer mode, meaning the bot will only respond to accounts with specific roles assigned within the app. To use the bot from a different account or user, switch to **Live Mode**.

---

## How to Switch to Live Mode
- Find **App Mode** and switch to **Live**.
- Follow the required steps (usually includes adding a Privacy Policy and Terms of Service).
  
---

## How to Change Admins
- To get the ID: Type `/id`.
- Example ID format: `8439419946124905` (This is **not** a user ID from your profile).
- To change the admin list, go to `neko/api.js` and edit the `admin` array.

---

## Credits
- Originally based on [Ai-Page-Bot](https://github.com/muhammadoren/Ai-Page-Bot) by muhammadoren.
- **Joshua Sy (Deku)** - API.
- **All developers and coders in the ChatBot Community** for helping build this bot.

**Note:** You are free to modify this file. You can do whatever you want.
