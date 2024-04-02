/**
 * 对象的类型
 * 在typescript中，我们定义对象的方式要用关键字interface（接口），
 * 可以理解是使用interface来定义一种约束，让数据的结构满足约束的格式
 * 
 * 必须与接口保持一致
 * 重名interface  可以合并
 * 继承
 * 可选属性 使用?操作符
 * 任意属性 [propName: string] 需要注意的是，一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
 * 只读属性 readonly readonly 只读属性是不允许被赋值的只能读取
 * 添加函数
 */

// -----定义
// interface Pxxx { 开头大写
//     a: string,
//     b: number
// }

// interface Person {
//     a: string,
//     b: number
// }

// const per: Person = {
//     a: '12', // 属性一一对应
//     b: 12
// }


// -----重名interface  可以合并
// interface A {name: string}
// interface A {age: number}
// let x: A = {name: '21', age: 1231}

// ----继承
// interface A{
//     name:string
// }
 
// interface B extends A{
//     age:number
// }
 
// let obj:B = {
//     age:18,
//     name:"string"
// }

// ----可选属性 使用?操作符
//可选属性的含义是该属性可以不存在
//所以说这样写也是没问题的
// interface Person {
//     b?:string,
//     a:string
// }
 
// const person:Person  = {
//     a:"213"
// }

// ----任意属性 [propName: string] 
// 需要注意的是，一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
//在这个例子当中我们看到接口中并没有定义C但是并没有报错
//应为我们定义了[propName: string]: any;
//允许添加新的任意属性
// interface Person {
//     b?:string,
//     a:string,
//     [propName: string]: any; // propName 叫索引签名， 值推荐any
// }
 
// const person:Person  = {
//     a:"213",
//     c:"123"
// }

// 只读属性 readonly
// readonly 只读属性是不允许被赋值的只能读取
//这样写是会报错的
//应为a是只读的不允许重新赋值
// interface Person {
//     b?: string,
//     readonly a: string,
// }
 
// const person: Person = {
//     a: "213",
// }
 
// person.a = 123 // 报错



// ----添加函数
interface Person {
    b?: string,
    readonly a: string,
    [propName: string]: any;
    cb:()=>void
}
 
const person: Person = {
    a: "213",
    c: "123",
    cb:()=>{
        console.log(123)
    }
}
