module.exports = {
  presets: [
    ["@babel/preset-env", {
      // 在开发中针对babel的浏览器兼容查询使用browserslist工具, 而不是设置target
      // 因为browserslist工具, 可以在多个前端工具之间进行共享浏览器兼容性(postcss/babel)
      // targets: ">5%"
      // corejs: 3, //为了使用 polyfill
      // entry 为了解决第三方包中的不兼容，从入口引入
      // useBuiltIns: "usage" // false: 不使用polyfill进行填充
    }],
    ["@babel/preset-react"],
    ["@babel/preset-typescript"]
  ]
}