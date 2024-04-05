// 我们在工作中无法避免全局变量造成的污染，TypeScript提供了namespace 避免这个问题出现

/**
 * 内部模块 主要组织代码 避免命名冲突
 * 命名空间内的默认私有
 * 通过export 暴露
 * 通过 namespace 关键字定义
 * 
 * TypeScript与ECMAScript 2015一样，任何包含顶级import或者export的文件都被当成一个模块。相反地，
 * 如果一个文件不带有顶级的import或者export声明，那么它的内容被视为全局可见的（因此对模块也是可见的）
 * 
 * 用法
 * 1 命名空间用法 嵌套、抽离、简化、合并
 * 2 命名空间案例
 * namespace 所有的变量以及方法 必须要导出 才能访问
 */

// namespace Test {
//     // 变量、方法 。。。
//     export let a = 1
//     export namespace Test1 { // 嵌套
//         // 变量、方法 。。。
//         export let a = 1
//     }
// }

// console.log(Test.a);

// console.log(Test.Test1.a);


// 相同名 会合并
// namespace Test {
//     // 变量、方法 。。。
//     export let b = 1
// }
// console.log(Test.b);

// ----抽离 从单独文件导入
// import {Test} from './test'
// // console.log(Test.b); // 1

// // ----简化
// import a = Test.b
// console.log(a); // 1


// -----业务场景
// 跨端的项目 h5 Android ios 小程序 等, 不同端 编写不同代码 
namespace h5 {
    // 变量、方法 。。。
    export const pushNotifiucation = () => {}
}
namespace ios {
    // 变量、方法 。。。
    export const pushNotifiucation = (message:string, type:number) => {}
}

namespace android {
    // 变量、方法 。。。
    export const pushNotifiucation = (message:string, type:number) => {}
}

namespace miniprogram {
    // 变量、方法 。。。
    export const pushNotifiucation = (message:string, type:number) => {}
}





