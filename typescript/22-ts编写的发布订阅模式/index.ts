/**
 * 什么是发布订阅模式，设计模式的其中一种 
 * 面试经常问 其次手写， 思想广泛被使用  思想 需要定义三个角色 发布者 订阅者  调度者
 * 谁在用
     vue2  evnetBus  &on监听  &emit派发
     electron ipcRenderer   ipMain 进程通信
     DOM2 ddEventListener removeEventListener
都属于发布订阅模式

简单来说就是 你要和 大傻 二傻 三傻打球，大傻带球，二傻带水，三傻带球衣。全都准备完成后开始打球。

 */

// DOM2 为例

// const cb = () => {
//     console.log('事件触发了');
// }

// // 监听器,  自定义事件asd
// document.addEventListener('asd', cb , {
//     once:true // 设置只触发一次
// }
// )
// 监听器
// document.removeEventListener('asd', cb) // 删除事件

// const e = new Event('asd') // 订阅中心 调度中心

// document.dispatchEvent(e) // 派发器
// document.dispatchEvent(e) // 派发器
// document.dispatchEvent(e) // 派发器
// document.dispatchEvent(e) // 派发器
// document.dispatchEvent(e) // 派发器
// // 多次调用  就会多次触发

// 实现 once on emit off  订阅中心 Map<事件名称> [Function]订阅者集合
interface EventFace {
    events: Map<string, Function[]> // 事件中心
    on: (name:string, callback:Function) => void // 订阅 作用是收集事件
    emit: (name: string, ...args: Array<any>) => void // 派发
    off: (name:string, fn:Function) => void // 删除监听器
    once: (name:string, fn:Function) => void // 触发一次订阅器
}

interface List {// 事件收集器
    [key:string]: Array<Function>
}

class Dispatch implements EventFace { // 调度中心
    list: List
    events: Map<string, Function[]>
    constructor() {
        this.list = {}
        this.events = new Map()
    }

    on(name:string, callback:Function) {
        //  事件名为key 创建一个数组， 数组用来存放对应名字的函数
        // const callbackList: Array<Function> = this.list[name] || []
        // callbackList.push(callback) // 收集事件
        // this.list[name] = callbackList

        // 写法 2
        if (this.events.has(name)) {
            //   已存在事件 则取出对应事件 收集起来, 场景是监听多次时
            const callbackList = this.events.get(name)
            callbackList && callbackList.push(callback)
        } else {
            // 不存在事件 就需要第一次存储
            this.events.set(name, [callback])
        }
    }
    

    // /触发事件
    emit(name:string, ...arg:Array<any>) {
        // 获取事件
        // let eventName = this.list[name]
        // if (eventName) {
        //     eventName.forEach(fn => {
        //         fn.apply(this, arg)
        //     })
        // } else {
        //     console.error('该事件未监听');
            
        // }

        // 写法 2
         const callbackList = this.events.get(name)
         if (callbackList) {
            callbackList.forEach(fn => {
                fn(...arg) // 参数透传
            })
         }

    }

    off(name:string, fn:Function) {
        // let eventName = this.list[name]
        // if (eventName && fn) {
        //     let index = eventName.findIndex(fns => fns === fn)
        //     eventName.splice(index, 1) // 从数组中去掉对应事件
        // } else {
        //     console.error('该事件未监听');
        // }


        // 写法 2
        const callbackList = this.events.get(name)

        if (callbackList) {
            callbackList.splice(callbackList.indexOf(fn), 1) // 从数组中去掉对应事件
        } else {
            console.error('该事件未监听');
        }
    }

    once(name:string, fn:Function) {
        let cd = (...args:Array<any>) => {
            // fn.apply(this, args)
            // 写法 2
            fn(...args)
            this.off(name, cd)
        }
        this.on(name, cd)
    }
}


const bus = new Dispatch() // 订阅中心
// console.log(bus);


// const fn = (...arg:Array<any>) => { // 发布中心
//     console.log(arg, 'on');
    
// }
// bus.on('onabc', fn)
// bus.on('onabc', fn)
// bus.once('onceasd', (...arg: Array<any>) => {
//     console.log(arg, 'once');
// })


// bus.emit('onabc', 1, true, '2334') // 派发事件
// bus.emit('onabc', 1, true, 'ces') // 派发事件
// o.emit('onceasd', 1, true, '小满') // 派发事件

// bus.off('onabc',fn) // 删除事件
// bus.emit('onabc', 1, true, 'ces') // 派发事件
// bus.emit('onabc', 1, true, 'ce') // 派发事件