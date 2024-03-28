#!/usr/local/bin/node
// 告诉操作系统我执行自定义命令的时候 你帮我用 node 去执行  这个文件
/**
 * window #!/usr/bin/env node
 *  mac #!/usr/local/bin/node
 */

// 编写细节
import { program } from 'commander'
import fs from 'node:fs'
import inquirer from 'inquirer'

import { checkPath, downloadTemp } from './util.js'

// 获取到版本号
let json = fs.readFileSync('./package.json')
json = JSON.parse(json)
// console.log(json.version, 'json');

// 创建版本号， 从package.json获取  这样可以创建好版本号，可以执行 test-cli -V 
program.version(json.version)


// 创建模版（变量projectName） 别名是 c 描述 是创建项目， todo了。。。
program.command('create <projectName>').alias('c').description('创建项目').action((projectName) => {
    // console.log(projectName, '=0=0'); // 执行 test-cli create hao 可以打印出 hao

    // 可以使用命令行交互工具
    inquirer.prompt([
        {
            type: 'input',// 输入 input 确认 confirm  选择checkbox
            name: 'projectName',// 返回值的key
            message: '请输入项目名称', // 描述 
            default: projectName // 默认值
        },
        {
            type: 'confirm',
            name: 'isTs',// 返回值的key
            message: '是否使用typeScript的模版', // 描述 
        },

    ]).then(res => {
        console.log(res, '22233');

        if (checkPath(res.projectName)) {
            // 文件夹已经存在
            return
        }

        if (res.isTs) {
            // 是否创建ts模版 res.projectName: 用户目录
            downloadTemp('ts', res.projectName)
        } else {
            downloadTemp('js', res.projectName)

        }
    })
})


// process.argv 读到命令行 --后面的参数
program.parse(process.argv)
