/**
 * 泛型工具：提升类型灵活性和重用性
 * 泛型工具是一组预定义的泛型类型和操作符，用于操作和转换类型。它们可以帮助我们编写更灵活、更通用的代码，并提高代码的可读性和可维护性。
 */

// --- Partial
// Partial 是一个泛型类型，用于将一个类型的所有属性变为可选。与之相反，Required 是一个泛型类型，用于将一个类型的所有属性变为必选
// interface User {
//     name: string
//     age: number
// }

// type PartialUser = Partial<User>; 

/**
 * 变成如下
 * type PartialUser = {
    name?: string;
    age?: number;
}
 *  */ 
//Partial<User> 原理 
// type Partial1<T> = {
//     /**
//      *  P 循环 所有属性，后面加？，是的变成属性是可选类型； 
//      * in 操作符 后面只能接受联合类型， 将接口类型变成联合类型 通过keyof 操作符  keyof T， 
//      */
//     [P in keyof T]? : T[P]
// }
// type a = Partial1<User>

// ---Required 可选属性 变为必选属性
// type RequireUser = Required<PartialUser>
// type RequireUser1<T> = {
//     /**
//      *  P（是一个key） 循环 所有属性，后面加？，是的变成属性是可选类型； ?前面 写 -（减号） 就是变成必选属性
//      * in 操作符 后面只能接受联合类型， 将接口类型变成联合类型 通过keyof 操作符  keyof T， 
//      */
//     [P in keyof T]-? : T[P]
// }
// type b = RequireUser1<PartialUser>


// ------Pick 提取部分属性
// type PickUseer = Pick<User, 'age'| 'name'> // 提取出 age 和 name 属性 ，组合新的类型

/**
 * 原理
 */
// type Pick1<T, K extends keyof T> = { 
//   [P in K]: T[P];
// }


//---- Exclude  排除部分属性 用在联合类型Exclude<联合类型A， 联合类型B>
// type ExcludeUser = Exclude<'1'|'2'|'3', '2'> // 从联合类型'1'|'2'|'3'  中  排除 ‘2’ 之后得到的心类型

// type Exclude1<T, U> = T extends U ? never : T 
// T包含 U  就会true， 返回never  否则 返回 T， 这里 第二个参数（联合类型B ） 会被转变成never 
/// 这里为什么是 never？？？
// 案例 联合类型
// type lianhe = 'a' | 'b' | never // 实际 type lianhe = "a" | "b" 这里never 没有了， 因为 在联合类型中 never 会被去掉



//---- Omit 排除部分属性 并且返回新的类型
// 主要用在 interface 

// type OmitUser = Omit<User, 'age' | 'name'>
// type OmitUser = Omit<User, 'age'> // 意思 排除age 属性 ， 返回之后name 属性的 类型
/**
 * type OmitUser = {
    name: string;
   }
 */

// 原理
// type Omit1<T, K extends string | number | symbol> = {
//     //Exclude：原理 type Exclude<T, U> = T extends U ? never : T
//     [P in Exclude<keyof T, K>]: T[P];
//  }

//  Pick + Exclude 实现Omit
// type CoustomOmit<T, K extends keyof T> =Pick<T, Exclude<keyof T, K>>
// type ss = CoustomOmit<User, 'name'> // 只有age 属性的 类型



// ---  Record 约束对象的key和value
/**
 * Record工具类型有两个类型参数K和T，其中：

   K表示创建的新对象需要具有哪些属性，属性可以只有一个，也可以有多个，多个属性时采用"联合类型"的写法。
   T表示对象属性的类型。
   案例 约束一个对象的key，value
 */
// type Key = 'a'| 'b' | 'k'

// type Value = '1' | '2'| 'ss'

// let obj:Record<Key, Value> = {
//    'a': '1',
//    'b': '2',
//    'k': 'ss'
// }

// 源码
// type ObjKey = keyof any
// type Record<K extends ObjKey, T> = { K 包含 string | number | symbol 三种类型，
   // [P in K]: T; // P 等于Key 遍历 K类型， 值是T
//  }  
// type Record<K extends string | number | symbol, T> = { [P in K]: T; }
// 小知识 ，语法糖  string | number | symbol 相当于 type ObjKey = keyof any

// 对象的key 只能是symbol string number 那么keyof any正好获取这三个类型

// 支持嵌套约束
// let obj:Record<Key, Record<Key, Value>> = {
//    'a': {
//       'a': '1',
//       'b': '2',
//       'k': '3'
//    },
//    'b': {
//       'a': '1',
//       'b': '2',
//       'k': '3'
//    },
//    'k': {
//       'a': '1',
//       'b': '2',
//       'k': '3'
//    }
// }


// -----ReturnType<Fn> 主要适用于函数，能够提取函数所返回的类型
// const fn = () => [1,2,3, 'sad']
// type num = ReturnType<typeof fn>

// 原理： 
// type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any

// 自己实现 ReturnType
// F extends Function 传入的函数 进行类型约束    条件类型  F是否满足条件        返回值不确定是动态的，有可能是字符串 数字， 要获取动态的返回值使用关键字 infer  让他去推断， R是变量（也可以叫B、D）， 能读到这个变量就返回改变量 否则返回never 或者any
// type CustomReturnType <F extends Function> = F extends (...arg:any[]) => infer R ? R : never
// ...arg:any[] 不管什么参数
// type num1 = CustomReturnType<typeof fn>