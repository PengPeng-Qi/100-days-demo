const menus = [
  { label: "Svg 动画", href: "/svg" },
  { label: "移动端菜单", href: "/mobile-menu" },
  { label: "Dark mode switch", href: "/dark" },
  { label: "背景动画", href: "/background", isShow: false },
  { label: "rgb 卡片", href: "/card", isShow: false },
];

export const showMenus = menus.filter((menu) => menu.isShow !== false);
