# NCUE Net Reminder

![NCUE Net Reminder](https://addons.cdn.mozilla.net/user-media/addon_icons/732/732930-64.png?modified=1473772816)

## Data stream reminder in net of NCUE dormitory

**Warning**: This addon will only active in net of NCUE dormitory.

### Introduction
Do you afraid of IP-locked by NCUE? Just try this addon.

~~I develop this addon because I have already been locked twice.~~


If any question, send email to let me know.

[初雪's Blog](https://j6qup3.github.io/)

### How to Install
If you have already installed **Firefox**, there are at least **three ways** to install this addon:

1. Go to [Addon Homepage](https://addons.mozilla.org/zh-TW/firefox/extensions/) and serach for **NCUE Net Reminder**. If you find it, just install !

2. Go to [ncue-net-reminder Homepage](https://addons.mozilla.org/zh-tw/firefox/addon/ncue-net-reminder/?src=search) and install.

3. After `git clone https://github.com/j6qup3/ncue-net-reminder.git`, executing `ncue-net-reminder/ncue-net-reminder.xpi`.

### Usage & Effects

- This addon will automatically and periodically check if data stream exceeds **remind-value**.

- The data stream value (MB) will be displayed on **toolbar-button**. You can check the detailed data stream value and remind-value when cursor stopping on toolbar-button. You can also open **setting-panel** by clicking toolbar-button.
![example image](https://addons.cdn.mozilla.net/user-media/previews/full/178/178587.png?modified=1474251423)
![example image](https://addons.cdn.mozilla.net/user-media/previews/full/178/178588.png?modified=1474251423)

- If data stream value exceeds remind-value, it will notify you and increase the remind-value. Also, data stream value displayed on toolbar-button will become red until clicking toolbar-button or notification.
![example image](https://addons.cdn.mozilla.net/user-media/previews/full/178/178586.png?modified=1474251423)

- Data stream value will reset to zero everyday, and remind-value will be initialized also.

- **Initial-value of remind-value**, **increment of remind-value**, and **cycle-time of checking data stream** can be set in **preferences** and setting-panel.

- - -

# 彰師大宿網流量提醒
## 彰師大宿網流量提醒附加元件

**警告**：這個附加元件只在彰師宿網內部有效。

### 簡介
怕爆流量被鎖 IP 嗎？立刻來試這款附加元件吧！

~~我被鎖兩次了所以才開發這元件 QQ~~


若有疑問歡迎來信~

[初雪的部落格](https://j6qup3.github.io/)

### 如何安裝
如果你有安裝 **Firefox**，那至少有**三種方式**可以安裝此插件：

1. 到 [附加元件首頁](https://addons.mozilla.org/zh-TW/firefox/extensions/) 搜尋 **NCUE Net Reminder** 就有了，裝下去就對了

2. 直接到 [ncue-net-reminder 頁面](https://addons.mozilla.org/zh-tw/firefox/addon/ncue-net-reminder/?src=search) 安裝

3. `git clone https://github.com/j6qup3/ncue-net-reminder.git` 後執行 `ncue-net-reminder/ncue-net-reminder.xpi`

### 使用方法 & 效果

- 這個附加元件會自動幫你定期檢測流量是否已達到**提醒值**

- **工具列按鈕**上會有當前流量值 (單位：MB)，游標停在上面可查看當前詳細流量以及下次的提醒流量，按下工具列按鈕可以展開**設定介面**         
![example image](https://addons.cdn.mozilla.net/user-media/previews/full/178/178587.png?modified=1474251423)
![example image](https://addons.cdn.mozilla.net/user-media/previews/full/178/178588.png?modified=1474251423)

- 若流量超過提醒值會警告，並將提醒值上調，工具列按鈕上的流量值會變成紅色，直到按下工具列按鈕或按下通知才會回復正常        
![example image](https://addons.cdn.mozilla.net/user-media/previews/full/178/178586.png?modified=1474251423)

- 超過 12 點流量歸零，提醒值也會回到初始值

- **提醒初始值**、**提醒值上調幅度**、**流量檢查的周期** 都可以在**偏好設置**和設定介面中設定

### 彰師大宿網流量提醒 VS 流量檢測器

- 流量檢測器：

 1. 用 Ubuntu 或 Mac 比較少免費又好用、無廣告的流量檢測的軟體 (像作者就是用 Ubuntu)

 2. 流量檢測不一定可以設置每天 12：00 重設，流量快爆炸時也不一定可以提醒你

 3. 如果更換電腦或 IP 那流量檢測就會有誤差

 4. 比較吃 ram 和 CPU

- 彰師大宿網流量提醒：

 1. 取得流量值的同時也會增加一點流量

 2. 依賴 firefox，要開著 firefox 才有作用

結論：~~Z > B~~