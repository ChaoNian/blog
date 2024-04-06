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
var Dispatch = /** @class */ (function () {
    function Dispatch() {
        this.list = {};
        this.events = new Map();
    }
    Dispatch.prototype.on = function (name, callback) {
        //  事件名为key 创建一个数组， 数组用来存放对应名字的函数
        // const callbackList: Array<Function> = this.list[name] || []
        // callbackList.push(callback) // 收集事件
        // this.list[name] = callbackList
        // 写法 2
        if (this.events.has(name)) {
            //   已存在事件 则取出对应事件 收集起来, 场景是监听多次时
            var callbackList = this.events.get(name);
            callbackList && callbackList.push(callback);
        }
        else {
            // 不存在事件 就需要第一次存储
            this.events.set(name, [callback]);
        }
    };
    // /触发事件
    Dispatch.prototype.emit = function (name) {
        // 获取事件
        // let eventName = this.list[name]
        // if (eventName) {
        //     eventName.forEach(fn => {
        //         fn.apply(this, arg)
        //     })
        // } else {
        //     console.error('该事件未监听');
        var arg = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            arg[_i - 1] = arguments[_i];
        }
        // }
        // 写法 2
        var callbackList = this.events.get(name);
        if (callbackList) {
            callbackList.forEach(function (fn) {
                fn.apply(void 0, arg); // 参数透传
            });
        }
    };
    Dispatch.prototype.off = function (name, fn) {
        // let eventName = this.list[name]
        // if (eventName && fn) {
        //     let index = eventName.findIndex(fns => fns === fn)
        //     eventName.splice(index, 1) // 从数组中去掉对应事件
        // } else {
        //     console.error('该事件未监听');
        // }
        // 写法 2
        var callbackList = this.events.get(name);
        if (callbackList) {
            callbackList.splice(callbackList.indexOf(fn), 1); // 从数组中去掉对应事件
        }
        else {
            console.error('该事件未监听');
        }
    };
    Dispatch.prototype.once = function (name, fn) {
        var _this = this;
        var cd = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            // fn.apply(this, args)
            // 写法 2
            fn.apply(void 0, args);
            _this.off(name, cd);
        };
        this.on(name, cd);
    };
    return Dispatch;
}());
var bus = new Dispatch(); // 订阅中心
// console.log(bus);
var fn = function () {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i] = arguments[_i];
    }
    console.log(arg, 'on');
};
bus.on('onabc', fn);
// bus.on('onabc', fn)
bus.once('onceasd', function () {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i] = arguments[_i];
    }
    console.log(arg, 'once');
});
// bus.emit('onabc', 1, true, '2334') // 派发事件
bus.emit('onabc', 1, true, 'ces'); // 派发事件
// o.emit('onceasd', 1, true, '小满') // 派发事件
bus.off('onabc', fn); // 删除事件
// bus.emit('onabc', 1, true, 'ces') // 派发事件
// bus.emit('onabc', 1, true, 'ce') // 派发事件
