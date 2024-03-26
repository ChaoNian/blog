//  实用工具
const util = require('node:util')
const {exec} = require('node:child_process')
const { resolve } = require('node:path')
const { rejects } = require('node:assert')

// const execPromise = util.promisify(exec) // f返回一个新的函数

// 最佳实践写法
// execPromise('node -v').then(res => {
//     console.log(res); // { stdout: 'v18.17.1\n', stderr: '' }
// }).catch(err => {
//     console.log(err);
// } )


// 自己实现一个promisify   底层原理类似如此
const promisify = (fn) => {
    // 参数有可能有多个
    return (...args) => {
        return new Promise((resolve, rejects) => {
            // 将参数args透传回去
             fn(...args, (err, ...values) => {
                if (err) {
                    rejects(err)
                }
                if (values && values.length > 1) {
                    let obj = {}
                    for (let key in values) {
                        obj[key] = values[key]
                    }
                    resolve(obj)
                } else {
                    resolve(values[0])
                }
             }) 
        })
    }
}
const execPromise = promisify(exec) // f返回一个新的函数

// 最佳实践写法
execPromise('node -v').then(res => {
    console.log(res); //{ '0': 'v18.17.1\n', '1': '' }
}).catch(err => {
    console.log(err);
} )