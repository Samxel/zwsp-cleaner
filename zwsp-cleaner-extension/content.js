// Removes zero-width and invisible unicode characters when copying text
(function() {
    'use strict';

    const ZW_REGEX = /[\u200B\u200C\u200D\uFEFF]/g;

    // Replace clipboard content with cleaned version
    function cleanText(text) {
        return text ? text.replace(ZW_REGEX, '') : text;
    }

    document.addEventListener('copy', (event) => {
        const selection = window.getSelection().toString();
        if (!selection) return;

        const cleaned = cleanText(selection);

        if (event.clipboardData) {
            event.clipboardData.setData('text/plain', cleaned);
            event.preventDefault();
        }
    });

	document.addEventListener('click', async () => {
        await new Promise(r => setTimeout(r, 50));

        try {
            const text = await navigator.clipboard.readText();
            const cleaned = cleanText(text);

            if (text !== cleaned) {
                await navigator.clipboard.writeText(cleaned);
            }
        } catch (err) {
            // Ignore errors
        }
    }, true);

    if (navigator.clipboard && navigator.clipboard.writeText) {
        const originalWriteText = navigator.clipboard.writeText.bind(navigator.clipboard);

        navigator.clipboard.writeText = async function(text) {
            const cleaned = cleanText(text);
            return originalWriteText(cleaned);
        };
    }
})();