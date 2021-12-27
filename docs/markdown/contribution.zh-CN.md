# 贡献指南

### 介绍

感谢你使用 v-power。

以下是关于向 v-power 提交反馈或代码的指南。在向 v-power 提交 issue 或者 PR 之前，请先花几分钟时间阅读以下文字。

### Issue 规范

- 遇到问题时，请先确认这个问题是否已经在 issue 中有记录或者已被修复
- 提 issue 时，请用简短的语言描述遇到的问题，并添加出现问题时的环境和复现步骤

## 参与开发

### 本地开发

在进行本地开发前，请先确保你的开发环境中安装了 [Node.js >= 14](https://nodejs.org) 和 [pnpm](https://pnpm.io).

按照下面的步骤操作，即可在本地开发 v-power 组件。

```bash
# 克隆仓库
git clone git@github.com:MaybeQHL/v-power.git

# 安装依赖
pnpm i

# 进入开发模式，浏览器访问 localhost
pnpm dev
```

### 目录结构

其中，`v-power` 目录为组件库的核心代码：

```
v-power
├─ docs             # 文档
├─ src              # 组件源代码
├─ test             # 单测工具类
└─ vant.config.js  # 文档网站配置
```

`src` 目录包含各个组件的源码，每个文件夹对应一个组件：

```
src
└─ button
   ├─ demo             # 示例代码
   ├─ test             # 单元测试
   ├─ Component.vue    # 组件
   ├─ index.ts         # 组件入口
   ├─ index.less       # 样式
   ├─ README.md        # 英文文档
   └─ README.zh-CN.md  # 中文文档
```

## 提交 PR

### Pull Request 规范

如果你是第一次在 GitHub 上提 Pull Request ，可以阅读下面这两篇文章来学习：

- [如何优雅地在 GitHub 上贡献代码](https://segmentfault.com/a/1190000000736629)
- [第一次参与开源](https://github.com/firstcontributions/first-contributions/blob/master/translations/README.chs.md)

#### 规范

- 如果遇到问题，建议保持你的 PR 足够小。保证一个 PR 只解决一个问题或只添加一个功能
- 当新增组件或者修改原有组件时，记得增加或者修改测试代码，保证代码的稳定
- 在 PR 中请添加合适的描述，并关联相关的 Issue

### Pull Request 流程

1. fork 主仓库，如果已经 fork 过，请同步主仓库的最新代码
2. 基于 fork 后仓库的 dev 分支新建一个分支，比如 `feature/button_color`
3. 在新分支上进行开发，开发完成后，提 Pull Request 到主仓库的 master 分支
4. Pull Request 会在 Review 通过后被合并到主仓库
5. 等待 v-power 发布版本，一般是每周一次

### 同步最新代码

提 Pull Request 前，请依照下面的流程同步主仓库的最新代码：

```bash
# 添加主仓库到 remote，作为 fork 后仓库的上游仓库
git remote add upstream https://github.com/MaybeQHL/v-power.git

# 拉取主仓库最新代码
git fetch upstream

# 切换至 master 分支
git checkout master

# 合并主仓库代码
git merge upstream/master
```
