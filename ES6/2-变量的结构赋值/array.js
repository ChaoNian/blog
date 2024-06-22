// 数组 解构赋值本质上是  ‘模式匹配’
// let [a,b,c] = [1,2,3]
// console.log(a,b,c);

// let [foo, [bar], [baz]] = [1, [2], [4]]
// console.log(foo,bar,baz);



// let [a1, , ,] = ['2','3', '555']
// console.log(a1); // 2

// let [head, ...tail] = [1,2,3,4]
// console.log(head, tail); //1, [2, 3, 4]


// let [z, y, ...l] = [1]
// console.log(z, y, l); // 1 undefined []

// // Set 结构
// let [x,y1,z1] = new Set(['a', 'b', 'c'])
// console.log(x,y1,z1); // a b c

// function* fibs() {
//     let a = 0
//     let b = 1
//     while (true) {
//         yield a
//         [a, b] = [b, a + b]
//     }
// }
// let [a,b,c,d,e,f,g] = fibs()
// console.log(a,b,c,d,e,f,g); //  (2) [1, 1] (2) [1, 1] (2) [1, 1] (2) [1, 1] (2) [1, 1] (2) [1, 1]


// 默认值
// function f() {
//     console.log('1');
// }
// let [x = f()] = [1]
// console.log(x);

// 默认值可以引用解构赋值的其他变量。 但该变量必须已经声明

// let [x=1, y=x] = [] // x = 1, y =1
// let [x=1, y=x] = [2] // x = 2, y =2
// let [x=1, y=x] = [1,2] // x = 1, y =2
// let [x=y, y=1] = [] //  Invalid or unexpected token