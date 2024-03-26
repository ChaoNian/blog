// commonjs规范 5中模式

// 1 引入自己编写的模块
// const t = require('./text') 
// console.log(t, '-----');

// 2 引入第三方模块 例如npm i md5
// const MD5 = require('md5')
// console.log(MD5(12333)); // 生成的加密 e26162a89da890c2d83b2e80ca9ce012

// 3 node 内置模块  fs http net child_process 
// const fs = require('fs') // 高版本写法
// const fs = require('node:fs') // <16版本低版本写法

// 4 C++扩展 

// 5 引入json 文件
// const pj = require('./package.json')
// console.log(pj, '========');
// console.log(fs);




// module(esm)规范
// import q from './cjs-esm-01/module.js'
// import * as all from './cjs-esm-01/module.js' // 导出所有东西
// console.log(q, all, '-----module---');

// import All from './全局变量'

const {execFile}  = require('node:child_process')
const path = require('node:path')
console.log(process.cwd(), 'w808');
execFile(path.resolve(process.cwd(), './a.sh'), null, (err, stdout, msg) => {
        console.log(stdout.toString());
        // console.log(1212);
    //     // console.log(stdout);
    })