const buttons = document.querySelectorAll('button');

for (b of buttons) {
  b.addEventListener('click', function (e) {
    chrome.windows.getCurrent(function(thisWin) {
      chrome.runtime.sendMessage({
        win: thisWin,
        edge: e.target.dataset.edge,
        size: e.target.dataset.size
      });
    });
  });
}
