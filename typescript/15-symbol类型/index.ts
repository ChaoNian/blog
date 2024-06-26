/**
 * 自ECMAScript 2015起，symbol成为了一种新的原生类型，就像number和string一样。
   symbol类型的值是通过Symbol构造函数创建的。

   可以传递参做为唯一标识 只支持 string 和 number类型的参数
 */
// let sym1 = Symbol()
// let sym2 = Symbol('key') // 可选字符 key
// console.log(sym1, sym2); // 打印 Symbol() Symbol(key)


// --- Symbol的值是唯一的

// const s1 = Symbol()
// const s2 = Symbol()
// // s1 === s2 =>false
// console.log(Symbol.for('1') === Symbol.for('1')); // true



// --- 用作对象属性的键

// let sym = Symbol()

// let obj = {
//     [sym]: 'value'
// }
// console.log(obj[sym]); // value


// -- 使用symbol定义的属性，是不能通过如下方式遍历拿到的

// const symbol1 = Symbol('666')
// const symbol2 = Symbol('777')
// const obj1= {
//    [symbol1]: '小满',
//    [symbol2]: '二蛋',
//    age: 19,
//    sex: '女'
// }
// ---1 for 遍历
// for (const key in obj1) {
//     // age for-in
//     // sex for-in
//     // 注意在console看key,是不是没有遍历到symbol1
//     console.log(key, 'for-in');
    
// }

// --2 Object.keys 遍历

// console.log(Object.keys(obj1)); // [ 'age', 'sex' ]


// --3 getOwnPropertyNames
// console.log(Object.getOwnPropertyNames(obj1)); // [ 'age', 'sex' ]

// // --3 JSON.stringify
// console.log(JSON.stringify(obj1));// {"age":19,"sex":"女"}


// 如何拿到symbol
// getOwnPropertySymbols  可以拿到 symbol
// console.log(Object.getOwnPropertySymbols(obj1)); // [ Symbol(666), Symbol(777) ]

// 2 es6 的 Reflect 拿到对象的所有属性
// console.log(Reflect.ownKeys(obj1)); // [ 'age', 'sex', Symbol(666), Symbol(777) ]

// ---------------

//  ---生成器 用法一样
function * gen1() {
    yield Promise.resolve('测试')
    yield '1'
    yield '2'
    yield '3'
}
const man = gen1()
// console.log(man.next(), 'man'); // { value: Promise { '测试' }, done: false }


// Symbol.iterator 迭代器 和 生成器 for of
// 支持遍历大部分类型迭代器 arr nodeList argumetns set map 等

// let set1:Set<number> = new Set([1,2,3,4,4])
// let map1:Map<any,any> = new Map()

// var arr = [1,2,3,4]
// map1.set(arr, '23232')
// console.log(map1.get(arr)); // 23232

// function args() {
//     console.log(arguments); // 伪数组
    
// }

// let list = document.querySelector('div') // nodeList 伪数组

// let iterator = arr[Symbol.iterator]()
// console.log(iterator.next()); // { value: 1, done: false }
// console.log(iterator.next()); // { value: 1, done: false }
// console.log(iterator.next()); // { value: 1, done: false }
// console.log(iterator.next()); // { value: 1, done: false }
// console.log(iterator.next()); // { value: undefined, done: true }
// console.log(iterator.next()); // { value: undefined, done: true }


// 实践案例
interface Item {
    age: number
    name: string
}

const array: Array<Item> = [{age:23, name: '1'},{age:23, name: '2'}, {age:23, name: '3'}]

type mapTypes = string | number

const map:Map<mapTypes, mapTypes> = new Map()

map.set('1', 'AAA')
map.set('2', 'BBB')

const obj2 = {
    aaa: 123,
    bbb: 234
}

// let set:Set<number> = new Set([1,2,3,4,5,6])

// const gen = (erg:any):void => {
//     let it: Iterator<any> = erg[Symbol.iterator]()
//     let next:any = {done:false}

//     while (!next.done) {
//         next = it.next()
//         if (!next.done) {
//             console.log(next.value);
//         }
        
//     }
// }
// gen(array)// { age: 23, name: '1' } { age: 23, name: '2' } { age: 23, name: '3' }
// gen(map) // [ '1', 'AAA' ]  [ '2', 'BBB' ]

// console.log(map); // Map(2) { '1' => 'AAA', '2' => 'BBB' }

// 我们平时开发中不会手动调用iterator 应为 他是有语法糖的就是for of  记住 for of 是不能循环对象的应为对象没有 iterator  
// ---语法糖 for of
// for (let value of map) {
//     console.log(value)
// }


// --- 数组解构的原理其实也是调用迭代器的

// var [a,b,c] = [1,2,3]
 
// var x = [...xxxx]

// ---自己实现一个迭代器让对象支持for of

const obj1 = {
    max: 5,
    current: 0,
    [Symbol.iterator]() {
        return {
            max:this.max,
            current:this.current,
            next() {
                if (this.current === this.max) {
                    return {
                        value:undefined,
                        done: true
                    }
                } else {
                    return {
                        value:this.current++,
                        done:false
                    }
                }
            }
        }
    }
}
console.log({...obj1}); 
/**
 * {
    max: 5,
    current: 0,
    [Symbol(Symbol.iterator)]: [Function: [Symbol.iterator]]
  } 底层 ：
 *  */ 

console.log([...obj1]); // [ 0, 1, 2, 3, 4 ] 底层 调用 Symbol.iterator
// for (const val of obj1) {
//     console.log(val);
// }

// -- 注意   对象解构 和数组解构  底层是不一样的
// 数组的元素是按次序排列的，变量的取值由它的位置决定
// 对象的属性没有次序，变量必须与属性同名，才能取到正确的值


/**
 * 以下为这些symbols的列表：

Symbol.hasInstance
方法，会被instanceof运算符调用。构造器对象用来识别一个对象是否是其实例。

Symbol.isConcatSpreadable
布尔值，表示当在一个对象上调用Array.prototype.concat时，这个对象的数组元素是否可展开。

Symbol.iterator
方法，被for-of语句调用。返回对象的默认迭代器。

Symbol.match
方法，被String.prototype.match调用。正则表达式用来匹配字符串。

Symbol.replace
方法，被String.prototype.replace调用。正则表达式用来替换字符串中匹配的子串。

Symbol.search
方法，被String.prototype.search调用。正则表达式返回被匹配部分在字符串中的索引。

Symbol.species
函数值，为一个构造函数。用来创建派生对象。

Symbol.split
方法，被String.prototype.split调用。正则表达式来用分割字符串。

Symbol.toPrimitive
方法，被ToPrimitive抽象操作调用。把对象转换为相应的原始值。

Symbol.toStringTag
方法，被内置方法Object.prototype.toString调用。返回创建对象时默认的字符串描述。

Symbol.unscopables
对象，它自己拥有的属性会被with作用域排除在外。

 */