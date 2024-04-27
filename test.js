//  function bar() {
//     console.log(n)
//  }
//  function foo() {
//     var n = 'foo'
//     bar()
//  }

//  var n = 'kk'
//  foo()
/**
 * 执行流程
 * 编译：执行上下文    可执行代码
 *   变量提升
 * 执行： 执行代码
 * 
 * 作用域链 <--- 词法作用域决定<---代码声明位置决定
 * 词法作用域 是代码编译阶段决定， 和函数没有关系
 */

// var bar = {
//     myName:"time.geekbang.com",
//     printName: function () {
//         console.log(myName)
//     }    
// }
// function foo() {
//     let myName = "极客时间"
//     return bar.printName
// }
// let myName = "极客邦"
// let _printName = foo()
// _printName()
// bar.printName()

// var o = {
//     name: '232',
//     show: function() {
//         console.log(this);
//     }
// }
// // o.show()
// o.show.call(o)

// var myObj = {
//     name : "极客时间",
//     showThis: function(){
//       this.name = "极客邦"
//       console.log(this)
//     }
//   }
//   var foo = myObj.showThis
//   foo()


// 生成器
// function* genDemo() {
//     console.log('1--');
//     yield 'denerator 2'

//     console.log('2---')
//     yield 'generator 2'

//     console.log('3---')
//     yield 'generator 2'


//     console.log('3---');
//     return 'generator 2'
// }

// console.log('main 0');

// let gen = genDemo()
// console.log(gen, 'gen');
// console.log(gen.next().value);

// console.log('main 1');
// console.log(gen.next().value);

// console.log('main 2');
// console.log(gen.next().value);

// console.log('main 3');
// console.log(gen.next().value);

// console.log('main 4');
// console.log(gen.next().value);

// console.log('main 5');
// console.log(gen.next().value);
// console.log('6666---');


// function loadImageAsync(url) {
//     return new Promise(function(resolve, reject){
//         const image = new Image()
//         image.onload = function() {
//             resolve(image)
//         }
//         image.onerror = function() {
//             reject(new Error('Could not load image ar'+ url))
//         }
//         image.src = url

//     })
// }