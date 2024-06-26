const inquirer = require("inquirer")
const chalk = require("chalk")(async () => {
  const buildFrom = await inquirer.prompt([{ name: "value", type: "list", choices: ["CI 构建", "本地构建"], default: 0, message: "请选择构建方式：" }])
  const useCI = buildFrom.value === "CI 构建"
  const buildPlatform = ["微信小程序", "支付宝小程序", "字节跳动小程序", "Android", "iOS"]
  const envList = [
    "prod",
    "pre",
    "pre2",
    "go-test1",
    "go-test2",
    "go-test3",
    "go-test4",
    "go-test5",
    "go-test6",
    "go-test7",
    "dev",
    "test-pos",
    "test-sale",
    "test-sale2",
    "test-member",
    "test-member2",
  ]

  if (useCI) {
    const input = await inquirer.prompt([
      { name: "api", type: "list", loop: false, choices: envList, message: "请选择要打包的环境：" },
      {
        name: "platform",
        type: "checkbox",
        choices: buildPlatform,
        message: "请选择要打包的平台：",
        default: ["微信小程序", "支付宝小程序"],
      },
    ])
    console.log(chalk.green(input))
  } else {
    console.log(chalk.red("没有useCli"))
  }
})()
