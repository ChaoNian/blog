// 使用枚举 通过enum关键字定义我们的枚举

// 数字枚举
enum Types{
    Red,
    Green,
    BLue
 }
//  enum Types{
//     Red = 0,
//     Green = 1,
//     BLue = 2
//  }
 //默认就是从0开始的 可以不写值
//  增长枚举
//  enum Types{
//     Red = 1,
//     Green,
//     BLue
//  }

// 字符串枚举
// enum Types{
//     Red = 'red',
//     Green = 'green',
//     BLue = 'blue'
// } 

// 异构枚举
// enum Types{
//     No = "No",
//     Yes = 1,
//  }


// 接口枚举
// 声明对象的时候要遵循这个规则
enum Types {
    yyds,
    dddd
 }
 interface A {
    red:Types.yyds
 }

 let obj:A = {
    red:Types.yyds
 }

//  const枚举 
// let  和 var 都是不允许的声明只能使用const, const 声明的枚举会被编译成常量, 普通声明的枚举编译完后是个对象

// 反向映射 它包含了正向映射（ name -> value）和反向映射（ value -> name）
// 要注意的是 不会为字符串枚举成员生成反向映射。
enum Enum {
    fall
 }
 let a = Enum.fall;
 console.log(a); //0
 let nameOfA = Enum[a]; 
 console.log(nameOfA); //fall