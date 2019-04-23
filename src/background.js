function getOptsObj(frame, edge, size) {
  if (size === 'half') {
    switch (edge) {
      case 'left':
        return {
          left: -frame,
          top: -frame,
          width: (screen.availWidth / 2) + (2 * frame),
          height: screen.availHeight + (2 * frame)
        };
      case 'right':
        return {
          left: (screen.availWidth / 2) - frame + 1,
          top: -frame,
          width: (screen.availWidth / 2) + (2 * frame),
          height: screen.availHeight + (2 * frame)
        };
    }
  }
};

const maxObj = {
  state: 'maximized'
};

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  chrome.storage.local.get('frame', function(data) {
    if (data.frame) {
      chrome.windows.update(msg.win.id, getOptsObj(data.frame, msg.edge, msg.size));
    } else {
      chrome.windows.update(msg.win.id, maxObj, function(maxWin) {
        const frameWidth = (maxWin.width - screen.availWidth) / 2;
        chrome.storage.local.set({ frame: frameWidth }, function() {
          chrome.windows.update(maxWin.id, getOptsObj(frameWidth, msg.edge, msg.size));
        });
      });
    }
  });
});
