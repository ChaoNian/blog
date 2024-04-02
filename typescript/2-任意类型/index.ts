/**
 * any 任意类型  unknown 不知道的类型
 * 1. top type 顶级类型  any unknown
 * 2. Object
 * 3. Number String Boolean
 * 4. number string boolean
 * 5. 1 'sdd'   false
 * 6 never
 * 
 *  类型等级从1～6， 高级～低级 ， 高级类型包含低级类型
 * 
 * 注意 
 * unknown 只能赋值自身 或 any
 * unknown 没有办法 读任何属性 方法 也不可调用
 * unknown 比 any 更安全， 假设不知道什么类型 优先使用unknown 
 */

// let a:unknown = 1
// let b:number = 1
// b = a // 报错

// let a:unknown = 1
// let b:unknown = 1
// b = a // ok

// let a:unknown = 1
// let b:any = 1
// b = a // ok




// unkown 没有办法 读任何属性 方法 也不可调用
// let obj:any = {a: 12, op: () =>123}
// console.log(obj.a);// ok

// let obj:unknown = {a: 12, op: () =>123}
// console.log(obj.a);// “obj”的类型为“未知” 提示
// let obj:unknown = {a: 12, op: () =>123}
// console.log(obj.op());// “obj”的类型为“未知” 提示
