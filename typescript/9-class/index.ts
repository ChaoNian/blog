/**
 * 1 class 的基本用法 继承 和 类型约束 implements
 * 2. clas 的修饰符 readonly private protected  public
 *    readonly: 只能用在 索引签名 或者 属性， 说明属性只读
 *    private： 私有的 只能自己内部使用属性、方法， 子类、外部不能使用，
 *    protected： 受保护的 给子类或者 内部使用， 外部不能直接使用
 *    public： 公共的， 内部、子类、外部 都可以使用的属性和方法
 * 
   3. super 原理 父类的 prototype.constructor.call
 * 
 * 4. 静态方法 static
 *     方法前 + static
 *     例如 version
 *     this 指向， 只能读到相同static 的方法，没有加static的 属性 或 方法读取不到
 * 
 * 5. get set  
 *    看 类 Ref   
 */

// Vue 类型写法
// interface Options {
//     el: string | HTMLElement // 字符串 和html元素
// }
// interface VueCls {
//     options: Options,
//     init(): void
// }

// interface Vnode {
//     tag: string
//     text?: string
//     children?: Vnode[]
// }

// // 虚拟DOM xiaodemo
// class Dom {
//    // 创建节点的方法
//    createElement(el:string) {
//     return document.createElement(el)
//    }

//    // 填充文本的方法
//    setText(el:HTMLElement, text:string | null) {
//      el.textContent = text
//    }
   
//    // 渲染函数
//    render(data:Vnode) {
//      let root = this.createElement(data.tag)
//      if (data.children && Array.isArray(data.children)) {
//         data.children.forEach(item => {
//            let child = this.render(item)
//            root.appendChild(child)
//         })
//      } else {
//         this.setText(root, data.text)
//      }

//      return root
//    }
// }

// // VueCls 被 VueCls类型约束 Vue 继承(extends) Dom 
// class Vue extends Dom implements VueCls {
//     options: Options
//     constructor(options: Options) {
//         super() // 一定要放在这
//         this.options = options
//         this.init()
//     }
//     static xxx () {} // 静态方法
//     static version() { // 静态方法
//         this.xxx
//         return '1.2.3'
//     }
//     init(): void {
//         // 虚拟dom 就是通过js 去渲染我们这个真实dom
//         let data:Vnode = {
//             tag: 'div',
//             children: [
//                 {
//                     tag: 'section',
//                     text: '我是子节点'
//                 },
//                 {
//                     tag: 'section',
//                     text: '我是子节点2'
//                 }
//             ]
//         }

//         // 
//         let app = typeof this.options.el == 'string' ? document.querySelector(this.options.el) : this.options.el
//         app?.appendChild(this.render(data)) // 子类调用父类的方法

//     }
// }

// new Vue({
//     el: '#app',

// })
// Vue.version // 实例 才能直接调用 静态方法

class Ref {
    _value: any
    
    constructor(value:any) {
        this._value = value
    }

    get value () {
        return this._value + 'ccx'
    }

    set value (newVal) {
        this._value = newVal + 'test'
    }

}
const  ref = new Ref('1212')
// console.log(ref.value); // 1212ccx

ref.value = '2323'
// console.log(ref.value); // 2323testccx
