
const button = document.querySelector('button');

button.addEventListener('click', function (e) {
  chrome.windows.getCurrent(function(thisWin) {
    chrome.runtime.sendMessage({win: thisWin});
  });
});
