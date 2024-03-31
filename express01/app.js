import express from 'express'
// expreee 是一个函数
const app = express()
// app.use(express.json()) // 支持post 解析json

// /**
//  * get
//  * 参数1: api 的地址
//  * 参数2: 回调函数 req 请求， 接受客户段参数， res 响应，返回客户端
//  */
// app.get('/get', (req, res) => {
//     console.log(req.query);
//     res.send('get')
// })

// /**
//  * 动态请求参数
//  */
// app.get('/get/:id', (req, res) => {
//     console.log(req.params);
//     res.send('get 动态参数')
// })

// /**
//  * post
//  */
// app.post('/post', (req, res) => {
//     console.log(req.body);
//   res.send('post')
// })


// 将以上路由写法   模块化拆分
import User from './src/user.js'
import List from './src/list.js'
import LoggerMiddleware from './middlware/logger.js'


// 注册
app.use('/user', User)
app.use('/list', List)
app.use(LoggerMiddleware)


app.listen(3000, () => {
    console.log('http://localhost:3000');
})