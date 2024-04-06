/**
 * set:新的数据结构 Set 集合是由一组无序且唯一(即不能重复)的项组成的，可以想象成集合是一个既没有重复元素，也没有顺序概念的数组
   属性
    size：返回字典所包含的元素个数
 
   操作方法
    

    size: 返回set数据结构的数据长度

    Set 实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）。
    下面先介绍四个操作方法

    delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。

    has(value)：返回一个布尔值，表示该值是否为 Set 的成员。

    clear()：清除所有成员，无返回值。

    add(value)：添加某个值，返回 Set 结构本身。


 */
    // Array.from()方法可以将 Set 结构转为数组。

// const items = new Set([1, 2, 3, 4, 5]);
// const array = Array.from(items);
// --- 去除数组重复成员的另一种方法
// function dedupe(array) {
//     return Array.from(new Set(array));
//   }
  
// dedupe([1, 1, 2, 3]) // [1, 2, 3]


// ----如果想在遍历操作中，同步改变原来的 Set 结构
// 1 利用原 Set 结构映射出一个新的结构 然后赋值给原来的 Set 结构, 直接在遍历操作中改变原来的 Set 结构
    // let set = new Set([1,2,3,4])
    //  set = new Set([...set].map(val => val*2))

// 2 利用Array.from方法 直接在遍历操作中改变原来的 Set 结构。
// let set = new Set([1,2,3,4])
// set = new Set(Array.from(set, val =>val*2))

/**
 * Set 结构的实例有四个遍历方法，可以用于遍历成员
 *  Set.prototype.keys()：返回键名的遍历器
    Set.prototype.values()：返回键值的遍历器
    Set.prototype.entries()：返回键值对的遍历器
    Set.prototype.forEach()：使用回调函数遍历每个成员
    注意： Set的遍历顺序就是插入顺序
    这个特性有时非常有用，比如使用 Set 保存一个回调函数列表，调用时就能保证按照添加顺序调用。

    （1）keys()，values()，entries()
    keys方法、values方法、entries方法返回的都是遍历器对象
    由于 Set 结构没有键名，只有键值（或者说键名和键值是同一个值），所以keys方法和values方法的行为完全一致。
 */


/**
 * ---WeakSet 
 * WeakSet 结构与 Set 类似，也是不重复的值的集合。但是，它与 Set 有两个区别。
 * qubie
 * 首先，WeakSet 的成员只能是对象和 Symbol 值，而不能是其他类型的值
 */
// 
// const ws = new WeakSet();
// ws.add(1) // 报错
// ws.add(Symbol()) // 不报错

// 其次，WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中




/**
 * 2.Map
 * 它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，
 * 各种类型的值（包括对象）都可以当作键，是一种更完善的 Hash 结构实现。
 * 如果你需要“键值对”的数据结构，Map 比 Object 更合适
 */

let o = {name:'ces'}

let map1:Map<object, Function> = new Map()

map1.set(o, () => 1232)
console.log(map1.get(o));

// map.has(o)
// map.delete(o)


/**
 * 3.WeakSet 和 WeakMap
   Weak 在英语的意思就是弱的意思，weakSet 和 weakMap 的键都是弱引用，不会被计入垃圾回收
 */

   const o1:any = {name:'232'}
