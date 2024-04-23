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


