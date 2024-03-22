
>记录node学习

commonjs规范配置："type": "commonjs"
```json
{
  "type": "commonjs"
}

```

module规范配置："type": "module"
```json
{
  "type": "commonjs",
  
}
```

## commonjs 和 esm的区别
1. Cjs 是基于运行时的同步加载文件，「文件同步执行，假如加载过大，会阻塞执行」， esm是基于编译时的异步加载
2. Cjs 是可以修改值的，esm值并且不可修改（可读的）
3. Cjs 不可以tree shaking（运行时不知道依赖哪些，不能做tree）， esm 支持（编译时，执行前已经编译好，已经知道你要导入谁了）treeshaking
     假如必须动态导入是否可以？？
     可以的：用函数模式导入，返回promise
     ```js
      import('./xxxx').then((res) => {})
     ```
     传统的写法就是凡在代码开始位置
4. commonjs 中顶层的this指向 模块本身， 而esm 中顶层this指向undefined



## 操作DOM
npm i jsdom
 SSR-CSR_SEO文件
