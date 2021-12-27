# Contribution

### introduce

Thank you for using v-power.

Here are guidelines for submitting feedback or code to v-power. Before submitting an issue or PR to v-power, take a few minutes to read the text below.

### Issue specification

- When encountering a problem, please confirm whether the problem has been recorded in the issue or has been fixed
- When raising an issue, please describe the problem in a short language, and add the environment and reoccurrence steps when the problem occurs

## Participate in the development

### Local development

Before developing locally, make sure you have [Node.js &gt;= 14](https://nodejs.org) and [PNPM](https://pnpm.io) installed in your development environment.

Follow these steps to develop v-power components locally.

```bash
# Cloning of warehouse
git clone git@github.com:MaybeQHL/v-power.git

# Install dependencies
pnpm i

# Enter the development mode and go to localhost
pnpm dev
```

### The directory structure

Where, 'v-power' directory is the core code of the component library:

```
v-power
├─ docs             # doc
├─ src              # components source
├─ test             # test
└─ vant.config.js  # doc config
```

`src` Directories contain the source code for each component, one for each folder:

```
src
└─ button
   ├─ demo             # demo
   ├─ test             # test
   ├─ Component.vue    # component
   ├─ index.ts         # entry
   ├─ index.less       # style
   ├─ README.md        # english doc
   └─ README.zh-CN.md  # chinese doc
```

## Submit PR

### Pull Request 规范

If this is your first Pull Request on GitHub, read these two articles to learn:

- [How to contribute code gracefully on GitHub](https://segmentfault.com/a/1190000000736629)
- [First participation in open source](https://github.com/firstcontributions/first-contributions/blob/master/translations/README.chs.md)

#### specification

- Keep your PR small if you run into problems. Ensure that a PR solves only one problem or adds only one feature
- When adding a component or modifying the original component, remember to add or modify the test code to ensure the stability of the code
- Please add appropriate description in PR and associate related Issue

### Pull Request process

1. Fork the main repository. If it has been forked, please synchronize the latest code of the main repository
2. Create a new branch based on the fork dev branch such as' feature/button_color '
3. Develop on the new branch. After the development is complete, Pull the Request to the Master branch of the main warehouse
4. Pull Request will be merged into the main warehouse after Review is approved
5. Wait for v-power releases, usually once a week

### Synchronizing the latest code

Before pulling the Pull Request, please follow the following process to synchronize the latest code of the main repository:

```bash
# Add the main repository to remote as the upstream repository after fork
git remote add upstream https://github.com/MaybeQHL/v-power.git
# Pull the latest code from the main repository
 git fetch upstream
# Switch to the master branch
git checkout master
# merge the main repository code
git merge upstream/master
```
