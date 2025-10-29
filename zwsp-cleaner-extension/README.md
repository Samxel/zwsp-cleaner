# ZWSP Cleaner (Browser Extension)

Removes invisible zero-width and BOM characters from copied text directly in your browser.

## Installation (Chrome / Edge / Brave)

1. Download or clone this repository  
2. Go to `chrome://extensions/`
3. Enable **Developer mode** (top right)
4. Click **Load unpacked**
5. Select the `zwsp-cleaner-extension/` folder
6. The extension is now active and will automatically clean copied text

## Installation (Firefox)

1. Go to `about:debugging#/runtime/this-firefox`
2. Click **Load Temporary Add-on**
3. Select `manifest.json` from this folder
4. The extension will run until the next restart

## How it works

Whenever you copy text on a webpage, the extension removes:
- U+200B — Zero Width Space  
- U+200C — Zero Width Non-Joiner  
- U+200D — Zero Width Joiner  
- U+FEFF — Zero Width No-Break Space (BOM)