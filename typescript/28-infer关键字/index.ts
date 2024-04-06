/**
 * infer 就是推导泛型参数
 * infer 声明 只能出现在 extends 子语句中
 * infer 后面跟一个变量名， 名字随便定
 * 题目
 * 1、获取promise 返回的参数
 * 2、infer 协变   变量名相同 会产生协变  返回联合类型
 * 3、infer 逆变
 */

// 1、获取promise 返回的参数  非常经典的例子

// interface User  {
//     name:string
//     age:number
// }
// type Result = Promise<User>
// 提取泛型 User 里面的类型
//                                获取Promise 通过infer 提取变量（R） 有变量就返回 R 没有就返回 T 或者 never
// type PromiseRes<T> = T extends Promise<infer R> ? R :never
// type PromiseRes<T> = T extends Promise<infer R> ? R :T
// type r = PromiseRes<Result> // 结果： type r = User


// 如果遇到了多层的情况可以使用递归
// interface User  {
//     name:string
//     age:number
// }
// type Result = Promise<Promise<Promise<User>>>

// type PromiseRes<T> = T extends Promise<infer R> ? PromiseRes<R> : T
// type r = PromiseRes<Result>


// ----- 2、infer 协变 一般出现在对象里， 就是从对象里提取类型 组合为新的类型
// let obj = {
//     name: 'a',
//     age: 12
// }
// 推导出对新里的类型 并提取 返回元组类型  [N,A]
// type Bar<T> = T extends {name:infer N, age:infer A} ? [N,A] : T
// type T = Bar<typeof obj> // 返回 type T = [string, number]

// 推导出对新里的类型 并提取 返回联合类型  ---注意 产生协变 会返回联合类型--
// type Bar<T> = T extends {name:infer N, age:infer N} ? N : T
// type T = Bar<typeof obj> // 返回 type T = string | number
// console.log(typeof obj); // object



// ----3、infer 逆变 一般出现在函数的参数上面
// type Bar<T> = T extends {
//     a: (x:infer U) => void
//     b:(x:infer U) => void
// } ? U : never

// type T = Bar<{a:(x:number) => void, b:(x:string) => void}> 
// 返回 type T = never 为啥是never？？
// 因为 type a = number & string  没有类型即是number类型又是string类型 所以推导为never类  （错误写法， 没有函数的参数 具备同时多个类型的）
// 所以说 逆变 返回的是交叉类型  为了保证参数一致性 


// type T1 = Bar<{a:(x:number) => void, b:(x:number) => void}> // 返回 type T1 = number  正确写法

// 在协变位置上同一个类型变量的多个候选类型会被推断为联合类型；在逆变位置上，同一个类型变量的多个候选类型则会被推断为交叉类型

