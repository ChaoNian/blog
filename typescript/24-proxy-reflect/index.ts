/**使用 Proxy 实现观察者模式

 观察者模式（Observer mode）指的是函数自动观察数据对象，一旦对象有变化，函数就会自动执行。
 */

// let list:Set<Function> = new Set()

// const autorun = (cb:Function) => { // 观察者
//     if(cb) {
//         list.add(cb)
//     }
// }

// const observable = <T extends object>(params:T) => {
//     return new Proxy(params, {
//         set(target, key, value, reveiver) {
//             const result = Reflect.set(target, key, value, reveiver)
//             list.forEach(fn => fn())
//             return result
//         }
//     })
// }

// const d1 = {name:'A', attr: '121'} // 观察目标
// const person = observable(d1)

// autorun(() => {
//     console.log('变化了');
// })

// person.attr = '346'

/**
 * d1对象是 观察目标
 * autorun函数是  观察者
 * observable 触发充当观察者的各个函数
 */
