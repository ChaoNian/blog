// 处理 stream
// stream 模式 读写数据， 可以处理大规模数据
const co = require('co')
const fs = require('fs')

const stream = fs.createReadStream('./read.txt')
let valjeanCount = 0

co(function* () {
    while(true) {
        const res = yield Promise.race([
            new Promise(resolve => stream.once('data', resolve)), // 下一块数据块已准备好
            new Promise(resolve => stream.once('end', resolve)), // 整个数据流 处理完成
            new Promise((resolve, reject) => stream.once('error', reject)) // 发生错误
        ])
        if (!res) {
            break
        }

        stream.removeAllListeners('data')
        stream.removeAllListeners('end')
        stream.removeAllListeners('error')
        console.log(res);
        // 统计valjean词出现的次数
        valjeanCount += (res.toString().match(/valjean/ig) || []).length; 
    }
    console.log('count:', valjeanCount); // 
})