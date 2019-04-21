// chrome.runtime.onInstalled.addListener(function() {
//   chrome.storage.sync.set({color: '#3aa757'}, function() {
//     console.log('The color is green.');
//   });
// });


chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {

    // debugger;
    // alert(anyWin.width);
    chrome.windows.update(msg.win.id, {
      state: 'maximized'
    }, function(maxWin) {
      // alert(maxWin.width);
      const frameWidth = (maxWin.width - screen.availWidth) / 2;
      // alert(frameWidth);
      const obj = {
        left: -frameWidth,
        top: 0,
        width: (screen.availWidth / 2) + (2 * frameWidth),
        height: screen.availHeight + frameWidth
      };
      // alert(obj.width);
      chrome.windows.update(maxWin.id, obj);

    });

});




// chrome.runtime.onInstalled.addListener(function() {

// });

// chrome.browserAction.onClicked.addListener(function (e) {
//
//   chrome.windows.getCurrent(function(w) {
//     const resizeHandleSize = (w.width - window.innerWidth) / 2;
//     alert(resizeHandleSize);
//       // chrome.windows.update(w.id, {
//       //   left: 0,
//       //   top: 0,
//       //   width: screen.width / 2,
//       //   height: screen.height
//       // });
//   });
//
// });
