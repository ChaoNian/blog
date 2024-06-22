var s = Symbol('ss')
var s1 = Symbol('ss22')
console.log(s, s1);

// 遍历属性名
var obj = {}
var a = Symbol('a')
var b = Symbol('b')

obj[a] = '232423'
obj[b] = 'sdsds'
var objSymbol = Object.getOwnPropertySymbols(obj)

console.log(objSymbol);