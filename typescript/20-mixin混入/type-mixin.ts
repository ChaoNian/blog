// 拷贝基类属性方法混入

// // Disposable 混入类
// class Disposable {}

// // Activetable 混入类
// class Activetable {}



// // 扩展类  中间人的作用
// // implements: 这里为什么只用implements呢
// class SmartObject implements Disposable, Activetable {}




// // 混入基类的属性和方法
// function applyMixins(derivedCtor:any, baseCtors:any[]) {}


// // 混入方法 将基类中的属性和方法  克隆到扩展类中


// // 使用  实例化扩展类
// let  smarObj = new SmartObject()

// ----------------------------

// // Disposable 混入类
// class Disposable {
//     isDisposed!: boolean
//     dispose() {
//         this.isDisposed = true
//     }
// }

// // Activetable 混入类
// class Activetable {
//     isActive!: boolean
//     activate() {
//         this.isActive = true
//     }

//     deactivate() {
//         this.isActive = false
//     }
// }



// // 扩展类  中间人的作用
// // implements: 这里为什么只用implements呢
// class SmartObject implements Disposable,Activetable {
//     constructor() {
//         setInterval(() => console.log(this.isActive + ':' + this.isDisposed), 500)
//     }

//     interact() {
//         this.activate()
//     }

//     /**
//      *  主要作用是告诉TypeScript 已经实现 这些属性和方法,不报错
//         具体的属性值和方法 ,通过拷贝的方式, 从基类中获取过来
//         实现Disposable 成员
//      */
//     // 实现 Activatable成员
//     isActive: boolean = false
//     activate!: () => void
//     deactivate!: () => void

//     // 实现Disposable 成员
//     isDisposed: boolean = false
//     dispose!: () => void
// }



// // 混入基类的属性和方法  Object.getOwnPropertyNames  获取原型属性
// function applyMixins(derivedCtor:any, baseCtors:any[]) {
//     baseCtors.forEach(baseCtor => {
//         console.log(Object.getOwnPropertyNames(baseCtor.prototype), '111');
//         Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
//             derivedCtor.prototype[name] = baseCtor.prototype[name]
//         })
//     })
// }


// // 混入方法 将基类中的属性和方法  克隆到扩展类中
// applyMixins(SmartObject, [Disposable, Activetable])

// // 使用  实例化扩展类
// let  smarObj = new SmartObject()

//   setTimeout(() => smartObj.interact(), 2000)