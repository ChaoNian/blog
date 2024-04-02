/**
 * 对象的类型
 * 在typescript中，我们定义对象的方式要用关键字interface（接口），
 * 可以理解是使用interface来定义一种约束，让数据的结构满足约束的格式
 *
 * 必须与接口保持一致
 * 重名interface  可以合并
 * 继承
 * 可选属性 使用?操作符
 * 任意属性 [propName: string] 需要注意的是，一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
 * 只读属性 readonly readonly 只读属性是不允许被赋值的只能读取
 * 添加函数
 */
const person = {
    a: "213",
    c: "123",
    cb: () => {
        console.log(123);
    }
};
