
// ---类型[ ]  类型加中括号
// let arr:number[] = [1,2,3]

// let arr:number[] = [1,2,'3'] // 报错
// 操作方法添加也是不允许的
// arr.unshift('1') // 报错

// let arr2: string[] = ['1', '2', '4']// 字符串类型的数组
// let arr3: any[] = ['1', '2', '4', 2, 5] // 任意类型的数组


// ----数组泛型 规则 Array<类型>
// let arr:Array<number> = [1,2,3,4]
// let arr:Array<boolean> = [false, true]



// ----用接口表示数组 一般用来描述类数组
// interface NumberArray {
//     [index:number]:number // index: 索引签名
// }
// let ff:NumberArray = [1,2,3,4,5] // //表示：只要索引的类型是数字时，那么值的类型必须是数字。

// ---- 多维数组

// let data:number[][] = [[1,2], [3,4]]; // number[][]
// let data:Array<Array<number>> = [[1,2], [3,4]]; // 泛型方式
// let data:[number, string, boolean, {}] = [1, '2', true]; // 大杂烩
// let data:any[] = [1, '2', true]; // any[]


// ---arguments类数组
// function Arr(...args:any): void {
//     console.log(arguments)
//     let arr:number[] = arguments // 错误的arguments 是类数组不能这样定义
// }
// Arr(111, 222, 333)
 
 
 
// function Arr(...args:any): void {
//     console.log(arguments) 
//     //ts内置对象IArguments 定义
//     let arr:IArguments = arguments
// }
// Arr(111, 222, 333)
 
// //其中 IArguments 是 TypeScript 中定义好了的类型，它实际上就是：
// interface IArguments {
// [index: number]: any;
// length: number;
// callee: Function;
// }