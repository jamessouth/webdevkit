const buttons = document.querySelectorAll('button');
const os = navigator.userAgent.includes('Windows') ? 'Win' :
           navigator.userAgent.includes('Mac') ? 'Mac' :
           'Linux';

for (b of buttons) {
  b.addEventListener('click', function (e) {
    chrome.windows.getCurrent(function(thisWin) {
      chrome.runtime.sendMessage({
        win: thisWin,
        os: os,
        edge: e.target.dataset.edge,
        size: e.target.dataset.size
      });
    });
  });
}
