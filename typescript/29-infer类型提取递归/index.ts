/**
 * infer 类型提取的 场景
 */

// ----- 1.提取头部元素
// type Arr = ['a', 'b', 'c']
// // 类型参数 T 通过extends 约束 只能是数组类型，然后通过infer 声明局部 First 变量做提取，后面的元素可以是任意类型，然后把局部变量返回
// type First<T extends any[]> = T extends [infer First, ...any[]] ? First : []
// 写法2 
// type First<T extends any[]> = T extends [infer First, infer Two, infer three] ? First : []
// type a = First<Arr> // 返回 type a = "a"

// 写法2 
// type First<T extends any[]> = T extends [infer First, infer Two, infer three] ? Two : []
// type a = First<Arr> // 返回 type a = "b"



// ----2.提取尾部元素
// type Arr = ['a', 'b', 'c']
// type Last<T extends any[]> = T extends [...any[], infer Last, ] ? Last : []
// type a = Last<Arr> // 返回 type a = "c"


// ----3. 剔除第一个元素 Shift
// type Arr = ['a', 'b', 'c']
// type First<T extends any[]> = T extends [unknown, ...infer Rest] ? Rest : []
// type a = First<Arr> // type a = ["b", "c"]


// ----3. 剔除尾部元素 pop
// type Arr = ['a', 'b', 'c'] 
// type First<T extends any[]> = T extends [...infer Rest, unknown] ? Rest : []
// type a = First<Arr> // type a = ["a", "b"]

// ----递归----
// 场景 将数组元素反转
type Arr = [1,2,3,4]
type ReverArr<T extends any[]> = T extends [infer First, ...infer Rest] ? [...ReverArr<Rest>, First] : T

type a = ReverArr<Arr>
// type Arrb = [4,3,2,1]