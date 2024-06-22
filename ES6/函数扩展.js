//  管道机制：即前一个函数的输出是后一个函数的输入
const pipeline = (...funcs) => val => funcs.reduce((a,b) =>b(a), val)

const plus1 = a => a + 1
const mult2 = a => a * 2

const addThenMult = pipeline(plus1, mult2)

addThenMult(5) // 12

// 
mult2(plus1(5))


// 尾递归
// 阶乘
// function tailFactoroal(n, total){
//     if (n === 1) {
//         return total
//     }
//     return tailFactoroal(n - 1, n * total) // 最后一步调用
// }

// function factorital(n) {
//     return tailFactoroal(n ,1)
// }
// factorital(5)


// // 斐波那列
// function Fibonacci(n) {
//     if(n <= 1) {return 1}
//     return Fibonacci(n - 1) + Fibonacci(n - 2)
// }
// // 改进
// function Fibonacci(n, ac1 = 1, ac2 = 1) {
//     if(n <= 1) {return ac2}
//     return Fibonacci(n - 1, ac2, ac1 + ac2)
// }

// 柯里化 将多参数 变成单个参数
// 写法1
// function currying(fn, n) {
//     return function(m) {
//         return fn.call(this, m, n)
//     }
// }
// function tailFactorial(n, total) {
//     if (n === 1) return total
//     return tailFactorial(n - 1, n * total )
// }

// const factorial = currying(tailFactorial, 1)

// factorial(5)

// 写法2 ES6 的函数默认值
// function factorial(n, total = 1) {
//     if (n === 1) return total
//     return factorial(n - 1, n * total)
// }

// factorial(5)



// 尾递归优化的实现 自己实现一个尾递归优化 循环 代替递归-------

// 蹦床函数
function trampoline(f) {
    while (f && f instanceof Function) {
        f = f()
    }
    return f
}
function sum(x, y) {
    if (y > 0) {
        return sum.call(null, x + 1, y - 1)
    } else {
        return x
    }
}
trampoline(sum(1, 1000))

// 真正的尾递归优化实现

 