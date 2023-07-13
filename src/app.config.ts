export default defineAppConfig({
  pages: ["pages/index/index", "pages/home/home"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    color: "#666",
    selectedColor: "#436EF6",
    backgroundColor: "#fff",
    borderStyle: undefined,
    list: [
      {
        pagePath: "pages/index/index",
        text: "index",
        iconPath: "assets/tabbar/strategy.png",
        selectedIconPath: "assets/tabbar/strategy_selected.png",
      },
      {
        pagePath: "pages/home/home",
        text: "home",
        iconPath: "assets/tabbar/follow.png",
        selectedIconPath: "assets/tabbar/follow_selected.png",
      },
    ],
  },
});
