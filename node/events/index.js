/**
 * eventEmitter 事件触发器 Node.js 核心API，都是采用异步事件驱动架构
 * 简单来说就是通过有效的方法来监听事件状态的变化，并在变化时做出相应的动作
 * 
 */
const eventEmitter = require('events')

// 用法和vue2 event bus 第三方库 mitt 采用的发布订阅模式相同
// 发布订阅模式核心API： off on emit once

const bus = new eventEmitter()

// 订阅一个事件 事件名称随便起   注意只能监听10个事件 超过10个就会报错
// bus.on('test', (name) => {
//     console.log(name);
// })

// const fn = (name) => { // 只出发一次
//     console.log(name);
// }
// bus.once('test', fn)
// bus.on('test', fn)
// bus.off('test', fn) // 清除订阅

// 设置指定数量监听数量
// bus.setMaxListeners(20)

// // 发布
// bus.emit('test', '测试')
// bus.emit('test', '测试2')
// bus.emit('test', '测试2')
// bus.emit('test', '测试2')
// bus.emit('test', '测试2')

// bus.emit('test', '测试2')
// bus.emit('test', '测试2')
// bus.emit('test', '测试2')
// bus.emit('test', '测试2')
// bus.emit('test', '测试2')

// bus.emit('test', '测试2')
// bus.emit('test', '测试2')
// bus.emit('test', '测试2')
// bus.emit('test', '测试2')
// bus.emit('test', '测试2')

// bus.emit('test', '测试2')
// bus.emit('test', '测试2')
// bus.emit('test', '测试2')
// bus.emit('test', '测试2')
// bus.emit('test', '测试2')

// bus.emit('test', '测试2')
// bus.emit('test', '测试2')
// bus.emit('test', '测试2')
// bus.emit('test', '测试2')
// bus.emit('test', '测试2')

// bus.emit('test', '测试2')
// bus.emit('test', '测试2')
// bus.emit('test', '测试2')
// bus.emit('test', '测试2')
// bus.emit('test', '测试2')

// // 获取监听数量数
// console.log(bus.getMaxListeners());
 let fn = function () {
    
 }
 fn.prototype.test = 1212

 let a = new fn()
 console.log(Object.getPrototypeOf(a)); // { test: 1212 }

//  process 挂载到全局变量上 globalThis