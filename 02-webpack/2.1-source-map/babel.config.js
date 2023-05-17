module.exports = {
  presets: [
    [
      "@babel/preset-env", {
        // corejs: 3,
        // // false: 不使用polyfill进行填充  usage entry[第三方包需要使用polyfill]
        // useBuiltIns: "usage"
      }
    ],
    ["@babel/preset-react"],

    // ts -> js 现polyfill
    ["@babel/preset-typescript", {
      corejs: 3,
      useBuiltIns: "usage"
    }]
  ]
}