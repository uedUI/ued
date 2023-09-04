#!/usr/bin/env sh

# 忽略错误
# set -e

# 构建
pnpm run docs:build
# 进入待发布的目录
cd docs/.vitepress/dist
git init
git remote add origin git@github.com:uedUI/uedUI.git
git add -A
git commit -m 'docs(update):更新文档'
# 访问地址：https://uedui.github.io/uedUI/
git push -f origin master