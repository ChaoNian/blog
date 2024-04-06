// ----联合类型 类型 |  类型

//例如我们的手机号通常是13XXXXXXX 为数字类型 这时候产品说需要支持座机
//所以我们就可以使用联合类型支持座机字符串
// let myPhone: number | string  = '010-820'


// 这样写是会报错的应为我们的联合类型只有数字和字符串并没有布尔值
// let myPhone: number | string  = true


// 函数使用联合类型
// const fn = (something:number | boolean):boolean => {
//     return !!something
// }


// ---交叉类型 多种类型的集合，联合对象将具有所联合类型的所有成员
// 类型 & 类型

// interface People {
//     age: number,
//     height:number
// }

// interface Man{
//     sex: string
// }

// const sss = (man: People & Man) => {
//     console.log(man);
// }
// sss({age: 1, height: 2, sex: 's'})

// ----类型断言
// 语法：值 as 类型　　或　　<类型>值  value as string  <string>value
// interface A {
//     run: string
// }

// interface B {
//     build: string
// }

// const fn = (type: A | B): string => {
//     return type.run
// }
//这样写是有警告的应为B的接口上面是没有定义run这个属性的

// interface A {
//     run: string
// }

// interface B {
//     build: string
// }

// const fn = (type: A | B): string => {
//     return (type as A).run // 断言为 A类型
// }
//可以使用类型断言来推断他传入的是A接口的值


// 需要注意的是，类型断言只能够「欺骗」TypeScript 编译器，无法避免运行时的错误，反而滥用类型断言可能会导致运行时错误：
// 使用any临时断言
// window.abc = 123
//这样写会报错因为window没有abc这个东西

// (window as any).abc = 123
//可以使用any临时断言在 any 类型的变量上，访问任何属性都是允许的。


// ---as const
// 是对字面值的断言，与const直接定义常量是有区别的， 如果是普通类型跟直接const 声明是一样的

// const names = '小满'
// names = 'aa' //无法修改

// let names2 = '小满' as const
// names2 = 'aa' //无法修改


// 数组
// let a1 = [10, 20] as const;
// const a2 = [10, 20];
// a1.unshift(30); // 错误，此时已经断言字面量为[10, 20],数据无法做任何修改
// a2.unshift(30); // 通过，没有修改指针

// 什么是断言？？
/**
 * 保证数据类型一定是所要求的类型
 * 解释型强制类型转换
 * 类型断言就是告诉编译器, 你不要帮我们检查了, 相信我，它就是这个类型。
 * 
 * 型断言还需要借助类型守卫函数，类型守卫函数就是用于判断未知数据是不是所需类型
 */

// ----类型守卫 类型断言还需要借助类型守卫函数，类型守卫函数就是用于判断未知数据是不是所需类型
// type User = {
//     name: string;
//     age: number;
// }
// function showUser(user: User) {
//     console.log(user.name);
//     console.log(user.age);
// }
// showUser({ name: 'Alice', age: 12 })
// let errorType = '';
// showUser(errorType); //错误 showUser函数执行传递的参数是符合类型要求的。但是如果不符合要求的参数就会报错

// 在运行时如何保证和检测来自其他地方的数据也符合我们的要求呢？  这就类型断言要干的事
// function isUser(arg: any): arg is User { // 格式：x is y ,表示x是不是y类型
//     if (!arg) {
//         return false;
//     }
//     else {
//         if (typeof arg.name == 'string' && typeof arg.age == 'number') {
//             return true;
//         } else {
//             return false;
//         }
//     }
// }
// // 类型守卫函数与普通函数没多大区别，唯一需要注意其返回值类型比较特殊特殊，格式：x is y ,表示x是不是y类型
// if (isUser(errorType)) {
//     showUser(errorType); // 类型断言后就不会报错了
// }