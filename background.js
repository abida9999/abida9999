// background.js
chrome.runtime.onInstalled.addListener(() => {
    console.log("WebFox Extension Installed.");
});

// Example listener for handling web requests
chrome.webRequest.onBeforeRequest.addListener(
    (details) => {
        // Perform phishing detection here
        console.log("Request detected:", details.url);
    },
    { urls: ["<all_urls>"] },
    ["blocking"]
);
