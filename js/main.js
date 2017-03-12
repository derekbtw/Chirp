chrome.app.runtime.onLaunched.addListener(function() {
    runApp();
});


chrome.app.runtime.onRestarted.addListener(function() {
    runApp();
});


function runApp() {
    chrome.app.window.create('app.html', {
        id: "scan-web-window",
        innerBounds: {
            /*'width': 576,
            'height': 800*/
            'width': 530,
            'height': 630
        },
        frame: {
            'color': '#55ACEE'
        }
    });
}