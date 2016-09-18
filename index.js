// require SDK modules
// 引入 SDK 模組
const prefSet = require("sdk/simple-prefs");
const { Page } = require('sdk/page-worker');
const { data } = require("sdk/self");
const { notify } = require('sdk/notifications');
const { ToggleButton } = require('sdk/ui/button/toggle');
const { Panel } = require("sdk/panel");

// create a toolbar-button and setting-panel
// 建立工具列按鈕和設定介面
let button = ToggleButton({
  id: "data-stream",
  label: "Show Data-stream",
  icon: {
    "18": data.url('img/18.png'),
    "36": data.url('img/36.png'),
    "16": data.url('img/16.png'),
    "32": data.url('img/32.png'),
    "64": data.url('img/64.png')
  },
  onChange: function() {
    button.badgeColor = "#00AAAA";
    Panel({
      contentURL: data.url("panel.html"),
      contentScriptFile: data.url("panel.js"),
      contentScriptOptions: {
        prefs: prefSet.prefs
      },
      onHide: function() {
        button.state('window', {checked: false});
        this.destroy();
      },
      onMessage: function(prefs) {
        for(var index in prefs)
          if (index.slice(0, 4) !== 'sdk.')
            prefSet.prefs[index] = prefs[index];
        this.hide();
      },
      width: 450,
      height: 600
    }).show({
      position: button
    });
  },
  badge: 0,
  badgeColor: "#00AAAA"
});

// initialize remind-value
// 提醒流量的初始化
let remind_value = prefSet.prefs.alert_min;

// create and load invisable page
// 建立並載入隱形的頁面，依照回傳值做相應的處理
let worker = Page({
  contentScriptFile: data.url('reminder.js'),
  contentURL: 'http://10.200.1.1/login_online_detail.php',
  contentScriptOptions: {
    delay_time: prefSet.prefs.delay_time
  },
  onMessage: function(str) {
    let mb = 0;
    if (str.charAt(str.length-2) === 'G')
      mb = parseFloat(str) * 1024;
    else if (str.charAt(str.length-2) === 'M')
      mb = parseFloat(str);
    // data-stream was initialized everyday
    // 隔日流量初始化
    if (mb < remind_value - prefSet.prefs.alert_mid)
      remind_value = prefSet.prefs.alert_min;
    button.badge = str;
    if (mb >= 8 * 1024)
    {
      button.badgeColor = "#FF0000";
      notify({
        title: '流量爆了！',
        text: '您的流量目前是 ' + str + '，已經超過宿網 8G 上限 !! 幫 QQ',
        iconURL: data.url('img/AAA.png'),
        onClick: function() {
          button.badgeColor = "#00AAAA";
        }
      });
    }
    else if (mb >= remind_value)
    {
      // remind-value will nerver be smaller than (data stream - increment)
      // 流量提醒值不會低於 (當前流量 - 上調幅度)
      if (prefSet.prefs.alert_mid > 0)
        while (mb >= remind_value + prefSet.prefs.alert_mid)
          remind_value += prefSet.prefs.alert_mid;
      button.badgeColor = "#FF0000";
      notify({
        title: '流量提醒',
        text: '您的流量目前是 ' + str + '，已經超過當前的提醒流量 -- ' + remind_value + ' MB !! 請節省使用。\n下次的提醒流量是 ' + (remind_value + prefSet.prefs.alert_mid) + ' MB',
        iconURL: data.url('img/AAA.png'),
        onClick: function() {
          button.badgeColor = "#00AAAA";
        }
      });
      remind_value += prefSet.prefs.alert_mid;
    }
    button.label = '當前已用 ' + str + '\n下一次提醒流量為 ' + remind_value + ' MB';
  }
});
