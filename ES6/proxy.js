// var obj = new Proxy({}, {
//     get:function(target, key, receiver) {
//         console.log(`getting ${key}`);
//         return Reflect.get(target, key, receiver)
//     },

//     set: function(target, key, value, receiver) {
//         console.log(`set ${key}`);
//         return Reflect.set(target, key, value, receiver)
//     }
// })
// obj.count = 0

// apply
// var handler = {
//     apply(target, ctx, args) {
//         return Reflect.apply(...arguments)
//     }
// }
// var target = function() {
//     return 'i am target'
// }

// var handler = {
//     apply(target, ctx, args) {
//         return 'scscs'
//     }
// }
// var p = new Proxy(target, handler)
// console.log(p()); //'scscs'

// var twice = {
//     apply(target, ctx, args) {
//         return Reflect.apply(...arguments) * 2
//     }
// }
// function sum(left, right) {
//     return left + right 
// }
// var proxy = new Proxy(sum, twice)
// proxy(2,3)
// proxy.call(null, 5,6)

// 通过Proxy 实现观察者模式
const quedobservers = new Set() // 定义集合
const observe = fn => quedobservers.add(fn) // 将所有观察者函数都放进集合
const observable = obj => new Proxy(obj, {set}) // 返回原始对象的代理，拦截赋值操作

// 拦截函数set 会自动执行所有观察者
function set(target, key, value, receiver) {
    const result = Reflect.set(target,key, value, receiver)
    quedobservers.forEach(observer => observer()) // 通知观察者
    return result
}

// 观察目标
const person = observable({
    name: '122',
    age: 121
})

function print() { // 观察者
    console.log(`${person.name}-${person.age}`);
}
observe(print)
person.name = '测试'