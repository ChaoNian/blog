import express from 'express'
const app = express()

app.use('*', (req, res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*') // '*' | origin, * 允许所有网站访问
    // res.setHeader('Access-Control-Allow-Origin','http://localhost:5500') // 指定地址 允许localhost 5500 访问

    // Access-Control-Allow-Methods 默认只支持get post head
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,PATCH')

    // application/json 不属于cors 范畴需要手动支持
    res.setHeader('Access-Control-Allow-Headers','Content-Type')
    next()
})
/**
 * 预检请求 OPTIONS 请求 这个是浏览器发起
 * 满足条件
 *  自定义请求方法：当使用非简单请求方法（Simple Request Methods）时，例如 PUT、DELETE、CONNECT、OPTIONS、TRACE、PATCH 等，浏览器会发送预检请求。
 *  自定义请求头部字段：当请求包含自定义的头部字段时，浏览器会发送预检请求。自定义头部字段是指不属于简单请求头部字段列表的字段，例如 Content-Type 为 application/json、Authorization 等。
 *  带凭证的请求：当请求需要在跨域环境下发送和接收凭证（例如包含 cookies、HTTP 认证等凭证信息）时，浏览器会发送预检请求
 */

app.get('/info', (req, res) => {
    // 自定义响应头
    res.set('ABCDS', '1')
    res.setHeader('Access-Control-Expose-Headers', 'ABCDS')

    res.json({
        code: 200,
        type: 'get'
    })
})

/**
 * SSE技术:Server-Sent Events（SSE）是一种在客户端和服务器之间实现单向事件流的机制，
 * 允许服务器主动向客户端发送事件数据。在 SSE 中，可以使用自定义事件（Custom Events）来发送具有特定类型的事件数据。
 * webSocket属于全双工通讯，也就是前端可以给后端实时发送，后端也可以给前端实时发送，SSE属于单工通讯，后端可以给前端实时发送
 * 
 * 业务场景： 
 *    大屏的项目 后端需要实时返回， 前端不需要传什么东西 sse
 *    后端可以给前端实时返回 前端不能给后端实时操作
 *    这样称为单工通讯
 */
// express 增加该响应头text/event-stream就变成了sse event 事件名称 data 发送的数据
app.get('/sse', (req, res) => {
    // 自定义响应头
    res.setHeader('Content-Type', 'text/event-stream')
    res.status(200)

    setInterval(() => {
        res.write('event: test\n')
        res.write('data: ' + new Date().getTime() + '\n\n')
    }, 1000)
})


app.patch('/info', (req, res) => {
    res.json({
        code: 200,
        type: 'patch'
    })
})
app.listen(3000, () => {
    console.log('http://localhost:3000')
})

