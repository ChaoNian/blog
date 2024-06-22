// 数组扩展
// function f(x,y,z) {
//     console.log(x);
// }
// let arg = [1,2,3]
// f.apply(null, arg)
// // 改成如下
// f(...arg)

// 类数组改为真正的数组
// let arrayLike = {
//     '0': 'v', 
//     '1': 'v2', 
//     '2': 'v1', 
//     length: 3
// }
// let a = [...arrayLike] // arrayLike is not iterable

// arrayLike = Array.from(arrayLike)
// a = [...arrayLike] //  ['v', 'v2', 'v1']


// array.of() // 一组值 转变成 数组


// 数组实例
/**
 * array.copyWithin（a，b，c） // 修改数组 将
 * array.find(cb)  找到符合条件的值 返回 ture ，不符合返回undefined
 * array.findIndex(cb) 找到符合条件的位置   不符合返回 -1
 * 
 * array.fill(value, start, end) 给定值一个数组
 * [1,3,4].fill(2) //  [2, 2, 2]
 * 
 遍历数组。 返回遍历器对象
  array.keys() // 返回key 组成的数组
 array.values() // 返回值 组成的数组
 array.entries() // 键值对组成的数组
 */

//    let a = ['a', 'd', 'f'].keys()
//    a.next().value // a
//    a = ['a', 'd', 'f'].values()
//    a.next().value // 0
//    a =  ['a', 'd', 'f'].entries()
//    a.next().value // [0, 'a']


/**
 * array.includes()
 */
    