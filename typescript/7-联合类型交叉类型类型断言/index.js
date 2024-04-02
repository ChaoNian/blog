// ----联合类型 类型 |  类型
function showUser(user) {
    console.log(user.name);
    console.log(user.age);
}
showUser({ name: 'Alice', age: 12 });
let errorType = '';
// showUser(errorType); //错误 showUser函数执行传递的参数是符合类型要求的。但是如果不符合要求的参数就会报错
// 在运行时如何保证和检测来自其他地方的数据也符合我们的要求呢？  这就类型断言要干的事
function isUser(arg) {
    if (!arg) {
        return false;
    }
    else {
        if (typeof arg.name == 'string' && typeof arg.age == 'number') {
            return true;
        }
        else {
            return false;
        }
    }
}
// 类型守卫函数与普通函数没多大区别，唯一需要注意其返回值类型比较特殊特殊，格式：x is y ,表示x是不是y类型
if (isUser(errorType)) {
    showUser(errorType); // 类型断言后就不会报错了
}
