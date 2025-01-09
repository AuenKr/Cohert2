// background.js
chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed!");
});

// Example: Listening for messages
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("Message received:", message);
  sendResponse({ reply: "Message received by background script!" });
});
