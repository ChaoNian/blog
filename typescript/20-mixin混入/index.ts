/**
 * 混入 Mixins 可以理解 合并 变量、属性、方法 
 * 1. 对象混入合并 A对象 B对象 合并到一起
 * 2. 类 的混入 A类 B类 合并到一起
 * 
 * -  面试内容  类的mixin混入
 */


// 1.对象混入
// interface Name {
//     name: string
// }
// interface Age {
//     age: number
// }
// interface Sex {
//     sex: number
// }
 
// let people1: Name = { name: "小满" }
// let people2: Age = { age: 20 }
// let people3: Sex = { sex: 1 }

// let c = {...people1, ...people2}
// console.log(c);
/** 扩展运算符 浅拷贝 返回新类型 
 * let c: {
    age: number;
    name: string;
}
 */

// const people = Object.assign(people1, people2, people3) // const people: Name & Age & Sex 推到出交叉类型   浅拷贝

// 深拷贝  注意 node 版本 >18 浏览器>90
// structuredClone(people1)


// 2.类的混入 
class A {
    type:boolean = false
    changeType() {
        this.type = !this.type
    }
}

class B {
    name:string = '张三'
    getName() {
        return this.name
    }
}

// 创建一个类，结合了这两个mixins
// 首先应该注意到的是，没使用extends而是使用implements【？？？】。 把类当成了接口
// 我们可以这么做来达到目的，为将要mixin进来的属性方法创建出占位属性。 这告诉编译器这些成员在运行时是可用的。 这样就能使用mixin带来的便利，虽说需要提前定义一些占位属性
class C implements A,B {
    type:boolean
    changeType:() => void
    name: string
    getName: () => string
}
// 最后，创建这个帮助函数，帮我们做混入操作。 它会遍历mixins上的所有属性，并复制到目标上去，把之前的占位属性替换成真正的实现代码
// Object.getOwnPropertyNames()可以获取对象自身的属性，除去他继承来的属性，对它所有的属性遍历，它是一个数组，遍历一下它所有的属性名


function Mixins(curCls: any, itemCls: any[]) {
    itemCls.forEach(item => {
        console.log(Object.getOwnPropertyNames(item.prototype), '1234567');
        
        Object.getOwnPropertyNames(item.prototype).forEach(name => {
            curCls.prototype[name] = item.prototype[name]
        })
    })
}

// 混入方法, 将基类中的属性方法,克隆到扩展类中
Mixins(C, [A, B])

let obj = new C()
console.log(obj.getName());

 // 插件类型
// class Logger {
//     log(msg:string) {
//         console.log(`${msg}--log`);
//     }
// }
// class Html {
//     render() {
//         console.log('render');
//     }
// }

// class App {
//     run () {
//         console.log('run');
//     }
// }
// type Custructor<T> = new(...arg:any[]) => T

// function pluginMinxins<T extends Custructor<App>>(Base:T) {
//     // 将Logger Html App 融合 返回新的类
//     return class extends Base {
//         // private： 私有的 只能自己内部使用属性、方法， 子类、外部不能使用，
//         private Logger = new Logger
//         private Html = new Html
//         constructor (...args:any[]) {
//             super()
//             this.Logger =new Logger()
//             this.Html =new Html()
//         }
//         run () {
//             this.Logger.log('2323')
//         }

//         render() {
//             this.Logger.log('render')
//             this.Html.render()
//         }
//     }
// }

// const mixins = pluginMinxins(App)
// const app = new mixins()
// // app.run()
// app.render()
