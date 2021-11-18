---
title: Nginx
date: 2021-10-27
tags:
  - Nginx
categories:
  - Website
---

今天被派去政府参加个比赛，要发布前端项目到 ecs 上，需要用指定的软件 fileZilla 和 Xshell。之前完全没用过，所以研究了一下。

mac 安装 nginx
brew install nginx
(我安装过程中报错 No such file or directory，就先去更新了下 Homebrew)

nginx.conf 配置文件位置：/usr/local/etc/nginx/nginx.conf
vim /usr/local/etc/nginx/nginx.conf

vim 编辑文件
:q 会警告您未保存的更改，并且不会让您退出
:q!不会警告你
:wq(保存编辑操作退出)
:wq!(保存编辑强制退出)

查看 mac 终端端口命令 netstat -AaLlnW
查看 端口所在进程 lsof -i:8080

```
COMMAND：进程的名称 PID：进程标识符

USER：进程所有者

FD：文件描述符，应用程序通过文件描述符识别该文件。如cwd、txt等 TYPE：文件类型，如DIR、REG等

DEVICE：指定磁盘的名称

SIZE：文件的大小

NODE：索引节点（文件在磁盘上的标识）

NAME：打开文件的确切名称
```

关闭进程 kill -9 pid

启动：sudo nginx
重启：sudo nginx -s reload
退出：sudo nginx -s quit

[参考](https://sweattea.github.io/2018/10/26/Vue-CLI-3.0-%E4%BB%8E%E6%90%AD%E5%BB%BA%E5%88%B0%E9%83%A8%E7%BD%B2%E5%88%B0%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%95%B4%E4%B8%AA%E6%B5%81%E7%A8%8B%E5%8F%8A%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88-2018/)
