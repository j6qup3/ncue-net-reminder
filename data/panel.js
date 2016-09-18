// active when save button was clicked
// 儲存按鈕按下時觸發
document.getElementById('save').onclick = function() {
  for(var index in self.options.prefs)
    if (index.slice(0, 4) !== 'sdk.')
      self.options.prefs[index] = parseInt(document.getElementById(index).value);
  self.postMessage(self.options.prefs);
}
// initialize
// 初始化
for(var index in self.options.prefs)
  if (index.slice(0, 4) !== 'sdk.')
    document.getElementById(index).value = self.options.prefs[index];
