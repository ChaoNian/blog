const queuedObservers = new Set();
const observe = fn => queuedObservers.add(fn); // 收集观察者

const observable = obj => new Proxy(obj, {set});// 触发充当观察者的各个函数。

function set(target,key,value,reveiver) {
    const result = Reflect.set(target,key,value,reveiver)
    queuedObservers.forEach(observable => observable())
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