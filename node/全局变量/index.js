// node 全局变量 通过global定义， 浏览器通过window 定义， 注意代码执行顺序
globalThis.name = '全局变量'
global.name = '全局变量'
// require('./child.js')

// globalThis 根据环境自动判断环境

// js 三部分 BOM DOM  ECMAScript  node环境大部分可以用js ，DOM，BOM不能使用


// node 环境内置变量
// dirname 当前文件所在目录 file文件名  绝对路径， filename： 当前文件 绝对路径
// console.log(__filename, '---打印---')
// ArrayBuffer 处理二进制数据，媒体数据
// console.log(process.argv); // 获取node 进程，处理进程
// console.log(process.cwd()) 
// console.log(process.exit()) // 杀死进程
process.on('exit', () => { // 监听
    console.log('1212');
})
process.exit()