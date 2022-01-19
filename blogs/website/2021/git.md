---
title: git拉取分支
date: 2021-10-28
tags:
  - git
categories:
  - Website
---

基本的一些 git 命令

```
git branch //查看本地所有分支
git branch -r //查看远程所有分支
git branch -a //查看本地及远程分支
git branch <branchname> //新建分支
git branch -d <branchname> //删除本地分支

git branch -d -r <branchname> //删除远程分支，删除后还需推送到服务器
git push origin:<branchname>  //删除后推送至服务器

git branch -m <oldbranch> <newbranch> //重命名本地分支

//git中一些选项解释:

-d
--delete：删除

-D
--delete --force的快捷键

-f
--force：强制

-m
--move：移动或重命名

-M
--move --force的快捷键

-r
--remote：远程

-a
--all：所有
```

如何拉取本地不存在的远程仓库分支？

```
git fetch origin 分支名 （本地还没有这个分支在线上的记录的话，先要fetch一下）
git checkout -b 本地分支名 origin/远程分支名
```

如何本地创建新分支推送到远程仓库？（设置本地分支追踪远程分支）

```
git branch -b 新分支名
git push --set-upstream origin 分支名
```

![git](https://pic1.xuehuaimg.com/proxy/https://i.imgur.com/jNpkXqh.jpg)
git fetch 是将远程主机的最新内容拉到本地，用户在检查了以后决定是否合并到工作本机分支中。

而 git pull 则是将远程主机的最新内容拉下来后直接合并，即：git pull = git fetch + git merge，这样可能会产生冲突，需要手动解决。

```
git checkout master  //选择or切换到master分支
git merge dev        //将dev分支合并到当前分支(master)中
```

[参考](https://www.cnblogs.com/runnerjack/p/9342362.html)

11/18 更新
git reset 不小心回退过早版本，以为丢失了最近修改。
可以用 git reflog 查找记录，再用 reset 回滚
