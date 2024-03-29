
const zlib = require('node:zlib')
const http = require('node:http')


const serveer = http.createServer((req,res) => {
    const txt = '测试代码'.repeat(1000)
  res.setHeader('Content-Encoding', 'deflate')
  res.setHeader('Content-type', 'text/plan;charset=utf-8')

   // 压缩 zgip
//    const result = zlib.gzipSync(txt) // 适合压缩文件

   // 压缩 deflate
   const result = zlib.deflateSync(txt) // 254B 适合 网络传输和 HTTP 响应的内容编码

//   res.end(txt) // 压缩前 12.8KB
   res.end(result) // 压缩后263B
})

serveer.listen(3000, () => {
     // 端口号  小于 65535
     console.log('服务器启动成功');
})