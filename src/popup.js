// const changeColor = document.querySelector('#changeColor');
//
// chrome.storage.sync.get('color', function(data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
// });
//
// changeColor.addEventListener('click', (el) => {
//   const color = el.target.value;
//   chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//     chrome.tabs.executeScript(tabs[0].id, {
//       code: 'document.body.style.backgroundColor = "' + color + '";'
//     });
//   });
// });
const button = document.querySelector('button');

button.addEventListener('click', function (e) {

});
