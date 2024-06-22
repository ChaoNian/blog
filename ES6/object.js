//  获取对象属性的描述对象

// let o = {a: 1, b: 2}
// console.log(Object.getOwnPropertyDescriptors(o));
// console.log(Object.getOwnPropertyDescriptors(o)); // 返回所有属性的描述对象
// console.log(Object.getOwnPropertyDescriptors(o, 'b'))3;
// console.log(Object.getOwnPropertyDescriptor(0, 'a')); // 

// 遍历
// Reflect.ownKeys({[Symbol()]: 0, v: 1, f:3, 1:3, 4:445}) //  ['1', '4', 'v', 'f', Symbol()]  先数字，字符串 symbol

// 对象上具备 for... of x循环调用的Iteraor 接口
class RangeIterator {
    consturctor (start, stop) {
        this.value = start
        this.stop = stop
    }
    [Symbol.iterator]() { return this}
    next() {
        var value = this.value
        if (value < this.stop) {
            this.value++
            return {done:false, value: value}
        }
        return {done: true, value: undefined}
    }
}
function range(start, stop) {
    return new RangeIterator(start, stop)
}
for (var value of range(0, 3)) {
    console.log(value);
    
}
// 任意对象上部署iterator接口
function* iterEntries(obj) {
    let keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i]
        yield [key, obj[key]]
    }
}
let myObj = { foo: 2, bar:7 }
for (const [key, value] of iterEntries(myObj)) {
    console.log(key, value);
}