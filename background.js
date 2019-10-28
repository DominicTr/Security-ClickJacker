chrome.runtime.onInstalled.addListener(function() {
    chrome.tabs.create({"url": "https://facebook.com"});
});