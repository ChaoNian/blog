// fs 文件 node 核心API
/**
 * 1、 读取文件 readFile flag
 * 2、 可读流 createReadStream
 * 3、 创建文件夹 recursive 递归
 * 4、 删除fm
 * 5、 重命名 renameSync
 * 6、 监听文件变化 watch
 * 7   源码 libuv
 * 8、 注意事项 事件循环 setImmediate
 */
const fs = require('node:fs')

// const fsP = require('node:fs/promises')
/**
 * 三个版本： 异步、同步、promise
 */

// 不加sync 就是异步的
// fs.readFile('/Users/huangxiaohao/前端开发/blog/node/fs/index.txt', {
//     encoding: 'utf-8', // 编码
//     flag: 'r'
// }, (err, data) => {
//     // if (err) throw err
//     console.log(err, data); // 不知道为啥会报错

// })

// 同步写法
// const result = fs.readFileSync('/Users/huangxiaohao/前端开发/blog/node/fs/index.txt')
// console.log(result.toString('utf-8'));
// console.log('result');

// iocp 讲解视频
// https://www.bilibili.com/video/BV19V4y1173b/?spm_id_from=333.337.search-card.all.click&vd_source=7313597670b28c3c44c50e326d82d040


// promise 写法
// fsP.readFile('/Users/huangxiaohao/前端开发/blog/node/fs/index.txt').then(res => {
//     console.log(res.toString('utf-8'));
// }).catch(err => {
//     console.log(err, 'rer');
// })


// 2、 可读流 createReadStream 使用场景  处理大文件的时候
// const readStream = fs.createReadStream('/Users/huangxiaohao/前端开发/blog/node/fs/index.txt')
// // 文件太大 可以创建可读流， 将文件一段一段读出来
// readStream.on('data', (chunk) => {
//     console.log(chunk.toString('utf-8'));
// })
// readStream.on('end', () => {
//     console.log('读取完成');
// })

// 同步创建文件夹
// fs.mkdirSync('./xiaohao/AA/BB', {
//     recursive:true // 递归创建文件夹
// })

// 4 删除文件夹
// fs.rmSync('./xiaohao', {
//     recursive:true // 递归删除文件夹
// })


// 5 文件重名
// fs.renameSync('/Users/huangxiaohao/前端开发/blog/node/fs/index.txt', '/Users/huangxiaohao/前端开发/blog/node/fs/index2.txt')


//  6、 监听文件变化 watch 热更新的底层原理
// fs.watch('/Users/huangxiaohao/前端开发/blog/node/fs/index.txt', (event, filname) => {
//     console.log(event, filname, 'filname');
// })


// 8、 注意事项 事件循环 setImmediate

// fs.readFile('/Users/huangxiaohao/前端开发/blog/node/fs/index.txt', {
//     encoding: 'utf-8',
//     flag: 'r'
// }, (err, dataStr) => {
//     if (err) throw err
//     console.log('fs')
// })

// setImmediate(() => {
//     console.log('setImmediate')
// })

/**
 * 先打印setImmediate   后打印 fs
 * 为什么先走setImmediate 呢，而不是fs

Node.js io操作 读取文件的时候是使用libuv进行调度的

而setImmediate是由V8进行调度的

文件读取完成后 libuv 才会将 fs的结果 推入V8的队列
 */


// 1、写入文件
// 2、追加写入文件 两种方式
// 3、创建可写流
// 4、软连接  硬连接  这两个是 pnpm 底层原理


// 1、写入文件

// writeFileSync 没有返回值
// fs.writeFileSync('/Users/huangxiaohao/前端开发/blog/node/fs/index.txt', '写入的内容，替换了原本的内容')
// fs.writeFileSync('/Users/huangxiaohao/前端开发/blog/node/fs/index.txt', '\n 写入的内容， ', {
//     flag: 'a' // append  追加
//             // 'a': 打开文件进行追加。 如果文件不存在，则创建该文件。
//             // 'ax': 类似于 'a' 但如果路径存在则失败。
//             // 'a+': 打开文件进行读取和追加。 如果文件不存在，则创建该文件。
//             // 'ax+': 类似于 'a+' 但如果路径存在则失败。
//             // 'as': 以同步模式打开文件进行追加。 如果文件不存在，则创建该文件。
//             // 'as+': 以同步模式打开文件进行读取和追加。 如果文件不存在，则创建该文件。
//             // 'r': 打开文件进行读取。 如果文件不存在，则会发生异常。
//             // 'r+': 打开文件进行读写。 如果文件不存在，则会发生异常。
//             // 'rs+': 以同步模式打开文件进行读写。 指示操作系统绕过本地文件系统缓存。
                /**
                 * 这不会将 fs.open() 或 fsPromises.open() 变成同步阻塞调用。 如果需要同步操作，应该使用类似 fs.openSync() 的东西。
                'w': 打开文件进行写入。 创建（如果它不存在）或截断（如果它存在）该文件。
                'wx': 类似于 'w' 但如果路径存在则失败。
                'w+': 打开文件进行读写。 创建（如果它不存在）或截断（如果它存在）该文件。
                'wx+': 类似于 'w+' 但如果路径存在则失败。
                */
// })

// 同等API
// fs.appendFileSync('/Users/huangxiaohao/前端开发/blog/node/fs/index.txt', '\n appendFileSyncAPI ') 
// 这主要用于在 NFS 挂载上打开文件，因为它允许跳过可能过时的本地缓存。 它对 I/O 性能有非常实际的影响，因此除非需要，否则不建议使用此标志

// 3、创建可写流   处理大数据
// const writeStream = fs.createWriteStream('/Users/huangxiaohao/前端开发/blog/node/fs/index.txt', {
//     flag: 'a'
// })
// let verse = [
//     '待到秋来九月八',
//     '我花开后百花杀',
//     '冲天香阵透长安',
//     '满城尽带黄金甲'
// ]
// verse.forEach(val => {
//     writeStream.write(val + '\n')
// });
// writeStream.end()

// writeStream.on('finish', () => {
//     console.log('写入完成');
// })

// 4、软连接  硬连接  这两个是 pnpm 底层原理

            //   原始地址                                            硬链接之后的地址
// fs.linkSync('/Users/huangxiaohao/前端开发/blog/node/fs/index.txt', '/Users/huangxiaohao/前端开发/blog/node/fs/index2.txt')
// 两个文件共用内存地址， 其中一个文件修改内容后   会同步另外一个文件
// 硬链接  作为  共享文件  备份文件

// 软链接 很像window 的快捷方式
// 会提示没有权限 window 需要管理员权限打开powershell，  mac sodu node index.js   才会创建文件
fs.symlinkSync('/Users/huangxiaohao/前端开发/blog/node/fs/index.txt', '/Users/huangxiaohao/前端开发/blog/node/fs/index3.txt')