module.exports = {
  title: "Mars",
  description: "测试",
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
          { text: "测试用例", link: "/sources/test-case" },
          { text: "HTTP", link: "/sources/http" },
          { text: "SQL", link: "/sources/sql" },
        ],
      },
      { text: "Github", link: "https://github.com/Atome-FE/Mars" },
    ],
    lastUpdated: "Last Updated",
  },
};
