// return data stream when loading
// 一載入就回傳流量
if (document.getElementsByClassName('color-blue1 bold midDis')[2] === undefined)
  self.postMessage('0B');
else
  self.postMessage(document.getElementsByClassName('color-blue1 bold midDis')[2].innerHTML);
// reload automatically
// 自動重整
setTimeout(function() {
  window.location.reload()
}, self.options.delay_time * 60 * 1000);
