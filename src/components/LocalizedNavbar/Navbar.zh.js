const zhNavbar = {
  hideOnScroll: true,
  title: "",
  logo: {
    alt: "",
    src: "img/logo.png",
  },
  items: [
    /*
    {
      to: "https://newzone.top/posts/2023-02-27-chatgpt_shortcuts.html",
      label: "ChatGPT Shortcut 原理说明",
      position: "left",
    },
    */
    {
      type: 'dropdown',
      label: '其他工具',
      position: 'left',
      items: [
        {
          label: 'ChatGPT国内版',
          href: 'https://prompt.newzone.top/',
        },
        {
          label: 'ChatGPT增强版',
          href: 'https://tools.newzone.top/',
        },
      ],
    },
    {
      to: "https://wenjuan.feishu.cn/m?t=s4SQsIFm6HMi-m7qs",
      label: "反馈/添加提示词",
      position: "left",
    },
    /*
    { type: "localeDropdown", position: "right" },
    {
      href: "https://github.com/rockbenben/ChatGPT-Shortcut",
      position: "right",
      className: "header-github-link",
    },
    {
      href: "https://discord.gg/PZTQfJ4GjX",
      position: "right",
      className: "header-discord-link",
    },
    */
  ],
};

module.exports = zhNavbar;
