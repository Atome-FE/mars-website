module.exports = {
  title: "Mars",
  description: "测试",
  base: '/mars-website/',
  head: [
    ["link", { rel: "icon", href: "/images/logo.png" }],
  ],
  serviceWorker: true,
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "简介", link: "/introduce" },
      {
        text: "功能介绍",
        items: [
          { text: "添加资源", link: "/sources/添加任务模块" },
          { text: "测试用例", link: "/sources/test-case" },
          { text: "服务监控", link: "/sources/服务监控" },
          { text: "权限管理", link: "/sources/权限管理和分享" },
          { text: "覆盖率统计", link: "/sources/覆盖率统计" }
        ],
      },
      { text: "Github", link: "https://github.com/Atome-FE/Mars" },
    ],
    lastUpdated: "Last Updated",
  },
};
