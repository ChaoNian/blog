// 操作系统
const { log } = require('node:console')
const os = require('node:os')
// platform 获取操作系统平台
// console.log(os.platform()); // darwin  苹果电脑

// console.log(os.type()); // Darwin 它在 Linux 上返回 'Linux'，在 macOS 上返回 'Darwin'，在 Windows 上返回 'Windows_NT'
// console.log(os.release()); // 21.3.0 返回操作系统的版本例如10.xxxx win10
// console.log(os.arch()); // arm64 返回cpu的架构 可能的值为 'arm'、'arm64'、'ia32'、'mips'、'mipsel'、'ppc'、'ppc64'、's390'、's390x'、以及 'x64'
// console.log(os.homedir()); // /Users/huangxiaohao   用户
// console.log(os.hostname()); // huangxiaohaodeiMac.local

// 获取CPU的线程以及详细信息
// console.log(os.cpus());
/**
 * {
    model: 'Apple M1', //  表示CPU的型号信息，其中 "Intel(R) Core(TM) i7 CPU 860 @ 2.80GHz" 是一种具体的型号描述。
    speed: 24, // 表示CPU的时钟速度，以MHz或GHz为单位。在这种情况下，速度为 2926 MHz 或 2.926 GHz。
    times: { //是一个包含CPU使用时间的对象，其中包含以下属性：
        user: 9935450, // 表示CPU被用户程序使用的时间（以毫秒为单位）。
        nice: 0, // 表示CPU被优先级较低的用户程序使用的时间（以毫秒为单位）
        sys: 1908060, // 表示CPU被系统内核使用的时间（以毫秒为单位）。
        idle: 725476750, // 表示CPU处于空闲状态的时间（以毫秒为单位）。 
        irq: 0 // 表示CPU被硬件中断处理程序使用的时间（以毫秒为单位）。
     }
  },
 */



//  获取网络信息
console.log(os.networkInterfaces());
/**
 * {
      address: '127.0.0.1', // 表示本地回环接口的IP地址，这里是 '127.0.0.1'。
      netmask: '255.0.0.0', // 表示本地回环接口的子网掩码，这里是 '255.0.0.0'。
      family: 'IPv4', // 表示地址族（address family），这里是 'IPv4'，表示IPv4地址
      mac: '00:00:00:00:00:00', // 表示本地回环接口的MAC地址，这里是 '00:00:00:00:00:00'。请注意，本地回环接口通常不涉及硬件，因此MAC地址通常为全零。
      internal: true, // 表示本地回环接口是否是内部接口，这里是 true，表示它是一个内部接口
      cidr: '127.0.0.1/8' // 表示本地回环接口的CIDR表示法，即网络地址和子网掩码的组合，这里是 '127.0.0.1/8'，表示整个 127.0.0.0 网络。
    },
 */