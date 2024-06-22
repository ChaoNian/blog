// 异步加载图片
// function loadImageAsync () {
//     return new Promise(function(resolve,reject) {
//         var image = new Image()
//         image.onload = function() {
//             resolve(image)
//         }

//         image.onerror = function () {
//             reject(new Error('error'))
//         }
//         image.src = url
//     })
// }

// AJAX 操作封装
// var getJSON = function (url) {
//     var promise = new Promise(function(resolve, reject) {
//         var client = new XMLHttpRequest()
//         client.open('GET', url)
//         client.onreadystatechange = handler
//         client.responseType = 'json'
//         client.setRequestHeader('Accept', 'application/json')
//         client.send()


//         function handler() {
//             if (this.readyState !== 4) {
//                 return
//             }

//             if (this.status === 200) {
//                 resolve(this.response)
//             } else {
//                 reject(new Error(this.statusText))
//             }
//         }
//     })
//     return promise
// }
// getJSON('/posts.json').then(function(json) {
//     console.log('Contents:' + json);
// }, function(error) {
//     console.error('出错了', error)
// })



// const f = () => console.log('now') // 在末尾同步执行
// Promise.resolve().then(f)
// console.log('next');
// next
// now

// 同步函数同步执行，异步函数异步执行
// const f1 = () => console.log('now');
// (async () => f1()) ()
// console.log('next');
// now
// next

// const p = Promise.race([
//     fetch('/posts/json'),
//     new Promise(function(resolve, reject){
//         setTimeout(() => reject(new Error('reggg tomeout')), 5000)
//     })
// ])
// p.then(response => console.log(response))
// p.catch(error => console.log(error, '------'))