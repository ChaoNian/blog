/**
 * 在 TypeScript 中，类型守卫（Type Guards）是一种用于在运行时检查类型的机制
 * 它们允许你在代码中执行特定的检查，以确定变量的类型，并在需要时执行相应的操作。
 */

// ----typeof 类型收缩
// const isString = (str:any) => {
//     return typeof str ==='string'
// }
// 上面例子 声明一个函数可以接受任意类型，只筛选出字符串类型，进行类型收缩 就是从大范围类型 缩小到特定类型


// ---- instanceof
// const isArr = (value:unknown) => {
//     if (value instanceof Array) {
//         value.length
//     }
// }
// 使用 instanceof 类型守卫可以检查一个对象是否是特定类的实例

/**
 * 1.typeof 和 instanceof 区别
typeof 和 instanceof 是 TypeScript 中用于类型检查的两个不同的操作符，它们有不同的作用和使用场景。
 */
// const str = "Hello";
// console.log(typeof str); // 输出: "string"

// const num = 42;
// console.log(typeof num); // 输出: "number"

// const bool = true;
// console.log(typeof bool); // 输出: "boolean"

/**
 * 注意事项：typeof 只能返回有限的字符串类型，
 * 包括 “string”、“number”、“boolean”、“symbol”、“undefined” 和 “object”。
 * 对于函数、数组、null 等类型，typeof 也会返回 “object”。因此，typeof 对于复杂类型和自定义类型的判断是有限的。
 */

/**
 * 2.instanceof
作用：instanceof 操作符用于检查一个对象是否是某个类的实例。它通过检查对象的原型链来确定对象是否由指定的类创建。
 */
// class Person {
//     name: string;
//     constructor(name: string) {
//       this.name = name;
//     }
//   }
  
//   const person1 = new Person("Alice");
//   console.log(person1 instanceof Person); // 输出: true
  
//   const obj11 = {};
//   console.log(obj11 instanceof Person); // 输出: false
  
//   注意事项：instanceof 操作符主要用于检查对象是否是特定类的实例，它无法检查基本类型。
// 此外，它也无法检查对象是通过字面量创建的，因为字面量对象没有显式的构造函数。


/**
 * ------自定义守卫
 * 题目: 
 *  实现一个函数支持任意类型
    如果是对象，就检查里面的属性，
    如果里面的属性是number就取两位，
    如果是string就去除左右空格
    如果是函数就执行
 */

/**
 * 
*  第二个问题是我们编写的时候没有代码提示很烦
   这时候就需要自定义守卫了
   类型谓词的语法形式。它表示当 isString 返回 true 时，str 的类型被细化为 string 类型
*/
const isString = (str:any): str is string => typeof str === 'string'
const isNumber = (num:any): num is number => typeof num === 'number'
const isFn = (fn:any) => typeof fn === 'function'
// const isObj = (obj:any) => Object.call.toString.call(obj) === '[object Object]'
const isObj = (obj:any) => ({}).toString.call(obj) === '[object Object]'

const fn1 = (data:any) => {
    let value
    if (isObj(data)) {
        Object.keys(data).forEach(key => {
            value = data[key]
            if (isString(value)) { // 如果是string就去除左右空格
                data[key] =value.trim()
            }
            if (isNumber(value)) { // 如果里面的属性是number就取两位，
                data[key] =  value.toFixed(2) // value.toFixed(2)
            }
            if (isFn(value)) { // 如果是函数就执行
                // value() // 这样直接调用this 指向 window 
                data[key]() //修改这儿
            }
        })
    }
}
const obj12 = {
    a: 100.22222,
    b: ' test  ',
    c: function () {
        // undefined 因为当函数被单独调用时（例如 value()），函数内部的 this 会指向全局对象（在浏览器环境下是 window）
        // 看 95 行
        console.log(this.a);
        return this.a;
    }
}
fn1(obj12)
console.log(obj12);
