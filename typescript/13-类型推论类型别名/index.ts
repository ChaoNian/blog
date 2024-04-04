// 类型别名
// type 关键字（可以给一个类型定义一个名字）多用于复合类型

//  -----定义类型别名
// type str = string
// let s:str = '我是xxx'

// -----定义函数别名

// type str= () => string

// let s:str = () => 'cscss'
// console.log(s(), 's');


// ----定义联合类型别名
// type str = string | number
// let s:str = 1212
// let s2:str = '23242'
// console.log(s, s2);


// ---定义值的别名

// type value = boolean | 0 | '1212'
// let s:value = true 
//变量s的值  只能是上面value定义的值


// ---type 和interface 有啥区别呢
/**
 * 1.interface可以继承  type 只能通过 & 交叉类型合并
 * 2.type 可以定义 联合类型 和 可以使用一些操作符 interface不行
   3.interface 遇到重名的会合并 type 不行
 */

// ---type高级用法
// 左边的值会作为右边值的子类型，遵循下面 上下的包含关系
/**
 * 1. unknown   any
 * 2. OBject
 * 3. Number String Boolean
 * 4. number string boolean
 * 5. 1 ‘232’   true
 * 6  nerver
 * 
 *  等级 1～6  高～低， 低级类型是高级类型的子类型，
 */
// type a = 1 extends number ? 1:0 // 1   意思 1 是不是继承于 number， 从上等级关系图可知 是的
// type a = 1 extends Number ? 1:0 // 1
// type a = 1 extends Object ? 1:0 // 1
// type a = 1 extends any ? 1:0 // 1
// type a = 1 extends unknown ? 1:0  // 1
// type a = 1 extends never ? 1:0  // 0