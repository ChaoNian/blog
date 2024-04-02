/**
 * 基础类型
 */
// 字符串
// let str: string = '我是字符串'
// console.log(str);
// 数字类型 number
// let num: number = 121
/**
 * 支持十六进制、十进制、八进制和二进制
 * let notANumber: number = NaN;//Nan
let num: number = 123;//普通数字
let infinityNumber: number = Infinity;//无穷大
let decimal: number = 6;//十进制
let hex: number = 0xf00d;//十六进制
let binary: number = 0b1010;//二进制
let octal: number = 0o744;//八进制s
 */
// 布尔类型
// let bol:boolean = true
/**
 * 注意，使用构造函数 Boolean 创造的对象不是布尔值：
 */
// let createdBoolean: boolean = new Boolean(1) // //这样会报错 应为事实上 new Boolean() 返回的是一个 Boolean 对象
// 空值类型  Void
// void也可以定义undefined 和 null类型
// let u:void = undefined
// let n:void = null // 提示 不能将类型“null”分配给类型“void”。 因为是严格模式， 在tsconfig.json 里关闭严格模式 strict： false
// let u:undefined = undefined //定义undefined
// let n:null = null // 定义null 严格模式可以赋值给自身
// 宽松模式下strict： false 可以穿插赋值
// u = n
// n = u
// 使用场景  函数
// JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数
// function voidFn():void {
//     console.log('test');
// }
// void 类型的用法，主要是用在我们不希望调用者关心函数返回值的情况下，比如通常的异步回调函数
// void 和 undefined 和 null 最大的区别
// 与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 string 类型的变量：
//这样写会报错 void类型不可以分给其他类型
// let test: void = undefined
// let num2: string = "1"
// num2 = test
//这样是没问题的
// let test: null = null
// let num2: string = "1"
// num2 = test
// //或者这样的
// let test: undefined = undefined
// let num2: string = "1"
// num2 = test
// null 不能 赋予 void 类型 
