
/**
 * 泛型
 *  啥是泛型， 是一个啥东西
 * 就是 类型动态化， 有一个占位符号， 传给这个占位符， 这个占位符就会动态生成类型
 * 函数泛型
 * 对象泛型
 * 接口泛型 interface
 * 泛型类 class
 * 泛型约束  限制类型范围
 *  */ 
// -- 函数泛型

// function num(a:number, b:number):Array<number> {
//     return [a,b]
// }
// function str(a:string, b:string):Array<string> {
//     return [a,b]
// }

// 优化 泛型 可以解决上面 相似逻辑的类型写法 
// 写法 <参数名> 参数名可以随便写 例如我这儿写了T
// function Add<T>(a:T,b:T):Array<T> {
//     return [a,b]
// }
// Add<number>(1,2)
// Add<string>('1','2')

// 也可以使用不同的泛型参数名，只要在数量上和使用方式上能对应上就可以。

// function Sub<T,U>(a:T, b:U):Array<T|U> {
//     const params:Array<T|U> = [a, b]
//     return params
// }
// console.log(Sub<Boolean, number>(false, 1));


//----定义泛型接口

// 声明接口的时候 在名字后面加一个<参数> 使用的时候传递类型
// interface MyInte<T> {
//     (arg:T):T
// }
// function fn<T>(arg:T) {
//     return arg
// }
// let result:MyInte<number> = fn
// console.log(result(1213)); // 123


// ---对象字面量泛型  对象泛型

// let foo: {<T>(arg): T} // （arg） 括号包起来 是索引签名
// foo = function<T>(arg:T) {
//     return arg
// }

// foo(1232)

// ----泛型约束
// 期望在一个泛型的变量上面，获取其length参数，但是，有的数据类型是没有length属性的
// function getLegnth<T>(arg:T) {
//     return arg.length // 报错 类型“T”上不存在属性“length”
// }
// 这时候我们就可以使用泛型约束
// 于是，我们就得对使用的泛型进行约束，我们约束其为具有length属性的类型，这里我们会用到interface,代码如下

// interface Len {
//     length:Number
// }
// function getLength<T extends Len>(arg:T) {
//     return arg.length
// }
// getLength<string>('23')


// ---- 使用keyof 约束对象

/**
 * 其中使用了TS泛型和泛型约束。首先定义了T类型并使用extends关键字继承object类型的子类型，
    然后使用keyof操作符获取T类型的所有键[keyof T]，它的返回 类型是联合 类型，
    最后利用extends关键字约束 K类型必须为keyof T联合类型的子类型
    意思： 因为传入是对象，确定推断 T 是对象类型，需要代码使用 K 是 对象T 的属性， 
    怎么确定K类型的范围呢？获取 T 对象类型 所有的key ，使用keyof操作符，返回的事T对象类型的所有属性组合成的联合类型，
    K 类型 通过extends 继承 联合类型（此刻 K类型是 T对象类型 的 子类型）
 * @param obj 
 * @param key 
 * @returns 
 */
// function prop<T, K extends keyof T>(obj:T, key: K) {
//     return obj[key]
// }

// const o = {a:1, b: 2, c:4}
// prop(o, 'a')



// ----泛型类 class
/**
 * 声明方法跟函数类似名称后面定义<类型>
使用的时候确定类型new Sub<number>()
 */

// class Sub<T> {
//     attr:T[] = []
//     add(a:T):T[] {
//         return [a]
//     }
// }

// let n = new Sub<number>()
// n.attr = [1,2,3]
// n.add(123)
// let s = new Sub<string>()
// s.attr = ['1','2']
// s.add('123')