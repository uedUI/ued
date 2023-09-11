### commit message

##### Commit Message 格式

- Message 格式规范：分成标题，内容详情，结尾三部分

- 标题

```
<type>(<scope>): <subject>
<空行>
<body>
<空行>
<footer>
```

- Type
  - feat：新功能（feature）
  - fix：修补 bug
  - docs：文档（documentation）
  - style： 格式（不影响代码运行的变动）
  - refactor：重构（即不是新增功能，也不是修改 bug 的代码变动）
  - test：增加测试
  - chore：构建过程或辅助工具的变动
- Scope
  - 说明本次commit影响的范围，简要说明修改会设计的部分
- Subject
  - 简要描述本次改动
- Body
  - 是对Subject里内容的展开，在此做更加详尽的描述
- Footer
  - 放置不兼容的变更和Issue关闭的信息

### git flow 工作流程

- 参考链接：[https://danielkummer.github.io/git-flow-cheatsheet/index.zh_CN.html]

- 新建功能

  - 新建feature分支

  ```shell
  git checkout -b feature/MYFEATURE
  git flow feature start MYFEATURE
  ```

  - 完成新功能开发，将feature分支合并到develop分支
  - 现在已写成文件，直接执行命令 yarn feature即可

  ```shell
  git flow feature finish MYFEATURE
  ```

  - 基于最新的develop分支，切出release分支，此版本为预发布版本，分支为版本号

  ```shell
  git checkout -b release/1.0.0
  git flow release start release/1.0.0
  ```

  - 测试无问题， 合并前执行yarn release 命令，输出提交日志，合并到develop分支和mian/master分支，输入版本信息
  - 输出提交日志使用的是standard-version，此时已经进行打版，git flow release finish -n中 -n配置跳过打版

  ```shell
  yarn release
  ```

  - 在develop分支，并推送develop分支到远程

  ```shell
  git push origin develop
  ```

  - 切换到main/master 分支, 推送到远程，推送最新的tag到远程

  ```shell
  git push origin main
  git push origin v1.0.0
  ```

- bug修改
  - 新增一个hotfix分支
  ```
  git checkout -b hotfix/1.0.1
  git flow hotfix start 1.0.1
  ```
  - 修改完成后的操作与release一样
