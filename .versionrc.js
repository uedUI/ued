// stander-version的配置文件
module.exports = {
  // 跳过
  skip: {
    bump: false, // 取得当前版本
    commit: true, // 提交变动
    changelog: false, // 自动产出changelog文档
    tag: false // 在git中增加tag标识
  },
  // types为Conventional Commits标准中定义，目前支持https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional
  // "type" commit 类型
  // "section" 不同的 commit 类型所在 CHANGELOG.md 中的区域
  // "hidden" 是否在 CHANGELOG.md 中显示
  types: [
    { type: "feat", section: "新特性", hidden: false },
    { type: "fix", section: "Bug修复", hidden: false },
    { type: "docs", section: "文档", hidden: false },
    { type: "chore", section: "配置项", hidden: false },
    { type: "style", section: "格式", hidden: false },
    { type: "refactor", section: "重构", hidden: false },
    { type: "perf", section: "性能", hidden: false },
    { type: "test", section: "测试", hidden: false },
    { type: "build", section: "构建", hidden: false },
    { type: "ci", section: "CI", hidden: false },
    { type: "revert", section: "回滚", hidden: false },
  ],
  // 对比版本的url
  compareUrlFormat: "{{host}}/{{owner}}/{{repository}}/compare/{{previousTag}}...{{currentTag}}",
  // hash链接(commit的连接，例如：https://git.yoururl.com/blank91/ui/commit/f91dcfdebf89be24f550ccbbd8c4f03029b44812)
  commitUrlFormat: "{{host}}/{{owner}}/{{repository}}/commit/{{hash}}"
}