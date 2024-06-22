// 勉强可以获取顶层对象的方式
(typeof window !== 'undefined' ? window 
: (typeof process === 'object' &&
    typeof require === 'function' &&
    typeof global === 'object')
    ?
    global : this
)

// 方式2
let getGlobal = function () {
    if (typeof self !== 'undefined') {
        return self // 浏览器和web worker
    }
    if (typeof window !== 'undefined') {
        return window
    }
    if (typeof global !== 'undefined') {
        return global // node
    }
   throw new Error('unable to locate global object')
}