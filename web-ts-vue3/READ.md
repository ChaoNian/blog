项目文件
src
-- main.ts
-- App.vue
--shim.d.ts
webpack.config.js
index.html
package.json
tsconfig.json

## 基础构建

```sh
npm install webpack -D
npm install webpack-dev-server -D
npm install webpack-cli -D
```

支持TypeScript 
```sh
npm install ts-loader -D
npm install typescript -D
```
```js
module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader' //支持解析ts文件
            }
        ]
    }

```

支持vue
```sh
npm install html-webpack-plugin -D
npm install vue-loader@latest -D
```
```js
```

支持css + less
```sh
npm install css-loader style-loader less less-loader -D
```


代码分包
性能优化 默认把所有代码打包到一个js文件体积太大了我们可以进行代码分包减少体积


单独提取css
目前是通过js动态插入style标签的方式进行的，但是我们希望通过link标签引入


