function redirector() {
    if (!window.location.href.includes("youtube.com/shorts/")) {
        return;
    }
    const currentUrl = window.location.href;
    let redirect = currentUrl.replace("youtube.com/shorts/", "youtube.com/watch?v=");
    window.location.replace(redirect);
}

redirector();

window.addEventListener('yt-navigate-start', function () {
    const currentUrl = window.location.href;
    let redirect = currentUrl.replace("youtube.com/shorts/", "youtube.com/watch?v=");
    window.location.replace(redirect);
});
