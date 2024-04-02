/**
 * JavaScript 中有很多内置对象，它们可以直接在 TypeScript 中当做定义好了的类型。
    ECMAScript 的内置对象
    Boolean、Number、string、RegExp、Date、Error
 */

// let b: Boolean = new Boolean(1)
// console.log(b)
// let n: Number = new Number(true)
// console.log(n)
// let s: String = new String('哔哩哔哩=--')
// console.log(s)
// let d: Date = new Date()
// console.log(d)
// let r: RegExp = /^1/
// console.log(r)
// let e: Error = new Error("error!")
// console.log(e)


/**
 * DOM 和 BOM 的内置对象
Document、HTMLElement、Event、NodeList 等
 */

// let body:HTMLElement = document.body
// let allDiv: NodeList = document.querySelectorAll('div');
// //读取div 这种需要类型断言 或者加个判断应为读不到返回null
// let div:HTMLElement = document.querySelector('div') as HTMLDivElement
// document.addEventListener('click', function (e: MouseEvent) {
    
// });


// ----定义Promise
// 如果我们不指定返回的类型TS是推断不出来返回的是什么类型
// 指定返回的类型
// function promise():Promise<number> {
//     return new Promise((resolve, reject) => {
//         resolve(1)
//     })
// }
// promise().then(res => {
//     console.log(res);
    
// })

let canvas = document.querySelector('#canvas') as HTMLCanvasElement
let ctx = canvas.getContext('2d') as CanvasRenderingContext2D

canvas.height = screen.availHeight; //可视区域的高度
canvas.width = screen.availWidth; //可视区域的宽度

let str: string[] = 'XMZSWSSBXMZSWSSBXMZSWSSBXMZSWSSBXMZSWSSB'.split('')
let Arr = Array(Math.ceil(canvas.width / 10)).fill(0) //获取宽度例如1920 / 10 192
console.log(Arr);


const rain = () => {
    ctx.fillStyle = 'rgba(0,0,0,0.05)'//填充背景颜色
    ctx.fillRect(0, 0, canvas.width, canvas.height)//背景
    ctx.fillStyle = "#0f0"; //文字颜色
    Arr.forEach((item, index) => {
        ctx.fillText(str[ Math.floor(Math.random() * str.length) ], index * 10, item + 10)
        Arr[index] = item >= canvas.height || item > 10000 *  Math.random() ? 0 : item + 10; //添加随机数让字符随机出现不至于那么平整
    })
    console.log(Arr);
    
}

setInterval(rain, 40)