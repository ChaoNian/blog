/**
 * 
 * "http" 模块是 Node.js 中用于创建和处理 HTTP 服务器和客户端的核心模块。基于这个OSI 7层参考模型
 * 它使得构建基于 HTTP 协议的应用程序变得更加简单和灵活。

1. 创建 Web 服务器：你可以使用 "http" 模块创建一个 HTTP 服务器，用于提供 Web 应用程序或网站。通过监听特定的端口，服务器可以接收客户端的请求，并生成响应。
   你可以处理不同的路由、请求方法和参数，实现自定义的业务逻辑。
2. 构建 RESTful API："http" 模块使得构建 RESTful API 变得简单。
    你可以使用 HTTP 请求方法（如 GET、POST、PUT、DELETE 等）和路径来定义 API 的不同端点。通过解析请求参数、验证身份和权限，以及生成相应的 JSON 或其他数据格式，你可以构建强大的 API 服务。
3. 代理服务器："http" 模块还可以用于创建代理服务器，用于转发客户端的请求到其他服务器。代理服务器可以用于负载均衡、缓存、安全过滤或跨域请求等场景。通过在代理服务器上添加逻辑，你可以对请求和响应进行修改、记录或过滤。vite-cli
4. 文件服务器："http" 模块可以用于创建一个简单的文件服务器，（动静分离）用于提供静态文件（如 HTML、CSS、JavaScript、图像等）。通过读取文件并将其作为响应发送给客户端，你可以轻松地构建一个基本的文件服务器。


 vscode插件 REST Client
   用法：新建xxx.http  文件 里面写
   # POST http://localhost:98/post/xxx HTTP/1.1

    # Content-Type: application/json

    # {
    #     "name":"小满zs"
    # }


    GET http://localhost:98/get?a=1&b=2 HTTP/1.1
    安装完成之后编写简易的代码就可以直接发送请求了
 */

const http =require('node:http')
const url = require('node:url') // 处理参数

http.createServer((req,res) => {

    // 获取参数 url.parse(req.url, true)  true 参数是的字符串变成对象
    const {pathname, query} = url.parse(req.url, true)
    // console.log(pathname, req.url); ///post/login /post/login
    if (req.method ==='POST') {
        if (pathname === '/login') {
            let data = ''
            // 获取参数
            req.on('data', (chunk) => {
                // console.log(chunk, 'chunk'); // Buffer 数据
                data += chunk
            })
            req.on('end', () => {
                res.setHeader('Content-Type', 'application/json'); // 设置响应头的 Content-Type 为 'application/json'
                res.statusCode = 200; // 设置响应状态码为 200
                res.end(data); // 将获取到的数据作为响应体返回
            })
        } else {
            res.setHeader('Content-Type', 'application/json'); // 设置响应头的 Content-Type 为 'application/json'
            res.statusCode = 404
            res.end('404')
        }
    } else if (req.method === 'GET') {// 检查请求方法是否为 GET
        if (pathname === '/get') {  // 检查路径是否为 '/get'
            console.log(query.a)
            // console.log(query.split('&'));// 没有加true 时 时字符串， 打印查询参数中的键名为 'a' 的值
            res.end('get success')// 返回 'get success' 作为响应体
        }
    }

}).listen(98, () => {
    console.log('服务器启动成功');
})