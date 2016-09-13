// require SDK modules
// 引入 SDK 模組
const pageMod = require("sdk/page-mod");
const data = require("sdk/self").data;
const prefSet = require("sdk/simple-prefs");
const ss = require("sdk/simple-storage");

// load reminder.js when visit http://10.200.1.1/*
// 跳轉到 10.200.1.1 就載入 reminder.js
pageMod.PageMod({
    include: "http://10.200.1.1/login_online_detail.php*",
    contentScriptFile: data.url("reminder.js"),
    // send params to reminder.js
    // 傳送參數給 reminder.js
    onAttach: function(worker){
      worker.port.emit('get-params', [ prefSet.prefs, ss.storage ]);
    },
    // receive return value from reminder.js
    // 接收 reminder.js 的回傳值
    onMessage: function(limit) {
      ss.storage.limit = limit;
    }
});
