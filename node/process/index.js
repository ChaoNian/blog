// process 是 Nodejs操作当前进程和控制当前进程的API，并且是挂载到globalThis下面的全局API

// 安装第三方库cross-en， 然后在脚本添加变量"dev": "cross-env NODE_ENV=dev node process/index.js",
// console.log(process.env.NODE_ENV);
// console.log(process.env); // 用于读取操作系统所有的环境变量，也可以修改和查询环境变量 修改 注意修改并不会真正影响操作系统的变量，而是只在当前线程生效，线程结束便释放。
/**
 * 跨平台设置和使用环境变量 不论是在Windows系统还是POSIX系统。同时，它提供了一个设置环境变量的脚本，使得您可以在脚本中以unix方式设置环境变量，然后在Windows上也能兼容运行
 */

// console.log(process.arch) // arm64 返回操作系统的CPU架构


// console.log(process.cwd()) // /Users/huangxiaohao/前端开发/blog/node 返回当前工作目录

// console.log(process.argv)
/**获取执行进程后面的参数 返回是一个数组 后面我们讲到命令行交互工具的时候会很有用，各种cli脚手架也是使用这种方式接受配置参数例如webpack
 * [
  '/usr/local/bin/node',
  '/Users/huangxiaohao/前端开发/blog/node/process/index.js',
   '--open', // 在package.json 脚本有配置
  '-xm'
]
 */

// console.log(process.memoryUsage()) // 用于获取当前进程的内存使用情况
/**
 * {
  rss: 38502400, // 常驻集大小 这是进程当前占用的物理内存量，不包括共享内存和页面缓存。它反映了进程实际占用的物理内存大小
  heapTotal: 6144000, // 堆区总大小 这是 V8 引擎为 JavaScript 对象分配的内存量。它包括了已用和未用的堆内存
  heapUsed: 5292064, // 已用堆大小
  external: 413654, // 外部内存使用量 这部分内存不是由 Node.js 进程直接分配的，而是由其他 C/C++ 对象或系统分配的
  arrayBuffers: 17678 // 是用于处理二进制数据的对象类型，它使用了 JavaScript 中的 ArrayBuffer 接口。这个属性显示了当前进程中 ArrayBuffers 的数量
}
 */

// console.log(process.exit()) // 调用 process.exit() 将强制进程尽快退出，即使仍有未完全完成的异步操作挂起

// console.log(process.kill(process.pid)) // 与exit类似，kill用来杀死一个进程，接受一个参数进程id可以通过process.pid 获取