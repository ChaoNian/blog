/**
 * Decorator 装饰器是一项实验性特性，在未来的版本中可能会发生改变
   它们不仅增加了代码的可读性，清晰地表达了意图，而且提供一种方便的手段，增加或修改类的功能

   若要启用实验性的装饰器特性，你必须在命令行或tsconfig.json里启用编译器选项
   "experimentalDecorators": true,            
    "emitDecoratorMetadata": true,    
    
    装饰器是一种特殊类型的声明，它能够被附加到类声明，方法， 访问符，属性或参数上
    1. 类装饰器 classdecorator
    2. 属性装饰器 PropertyDecorator
    3. 参数装饰器 ParameterDecorator
    4. 方法装饰器 MethodDecorator Propertydescorator
    5. 装饰器工厂
    6. import ‘reflect-metadata’
    7. axios
 */

import axios from 'axios'
import 'reflect-metadata'
    
// 定义一个类装饰器函数 他会把ClassA的构造函数传入你的watcher函数当做第一个参数
// const watchor: ClassDecorator = (target:Function) => {
//     // target 参数是 A 类的构造函数
//     console.log(target, 'target'); // [class A]
//     /**
//      * 优势：既然可以获取到A函数的构造函数， 那么在不去坏 A函数前提下， 对A函数进行改造 （增加属性 和方法）
//      */
    
//     target.prototype.getParams = <T>(params:T):T => {
//         return params
//     }
// }

// // 使用的时候 直接通过@函数名使用  意思：watchor函数 修饰 函数A
// @watchor
// class A {
//     constructor() {}
// }

// // watchor(A) 相等上面
// const a = new A();
// console.log((a as any).getParams('123')); // 123
// console.log(A.prototype); // { getParams: [Function (anonymous)] }

// 装饰器工厂
// const Base = (name:string) => {
//     const fn:ClassDecorator = (target) => {
//         target.prototype.xxx = name
//         target.prototype.fn = () => {
//             console.log(name, 'hahh'); // 我是参数 hahh
//         }
//     }
//     return fn
// }

// @Base('我是参数')
// class Http {
//     // ...
// }
// const http = new Http() as any
// console.log(http.xxx); // 我是参数



const Base = (base:string) => {
    const fn:ClassDecorator = (target) => {
        target.prototype.base = base
        target.prototype.fn = () => {
            console.log(name, 'hahh'); // 我是参数 hahh
        }
    }
    return fn
}

// 方法装饰器 MethodDecorator Propertydescorator
// 实现get 请求
const Get = (url:string) => {
    const fn:MethodDecorator = (target, _, descriptor:PropertyDescriptor) => {
        // console.log(target, key, descriptor);
        // console.log('Get---');
        
        /** 打印：
         * {} 
         * getList
         *  {
            value: [Function: getList],
            writable: true,
            enumerable: false,
            configurable: true
            }
         */

        // Reflect用法  取
        const key = Reflect.getMetadata('key', target)
        axios.get(url).then(res => [
            descriptor.value(key ? res.data[key] : res.data)
        ])
    }
    return fn
}

// const Post = (name:string) => {
//     const fn:MethodDecorator = (target) => {}
//     return fn
// }

// 参数装饰器函数
const Result = () => {
    const fn:ParameterDecorator = (target, propertyKey, index) => {
        // console.log(target, propertyKey, index); // {}  getList  0(@Result() 参数的位置) 
        // Reflect用法  先存 key值 属性  挂载target的原型   在get上取
        Reflect.defineMetadata('key', 'result', target)
    }
    return fn
}

// 属性装饰器函数
const Bt:PropertyDecorator = (target, propertyKey) => {
    console.log(target, propertyKey) // {} test
}

@Base('/api')
class Http {
    // 属性装饰器
    @Bt
    test:string
    constructor() {
        this.test = 'test'
    }

    @Get('https://api.apiopen.top/api/getHaoKanVideo?page=0&size=10') // 调接口 值在data 参数 返回  
    // getList(data:any) {
        // 返回值
    //     console.log(data.result.list);
    //     /**
    //      * {
    //         code: 200,
    //         message: '成功!',
    //         result: {
    //             total: 14782,
    //             list: [
    //             [Object], [Object],
    //             [Object], [Object],
    //             [Object], [Object],
    //             [Object], [Object],
    //             [Object], [Object]
    //             ]
    //         }
    //         }
    //      */
    // }
    // 参数装饰  改变返回值的 数据层级数量
    // 注意 触发顺序 @Result -- @Get
    getList(@Result() data:any) {
        // @Result 解决 读属性 更简洁 data.result.list
        // const result= result.list
        console.log(data);
    }
    // @Post() 用法和get相同
    create() {}

}
const http = new Http() as any
console.log(http.xxx); // 我是参数

