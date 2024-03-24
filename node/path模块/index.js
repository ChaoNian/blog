const { log } = require('node:console')
const path = require('node:path')
// console.log(path.basename('/Users/huangxiaohao/前端开发/blog/node/path模块/index.js')); // 返回index.html

// console.log(path.win32.basename('/Users/huangxiaohao/前端开发/blog/node/path模块/index.js'));// 返回index.html

// console.log(path.dirname('/Users/huangxiaohao/前端开发/blog/node/path模块/index.js')); // /Users/huangxiaohao/前端开发/blog/node/path模块


// API 用来返回扩展名例如/bbb/ccc/file.txt 返回就是.txt
// 如果有多个 . 返回最后一个 如果没有扩展名返回空
// console.log(path.extname('/Users/huangxiaohao/前端开发/blog/node/path模块/index.js'));


// 这个API 主要是用来拼接路径的
// console.log(path.join('/ww', '/ere')); // /ww/ere

// 用于将相对路径解析并且返回绝对路径

// 如果传入了多个绝对路径 它将返回最右边的绝对路径

// console.log(path.resolve('/aaa','/bbb','/ccc'));
// 传入绝对路径 + 相对路径
// console.log(path.resolve(__dirname, '/ccc'));
// console.log(path.resolve('./index.js')); // /Users/huangxiaohao/前端开发/blog/node/index.js

// console.log(path.parse('/home/user/dir/file.txt'));
/**
 * {
  root: '/',
  dir: '/home/user/dir',
  base: 'file.txt',
  ext: '.txt',
  name: 'file'
}
 */

// console.log(path.format({
//     root: '/',
//     dir: '/home/user/documents',
//     base: 'file.txt',
//     ext: '.txt',
//     name: 'file'
//  })); // /home/user/documents/file.txt