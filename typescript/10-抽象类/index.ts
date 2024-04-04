/**
 *  可以叫 基类 或者 抽象类
 *   abstract 所定义的 抽象类
 *   abstract 所定义的方法 都只能描述 不能进行实现
 * 
 *   抽象类 不能被实例化 new xxx
 */

abstract class Vue {
    // abstract init () { // 报错 
    // }

    name: string
    constructor(name?:string) {
        this.name = name
    }
    getName() { // 实现
        return this.name
    }
    abstract init(name:string):void
}

// 派生类 extends super
class React extends Vue {
    constructor() {
        super()
    }
    init(name: string) { // 可以实现init
        // ...
    }

    setName(name:string) {
        this.name = name // 可以直接读到name
    }
}


// 实列
const  react = new React()
react.setName('测试糖果')
console.log(react.getName());
