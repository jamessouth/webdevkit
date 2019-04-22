// chrome.storage.local.clear();


function getSizeObj(fW) {
  return {
    left: -fW,
    top: 0,
    width: (screen.availWidth / 2) + (2 * fW),
    height: screen.availHeight + fW
  };
};


const maxObj = {
  state: 'maximized'
};


chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {

  chrome.storage.local.get('frame', function(data) {
    console.log(data.frame);
    if (data.frame) {
      console.log('frame known');
      chrome.windows.update(msg.win.id, getSizeObj(data.frame));
    } else {
      console.log('frame unknown');
      chrome.windows.update(msg.win.id, maxObj, function(maxWin) {
        const frameWidth = (maxWin.width - screen.availWidth) / 2;
        chrome.storage.local.set({frame: frameWidth}, function() {
          chrome.windows.update(maxWin.id, getSizeObj(frameWidth));
        });
      });
    }
  });

});
