**
## Express
Express是一个流行的Node.js Web应用程序框架，用于构建灵活且可扩展的Web应用程序和API。它是基于Node.js的HTTP模块而创建的，简化了处理HTTP请求、响应和中间件的过程。
**优势**
1. 简洁而灵活：Express提供了简单而直观的API，使得构建Web应用程序变得简单快捷。它提供了一组灵活的路由和中间件机制，使开发人员可以根据需求定制和组织应用程序的行为。
2. 路由和中间件：Express使用路由和中间件来处理HTTP请求和响应。开发人员可以定义路由规则，将特定的URL路径映射到相应的处理函数。同时，中间件允许开发人员在请求到达路由处理函数之前或之后执行逻辑，例如身份验证、日志记录和错误处理。
3. 路由模块化：Express支持将路由模块化，使得应用程序可以根据不同的功能或模块进行分组。这样可以提高代码的组织性和可维护性，使得多人协作开发更加便捷。
4. 视图引擎支持：Express可以与各种模板引擎集成，例如EJS、Pug（以前称为Jade）、Handlebars等。这使得开发人员可以方便地生成动态的HTML页面，并将数据动态渲染到模板中。
5. 中间件生态系统：Express有一个庞大的中间件生态系统，开发人员可以使用各种中间件来扩展和增强应用程序的功能，例如身份验证、会话管理、日志记录、静态文件服务等。


## 中间件
**中间件**函数是可以访问请求对象 ( req)、响应对象( res) 以及next应用程序请求-响应周期中的函数的函数。该next函数是 Express 路由器中的一个函数，当被调用时，它会执行当前中间件之后的中间件。

中间件功能可以执行以下任务：

- 执行任意代码。
- 更改请求和响应对象。
- 结束请求-响应周期。
- 调用堆栈中的下一个中间件。函数是可以访问请求对象 ( req)、响应对象( res) 以及next应用程序请求-响应周期中的函数的函数。该next函数是 Express 路由器中的一个函数，当被调用时，它会执行当前中间件之后的中间件。

### 可配置的中间件
如果您需要可配置的中间件，请导出一个接受选项对象或其他参数的函数，然后根据输入参数返回中间件实现
```js
module.exports = function (options) {
  return function (req, res, next) {
    // Implement the middleware function based on the options object
    next()
  }
}
```
使用中间件
```js
var mw = require('./my-middleware.js')

app.use(mw({ option1: '1', option2: '2' }))

```
## 使用中间件
### 是什么
Express 是一个路由和中间件 Web 框架，其自身功能最少：Express 应用程序本质上是一系列中间件函数调用。

中间件函数是可以访问请求对象 ( req)、响应对象( res) 以及应用程序请求-响应周期中的下一个中间件函数的函数。下一个中间件函数通常由名为 的变量表示next。

中间件功能可以执行以下任务：

- 执行任意代码。
- 更改请求和响应对象。
- 结束请求-响应周期。
- 调用堆栈中的下一个中间件函数。
如果当前的中间件函数没有结束请求-响应周期，则必须调用next()将控制权传递给下一个中间件函数。否则，请求将被挂起。


## 覆盖 Express API
Express API 由请求和响应对象的各种方法和属性组成。这些都是通过原型继承的。 Express API 有两个扩展点：

全局原型位于express.request和express.response。
特定于应用程序的原型位于app.request和app.response。
更改全局原型将影响同一进程中所有加载的 Express 应用程序。如果需要，可以通过在创建新应用程序后仅更改特定于应用程序的原型来进行特定于应用程序的更改。
### 方法
**


## 项目演练
安装的库
中间件库：pnpm install express
日志系统：pnpm install 

项目文件
  midleware： 中间件代码
  src： 路由模块化编写文件
  app.js: 主文件搜