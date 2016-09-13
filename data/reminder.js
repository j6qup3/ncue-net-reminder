// receive params from index.js
// 從 index.js 那接收參數
self.port.on("get-params", function(params) {
  const prefs = params[0];
  let limit = params[1].limit;
  const mb = document.getElementsByClassName('color-blue1 bold midDis')[2].innerHTML;
  document.title = mb + " - 彰師宿網";
  const num = parseFloat(mb);
  if (limit === undefined || num < limit - prefs.alert_mid)
    limit = prefs.alert_min;
  if (num >= limit)
  {
    while (num >= limit + prefs.alert_mid)
      limit += prefs.alert_mid;
    alert('您的流量目前是 ' + mb + '，已經超過當前的提醒流量 -- ' + limit + ' MB !! 請節省使用。\n下次的提醒流量是 ' + (limit + prefs.alert_mid) + ' MB');
    limit += prefs.alert_mid;
    self.postMessage(limit);
  }
  setTimeout(function() {
    window.location.reload()
  }, 60000 * prefs.delay_time);
});
