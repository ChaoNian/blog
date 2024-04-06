/**
 * 所谓的类型兼容性，就是用于确定一个类型是否能赋值给其他的类型。typeScript中的类型兼容性是基于结构类型的（也就是形状），如果A要兼容B 那么A至少具有B相同的属性。
 */

// 协变 也可以叫鸭子类型
/**
 * 什么是鸭子类型？

一只鸟 走路像鸭子 ，游泳也像，做什么都像，那么这只鸟就可以成为鸭子类型。
 */

// 父类
// interface A {
//     name:string
//     age:number
// }
 
// 子类
// interface B {
//     name:string
//     age:number
//     sex:string
// }
 
// let a:A = {
//     name:"老墨我想吃鱼了",
//     age:33,
// }
 
// let b:B = {
//     name:"老墨我不想吃鱼",
//     age:33,
//     sex:"女"
// }
 
// a = b
// A B 两个类型完全不同但是竟然可以赋值并无报错B类型充当A类型的子类型，当子类型里面的属性满足A类型就可以进行赋值，也就是说 不能少可以多，这就是协变。

/**
 * ---- 逆变
 * 逆变一般发生于函数的参数上面
 */

// let fna = (params:A) => {
 
// }
// let fnb = (params:B) => {}

// fnb = fna //正确 
// 调用 fnb  实际 调用fna 的方法  这叫逆变

// 双向协变  可以 a = b , b =a 相互赋值
// tsconfig.json  配置 "strictFunctionTypes": true,  控制是否双向协变 
// fna = fnb //错误

// fnb = fna //正确