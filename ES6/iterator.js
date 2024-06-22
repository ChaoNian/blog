// 模拟next 方法返回值
// function makeIterator(array) {
//     var nextIndex = 0
//     return {
//         next: function(array) {
//             return nextIndex < array.length ? {value:array[nextIndex++], done:false} :  {value:undefined, done: true}
//         }
//     }
// }
// makeIterator(['a', 'd']) // 返回一个指针对象

//对象是 可以遍历 因为 具有 Symbol.iterator
const object = {
    [Symbol.iterator]: function () {
        return {
            next:function() {
              return {
                value: 1,
                done: true
              }
            }
        }
    }
}

// 原生具有Symbol.iterator接口的数据结构：Array Map Set  String  TypeArray 函数的argument对象， NodeList对象
// let arr = ['a', 's', 'e']
// let iter = arr[Symbol.iterator]()
// iter.next() // {value: 'a', done: false}
// iter.next() // {value: 's', done: false}
// iter.next() // {value: 'e', done: false}
// iter.next() // {value: undefined, done: true}
