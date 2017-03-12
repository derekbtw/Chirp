var wv = document.querySelector('webview');

wv.addEventListener('loadcommit', function() {
  wv.insertCSS({
    code: 'body { background-color: #fff !important; } body, .DMInbox-content.u-scrollY {overflow: hidden !important; } .DMInboxItem-snippet { font-size: 16px !important; line-height: 20px !important; max-height: 40px !important; } .DMInboxItem-title { line-height: 25px !important; } .DirectMessage-text .tweet-text { font-size: 16px !important; line-height: 20px !important; } button.DMActivity-close.js-close.u-textUserColorHover, .topbar.js-topbar, .dashboard, .content-main { display: none !important; } .message .message-text { width: 80vw !important; } div#doc.route-home { display: block !important; } .DMActivity { border-radius: 0 !important; min-height: 100vh !important; height: 100vh !important; min-width: 100vw !important; width: 100vw !important; max-width: 100vw !important; z-index: 99999 !important; }',
    runAt: 'document_start'
  });
});

