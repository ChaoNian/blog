/**
 * node 提供的模块
 * zlib 模块提供了对数据压缩和解压缩的功能，
 * 以便在应用程序中减少数据的传输大小和提高性能。
 * 该模块支持多种压缩算法，包括 Deflate、Gzip 和 Raw Deflate。

zlib 模块的主要作用如下：

 1、数据压缩：使用 zlib 模块可以将数据以无损压缩算法（如 Deflate、Gzip）进行压缩，减少数据的大小。这在网络传输和磁盘存储中特别有用，可以节省带宽和存储空间。
 2、数据解压缩：zlib 模块还提供了对压缩数据的解压缩功能，可以还原压缩前的原始数据。
 3、流压缩：zlib 模块支持使用流（Stream）的方式进行数据的压缩和解压缩。这种方式使得可以对大型文件或网络数据流进行逐步处理，而不需要将整个数据加载到内存中。
 4、压缩格式支持：zlib 模块支持多种常见的压缩格式，如 Gzip 和 Deflate。这些格式在各种应用场景中广泛使用，例如 HTTP 响应的内容编码、文件压缩和解压缩等。

 */

 const zlib = require('node:zlib')
 const fs = require('node:fs')
const path = require('node:path')
// 获取当前文件夹目录
//  console.log(path.resolve());
// console.log(process.cwd());
// console.log(path.join(__dirname, '..')); // 获取上一级目录
// console.log(path.join(__dirname, 'index.js')); // 结合__dirname获取同一目录下的其他文件
// console.log(__dirname); //  获取当前脚本所在目录的完整路径 /Users/huangxiaohao/前端开发/blog/node/压缩
// console.log(__filename); // 获取当前执行脚本的完整路径 /Users/huangxiaohao/前端开发/blog/node/压缩/index.js


/**-----gzip----- */

// 压缩 createGzip
// //  创建可读流
// const readStream = fs.createReadStream(`${__dirname}/index.txt`)

// // 创建可写流
// const writeStream = fs.createWriteStream((`${__dirname}/index.txt.gz`)) // 后缀是.gz

// // 通过管道链接 可读流 可写流 
// // 理解 readStream文件  通过管道 流向 writeStream文件， 管道中间做了处理（使用zlib.createGzip() 进行加密）
// readStream.pipe(zlib.createGzip()).pipe(writeStream)

// 解压createGunzip
//  创建可读流
// const readStream = fs.createReadStream(`${__dirname}/index.txt.gz`)

// // 创建可写流
// const writeStream = fs.createWriteStream((`${__dirname}/index2.txt`))
// readStream.pipe(zlib.createGunzip()).pipe(writeStream)


/** ---deflate----*/

// 压缩 createDeflate
//  创建可读流
// const readStream = fs.createReadStream(`${__dirname}/index.txt`)

// // 创建可写流
// const writeStream = fs.createWriteStream((`${__dirname}/index.txt.deflate`)) // 后缀是.deflate

// // 通过管道链接 可读流 可写流 
// // 理解 readStream文件  通过管道 流向 writeStream文件， 管道中间做了处理（使用zlib.createDeflate() 进行加密）
// readStream.pipe(zlib.createDeflate()).pipe(writeStream)


// 解压createInflate
//  创建可读流
const readStream = fs.createReadStream(`${__dirname}/index.txt.deflate`)

// 创建可写流
const writeStream = fs.createWriteStream((`${__dirname}/index-deflate.txt`))
readStream.pipe(zlib.createInflate()).pipe(writeStream)




/**
 * gzip 和 deflate 区别

    压缩算法：Gzip 使用的是 Deflate 压缩算法，该算法结合了 LZ77 算法和哈夫曼编码。LZ77 算法用于数据的重复字符串的替换和引用，而哈夫曼编码用于进一步压缩数据。
    压缩效率：Gzip 压缩通常具有更高的压缩率，因为它使用了哈夫曼编码来进一步压缩数据。哈夫曼编码根据字符的出现频率，将较常见的字符用较短的编码表示，从而减小数据的大小。
    压缩速度：相比于仅使用 Deflate 的方式，Gzip 压缩需要更多的计算和处理时间，因为它还要进行哈夫曼编码的步骤。因此，在压缩速度方面，Deflate 可能比 Gzip 更快。
    应用场景：Gzip 压缩常用于文件压缩、Deflate：网络传输和 HTTP 响应的内容编码。它广泛应用于 Web 服务器和浏览器之间的数据传输，以减小文件大小和提高网络传输效率。

 */
