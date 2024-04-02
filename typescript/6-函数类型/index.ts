/**
 * 1. 函数定义类型和返回值｜ 箭头函数定义类型和返回值
 * 2. 函数默认的参数｜函数可选参数
 * 3. 参数是一个对象如何定义
 * 4. 函数this类型
 * 5. 函数重载
 */

// 1. ---函数定义类型和返回值｜ 箭头函数定义类型和返回值
// const fn = (name:String, age:number) => {
//     return name + age
// }
// fn('qq', 23)

// 2.----函数默认的参数｜函数可选参数 
// 过?表示该参数为可选参数
// const fn = (name:String, age?:number) => {
//     return name 
// }
// fn('qq', 23)

// 函数参数的默认值
// const fn = (name:String= '12121', age?:number) => {
//     return name 
// }
// fn('qq', 23)


// ----接口定义函数

//定义参数 num 和 num2  ：后面定义返回值的类型
// interface Add {
//     (num:number, num2:number): number
// }
// const fn:Add = (num:number, num2:number) => {
//     return num + num2
// }
// fn(5,5)

// interface User {
//     name: string,
//     age: number
// }
// 参数是User类型  返回值也是User类型
// function getUserInfo(user:User):User {
//     return user
// }

// ----定义剩余参数
// const fn = (array:number[], ...items:any[]):any[] => {
//     console.log(array, items);
//     return items
// }
// let a:number[] = [1,2,3]

// fn(a, 2,3,4)


// ----函数this类型
// interface Obj {
//     user: number[],
//     add: (this:Obj, num:number) => void
// }
// // ts 可以定义this 的类型 在js 无法使用 必须是第一个参数定义this 的类型
// let obj:Obj = {
//     user:[1,2,3],
//     add(this:Obj, num) {
//         this.user.push(num)
//     }
// }
// obj.add(12)


// ----函数重载
// 一个函数 实现有多个逻辑
/**
 * 重载是方法名字相同，而参数不同，返回类型可以相同也可以不同。
   如果参数类型不同，则参数类型应设置为 any。
   数数量不同你可以将不同的参数设置为可选。

 */
let user:number[] = [1,2,3]
function findNum(add:number[]):number[] // 如果传一个number类型的数组 就添加逻辑
function findNum(id:number):number[] // 如果传入id 就是单个查询
function findNum():number[] // 如果没有传入东西 就是查询全部
function findNum(ids?:number | number[]):number[] {
    if (typeof ids === 'number') {
        return user.filter(v => v === ids)
    } else if (Array.isArray(ids)) {
        user.push(...ids)
        return user
    } else {
        return user
    }
}
console.log(findNum([1,2,3]));

