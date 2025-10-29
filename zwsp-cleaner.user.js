// ==UserScript==
// @name         Remove Zero Width Characters on Copy
// @namespace    https://github.com/Samxel/zwsp-cleaner
// @version      2025-10-29
// @description  Automatically removes zero-width spaces and similar invisible characters when copying text from websites.
// @author       Samxel
// @match        https://*/*
// @match        http://*/*
// @updateURL    https://raw.githubusercontent.com/Samxel/zwsp-cleaner/main/zwsp-cleaner.user.js
// @downloadURL  https://raw.githubusercontent.com/Samxel/zwsp-cleaner/main/zwsp-cleaner.user.js
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const ZW_REGEX = /[\u200B\u200C\u200D\uFEFF]/g;

    document.addEventListener('copy', (event) => {
        let selection = window.getSelection().toString();
        let cleaned = selection.replace(ZW_REGEX, '');

        // Replace clipboard content with cleaned version
        if (event.clipboardData) {
            event.clipboardData.setData('text/plain', cleaned);
            event.preventDefault();
        }
    });
})();
