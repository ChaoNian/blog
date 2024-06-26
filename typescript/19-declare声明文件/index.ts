// 当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能
/**
 *  declare var 声明全局变量
    declare function 声明全局方法
    declare class 声明全局类
    declare enum 声明全局枚举类型
    declare namespace 声明（含有子属性的）全局对象
    interface 和 type 声明全局类型
    /// <reference /> 三斜线指令
 */


    /**
     * 如果有一些第三方包确实没有声明文件我们可以自己去定义
       名称.d.ts 创建一个文件去声明
     */