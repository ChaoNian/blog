// object、Object 以及{} 这三个类型大家可能不太理解
/**
 * Object类型是所有Object类的实例的类型。 由以下两个接口来定义：

Object 接口定义了 Object.prototype 原型对象上的属性；
ObjectConstructor 接口定义了 Object 类的属性， 如上面提到的 Object.create()。
这个类型是跟原型链有关的原型链顶层就是Object，所以值类型和引用类型最终都指向Object，所以他包含所有类型。

 */
/**
 * object
object 代表所有非值类型的类型，例如 数组 对象 函数等，常用于泛型约束
 */
// let o:object = {}//正确
// let o1:object = []//正确
// let o2:object = ()=>123 //正确
// let b:object = '123' //错误
// let c:object = 123 //错误
/**
 * {}
看起来很别扭的一个东西 你可以把他理解成new Object 就和我们的第一个Object基本一样 包含所有类型

tips 字面量模式是不能修改值的
 */
// let a1:{} = {name:1} // ok
// let a2: {} = () => 123// ok
// let a3: {} = 23// ok
// a3 = '232' // ok
