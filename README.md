# NCUE Net Reminder
## Data stream reminder in net of NCUE dormitory

**Warning**: This addon will only active in net of NCUE dormitory.(http://10.200.1.1/login_online_detail.php will only be connected in net of NCUE dormitory)

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

This addon will automatically and periodically check if data stream exceeds **remind-value**.
Open http://10.200.1.1/login_online_detail.php when you want to use this addon.
If data stream exceeds remind-value, it will alert you and increase the remind-value.
Data stream will reset to zero, and remind-value will be initialized also.
**Initial-value of remind-value**, **increment of remind-value**, and **cycle-time of checking data stream** can be set in **preferences**.

Example:

![example](https://addons.cdn.mozilla.net/user-media/previews/full/178/178344.png?modified=1473724821)

- - -

# 彰師大宿網流量提醒
## 彰師大宿網流量提醒附加元件

**警告**：這個附加元件只在彰師宿網內部有效。(http://10.200.1.1/login_online_detail.php 要在彰師內部網路才連的上)

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

這個附加元件就會自動幫你定期檢測流量是否已達到**提醒值**
使用時請開著 http://10.200.1.1/login_online_detail.php
若超過提醒值會彈窗警告，並將提醒值上調
超過 12 點流量歸零，提醒值也會回到初始值
**提醒初始值**、**提醒值上調幅度**、**流量檢查的周期** 都可以在「**偏好設置**」中設定

範例：

![範例](https://addons.cdn.mozilla.net/user-media/previews/full/178/178344.png?modified=1473724821)