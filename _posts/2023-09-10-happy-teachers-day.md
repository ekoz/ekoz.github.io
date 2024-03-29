---
layout: post
title: Everything happens for a reason
subtitle: 关于当前工程是如何启动的
author: eko.zhan
categories: Jekyll
banner:
  video: /assets/videos/happy_teachers_day.mp4
  loop: true
  volume: 0.8
  start_at: 0.0
  image: /assets/images/banners/happy_teachers_day.jpg
  opacity: 0.618
  background: "#000"
  height: "100vh"
  min_height: "38vh"
  heading_style: "font-size: 4.25em; font-weight: bold; text-decoration: underline"
  subheading_style: "color: gold"
tags: jekyll
top: 1
sidebar: []
---
# Blog

## 运行命令

`bundle exec jekyll serve`

访问地址：[http://localhost:4000/](http://localhost:4000/)

如果修改 `_config.yml` 需要重启工程才能预览

## 环境准备

1. [Ruby](https://github.com/ruby/ruby) ，Win10 使用 [RubyInstaller-WITH DEVKTI](https://rubyinstaller.org/downloads/)，笔者的版本是 3.1.2-1(x64)，注意安装路径不要有空格
2. 安装完毕后，需要继续安装 `MSYS2`，理论上 Finish 窗口页面默认勾选，直接单击 Finish，就继续安装 `MSYS2`，如果你一不小心没有勾选单击了 Finish，可以在 cmd 中运行命令 `ridk install`，效果一样
3. 安装 `MSYS2` 窗口中，提示 `Which components shall be installed? If unsure press ENTER [1, 3]`，可以直接按回车键
   ![](/assets/images/20231023183226.png)

![](/assets/images/20231023183238.png) 4. 安装完毕后，cmd 输入 ruby -v 查看版本 5. 参考 [jekyll 官网](https://jekyllrb.com)上的命令安装 jekyll 和 bundler，`gem install bundler jekyll` 6. `jekyll -v` `bundler -v` 验证安装是否成功 7. 参考 [jekyll-theme-yat](https://github.com/jeffreytse/jekyll-theme-yat) 的步骤来使用即可，笔者是 `git clone https://github.com/jeffreytse/jekyll-theme-yat.git blog`

```shell
# gem 切换国内镜像源
gem sources --add https://mirrors.tuna.tsinghua.edu.cn/rubygems/ --remove https://rubygems.org/
```

8. 进入 blog 目录后，运行 `bundle exec jekyll serve`
9. 访问 [http://localhost:4000/](http://localhost:4000/)
