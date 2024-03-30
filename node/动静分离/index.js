import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import mime from "mime";

const server = http.createServer((req, res) => {
    const { method, url } = req
    //  获取静态资源  一定的通过 GET 方法请求
    if (method === 'GET' && url.startsWith('/static')) {
        // 获取文件路径 根目录拼接url
        const staticPath = path.join(process.cwd(), url)
        // 获取文件mime类型, 原理通过文件后缀名 分析出对应的mime类型
        const mimeType = mime.getType(staticPath)



        // 读取文件内容
        fs.readFile(staticPath, (err, data) => {
            if (err) {
                res.writeHead(404, {
                    "Content-Type": "text/plan" // 设置响应头为纯文吧类型
                })
                res.end('not found')
            } else {
                // console.log('来了老弟');
                res.writeHead(200, {
                    "Content-Type": mimeType, // 设置响应头为纯文本类型
                    "Cache-Control": "public, max-age=3600" // 设置缓存控制头 缓存1 小时， max-age=3600  测试好像不起效
                })

                // res.setHeader('Content-Type', mimeType);
                // res.setHeader('Cache-Control', 'public, max-age=3600');
                // res.statusCode = 200

                res.end(data) // 返回文件内容
            }
        })
    }

    // 处理动态资源
    if ((method === 'GET' || method === 'POST') && url.startsWith('/api')) {
        // ...处理动态资源的逻辑
    }
})


// 动态资源

server.listen(80, () => {
    console.log('server running');
})