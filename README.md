# ZWSP Cleaner

A small toolset (Tampermonkey userscript + browser extension) that removes **zero-width and invisible Unicode characters** from copied text.  

---

## Example

Here’s an example text containing a **zero-width space (U+200B)**:

```

Hello​World

```

It looks normal — but if you move the cursor between the words, there’s an invisible character.  
After cleaning, it becomes:

```

HelloWorld

````

---

## Why this exists

When copying from some websites (like ChatGPT), hidden zero-width characters may be inserted automatically.  
These characters are invisible and can only be seen when specifically searching for them.

This project provides:
1. A **Tampermonkey userscript** that cleans copied text directly in the browser  
2. A **browser extension** (for Chrome/Firefox) that cleans clipboard content globally

---

## Installation

### 1. Tampermonkey Userscript

**Requirements:**  
[Tampermonkey](https://www.tampermonkey.net/) installed in your browser.

**Steps:**
1. Click [this link](https://github.com/Samxel/zwsp-cleaner/raw/main/zwsp-cleaner.user.js) to open the userscript directly in Tampermonkey  
   – or open the Tampermonkey dashboard → **Create a new script** and paste the contents of [`zwsp-cleaner.user.js`](./zwsp-cleaner.user.js)
2. Save and enable the script
3. Visit any website and copy some text - zero-width characters will be removed automatically
---

### 2. Browser Extension

**Requirements:**  
A Chromium-based browser (Chrome, Edge, Brave) or Firefox.

**Steps (Chromium):**
1. Clone or download this repository  
2. Open `chrome://extensions/`
3. Enable **Developer mode**
4. Click **Load unpacked** and select the `extension/` folder
5. The extension will now monitor and clean clipboard content automatically

**Steps (Firefox):**
1. Open `about:debugging#/runtime/this-firefox`
2. Click **Load Temporary Add-on**
3. Select the `manifest.json` file inside the `extension/` directory

---

## How it works

Both the userscript and the extension remove these Unicode characters:

| Character  | Unicode  
|------------|-------------------------------------|
| U+200B     | Zero Width Space                    |
| U+200C     | Zero Width Non-Joiner               |
| U+200D     | Zero Width Joiner                   |
| U+FEFF     | Zero Width No-Break Space (BOM)     |

They run a simple regular expression on every copied text and overwrite the clipboard content with the cleaned version.
