/** @type {import("chrome")} */
chrome.webRequest.onBeforeRequest.addListener(
    (details) => {
        const Libreddit = /reddit.com(\/?.*)/;

        if (Libreddit.test(details.url) === true) {
            return { redirectUrl: "https://libreddit.kavin.rocks" + Libreddit.exec(details.url)[1] };
        }
    },
    {urls: ["*://*.reddit.com/*"]}
);