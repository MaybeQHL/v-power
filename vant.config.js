module.exports = {
  name: 'v-power',
  build: {
    srcDir: 'src',
    namedExport: true,
    skipInstall: ['lazyload'],
    site: {
      publicPath: '/v-power',
    },
    vetur: {
      tagPrefix: 'vp-',
    },
    css: {
      preprocessor: 'less',
    },
  },
  site: {
    defaultLang: 'en-US',
    versions: [
      // { label: 'v1', link: '/' },
    ],
    baiduAnalytics: {
      seed: '',
    },
    htmlPluginOptions: {
      meta: {
        'docsearch:version': 'v1',
      },
    },
    locales: {
      'zh-CN': {
        title: 'v-power',
        description: '轻量、可靠的移动端组件库',
        logo:
          'https://cdntest-1251804846.cos.ap-guangzhou.myqcloud.com/logo.png',
        langLabel: '中',
        links: [
          {
            logo: 'https://b.yzcdn.cn/vant/logo/weapp.svg',
            url: 'https://gitee.com/null_639_5368/v-power',
          },
          {
            logo: 'https://b.yzcdn.cn/vant/logo/github.svg',
            url: 'https://github.com/MaybeQHL/v-power',
          },
        ],
        // searchConfig: {
        //   apiKey: '90067aecdaa2c85220e2783cd305caac',
        //   indexName: 'v-power',
        //   searchParameters: {
        //     facetFilters: ['lang:zh-CN', 'version:v3'],
        //   },
        //   transformItems(items) {
        //     if (location.hostname !== 'youzan.github.io') {
        //       items.forEach((item) => {
        //         if (item.url) {
        //           item.url =
        //             item.url &&
        //             item.url.replace('youzan.github.io', location.hostname);
        //         }
        //       });
        //     }
        //     return items;
        //   },
        // },
        nav: [
          {
            title: '开发指南',
            items: [
              {
                path: 'home',
                title: '介绍',
              },
              {
                path: 'quickstart',
                title: '快速上手',
              },
              {
                path: 'faq',
                title: '常见问题',
              },
              {
                path: 'changelog',
                title: '更新日志',
              },
              {
                path: 'contribution',
                title: '贡献指南',
              },
            ],
          },
          {
            title: '基础组件',
            items: [
              {
                path: 'container',
                title: 'Container 容器',
              },
              {
                path: 'list',
                title: 'List 列表',
              },
            ],
          },
        ],
      },
      'en-US': {
        title: 'v-power',
        description: 'Mobile UI Components built on Vue',
        logo:
          'https://cdntest-1251804846.cos.ap-guangzhou.myqcloud.com/logo.svg',
        langLabel: 'EN',
        links: [
          {
            logo: 'https://b.yzcdn.cn/vant/logo/weapp.svg',
            url: 'https://gitee.com/null_639_5368/v-power',
          },
          {
            logo: 'https://b.yzcdn.cn/vant/logo/github.svg',
            url: 'https://github.com/MaybeQHL/v-power',
          },
        ],
        nav: [
          {
            title: 'Essentials',
            items: [
              {
                path: 'home',
                title: 'Introduction',
              },
              {
                path: 'quickstart',
                title: 'Quickstart',
              },
              {
                path: 'faq',
                title: 'Faq',
              },
              {
                path: 'changelog',
                title: 'Changelog',
              },
              {
                path: 'contribution',
                title: 'Contribution',
              },
            ],
          },
          {
            title: 'Basic Components',
            items: [
              {
                path: 'container',
                title: 'Container',
              },
              {
                path: 'list',
                title: 'List',
              },
            ],
          },
        ],
      },
    },
  },
};
