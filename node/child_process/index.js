/**
 * child_precess 子进程， node核心API
 * 如果你会shell命令，他会有非常大的帮助，
 * 或者你喜欢编写前端工程化工具之类的，他也有很大的用处，
 * 以及处理CPU密集型应用。
 */

const {exec, execSync, spawn, execFile, fork}  = require('node:child_process')
const path = require('node:path')
const testProcess = fork('./child_process/test.js')
/**
 * 创建子进程 Nodejs创建子进程共有7个API Sync同步API 不加是异步API
 * xxxSync 是同步方法
 * xxx 异步方法 提供回调函数 返回BUffer  可以帮我们执行shell命令 或者和软件交互
  
 */


/**
 * exec: child_process.exec(command, [options], callback) 
 * 执行较小的she el l命令，想要立马拿到劫夺的shell execSync exec 字节上限200kb， 超出200kb 就报错
 */
// exec('node -v', (err, stdout, stderr) => {
//     if(err) {
//         return err
//     }
//     // stdout 是Buffer 需要转换
//     console.log(stdout.toString());  // node 版本 v18.17.1
// })

// 同步方法
// const nodeVersion = execSync('node -v') // 返回的是Buffer
// console.log(nodeVersion); // <Buffer 76 31 38 2e 31 37 2e 31 0a>
// console.log(nodeVersion.toString()); // v18.17.1


// 执行shell命令 创建文件
// execSync('mkdir test') // 创建test文件
// 打开谷歌浏览器
// execSync("start chrome http://www.baidu.com --incognito")

// 打开软件
// execSync("软件地址 --参数")

/**
 * spawn  没有字节上限 因为返回的是六年实时返回
 * spawn 用的较少
 */
// const {stdout} = spawn('netstat')
// const {stdout} = spawn('netstat', ['--1',...] {
    // option配置
    // cwd <string> 子进程的当前工作目录。
    // env <Object> 环境变量键值对。
    // encoding <string> 默认为 'utf8'。
    // shell <string> 用于执行命令的 shell。 在 UNIX 上默认为 '/bin/sh'，在 Windows 上默认为 process.env.ComSpec。 详见 Shell Requirements 与 Default Windows Shell。
    // timeout <number> 默认为 0。
    // maxBuffer <number> stdout 或 stderr 允许的最大字节数。 默认为 200*1024。 如果超过限制，则子进程会被终止。 查看警告： maxBuffer and Unicode。
    // killSignal <string> | <integer> 默认为 'SIGTERM'。
    // uid <number> 设置该进程的用户标识。（详见 setuid(2)）
    // gid <number> 设置该进程的组标识。（详见 setgid(2)）
    // })
// stdout.on('data', (msg) => {
//     console.log(msg.toString());

// })

// stdout.on('close', (msg) => {
//     console.log(msg, '结束了lose');

// })

// execFile 执行可执行的文件
// console.log(__dirname, '////__dirname');
// execFile(path.resolve(__dirname, './bat.cmd', null, (err, stdout, msg) => {
// //     // console.log(stdout.toString());
// //     // console.log(stdout);
// }))
// 底层实现顺序
// exec ---> execFilre ---> spawn


// fork send 发送信息 ，message接收消息，可以相互发送接收。
// fork底层使用的是IPC通道进行通讯的，

testProcess.send('我是主进程')

testProcess.on("message",(data)=>{
    console.log('我是主进程接受消息111：',data)
})






