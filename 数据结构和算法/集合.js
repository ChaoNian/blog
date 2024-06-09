// 封装集合类
function Set() {
    // 属性
    this.items = {}

    // 方法
    // add 方法
    Set.prototype.add =function(value) {
        // 判断当前集合是否已经包含了该元素
        if(this.has(value)) {
            return false
        }

        // 将元素添加到集合中
        this.items[value] = value
        return true
    }
    // has 方法
    Set.prototype.has =function(value) {
        return this.items.hasOwnProperty(value)
    }

    // remove 方法
    Set.prototype.remove =function(value) {
        // 1.判断该集合是否包含该元素
        if (!this.has(value)) {
            return false
        }

        // 2.将元素从属性中删除
        delete this.items[value]
        return true
    }

    // clear 方法
    Set.prototype.clear =function() {
        this.items = {}
    }

    // size 方法
    Set.prototype.size =function() {
       return Object.keys(this.items).length
    }

    // 获取所哟的值 方法
    Set.prototype.values =function() {
        return Object.keys(this.items)
     }


    //  集合间操作
    //  并集
    Set.prototype.union = function(otherSet) {
        // this 集合对象A
        // otherSet； 集合对象B

        // 1. 创建新的集合
        let unionSet = new Set()

        // 2.将A集合中所有元素添加到新集合中
        let values = this.values()
        for (let i = 0; i < values.length; i++) {
          unionSet.add(values[i])
        }

        // 3.取出B集合中元素，判断是否需要驾到新集合
        values = otherSet.values()
        for (let i = 0; i < values.length; i++) {
          unionSet.add(values[i])
        }

        // 返回新集合
        return unionSet

    }

    // 交集
    Set.prototype.intersection = function(otherSet) {
        // this:集合A
        // others: 集合B
        // 1.创建新的集合
        let intersectionSet = new Set()

        // 2.从A中取出一个个元素，判断是否同时存在于集合B中，存在， 放入新集合
        let values = this.values()
        for (let i = 0; i < values.length; i++) {
            let item = values[i]
            if (otherSet.has(item)) {
                intersectionSet.add(item)
            }
        }

        // 3. 返回新集合
        return intersectionSet
    }

    // 差集
    Set.prototype.difference = function(otherSet) {
         // this:集合A
        // others: 集合B
        // 1.创建新的集合
        let intersectionSet = new Set()

        // 2.从A中取出一个个元素，判断是否同时存在于集合B中，不存在， 放入新集合
        let values = this.values()
        for (let i = 0; i < values.length; i++) {
            let item = values[i]
            if (!otherSet.has(item)) {
                intersectionSet.add(item)
            }
        }

        // 3. 返回新集合
        return intersectionSet
    }

    // 子集
    Set.prototype.subset = function(otherSet) {
       // this:集合A
       // others: 集合B
       // 遍历集合A中所有的元素，如果发现，集合A中的元素，在集合B中不存在，那么false
       // 如果遍历完了整个集合，依然没有返回false,那么返回true 

       let values = this.values()
       for (let i = 0; i < values.length; i++) {
           let item = values[i]
           if (!otherSet.has(item)) {
               return false
           }
       }
       return true
   }
}

// 测试
// let set = new Set()

// set.add('11')
// set.add('23')
// set.add('5654')
// console.log(set.values());


let setA = new Set()
setA.add('AA')
setA.add('BB')
setA.add('CC')
setA.add('CwdC')
let setB = new Set()
setB.add('AA')
setB.add('BB')
setB.add('CC')
// 并集
let unionSet = setA.union(setB)
console.log(unionSet.values()); //  ['AA', 'BB', 'CC', 'CwdC', 'er']


// 交集
let intersectionSet = setA.intersection(setB)
console.log(intersectionSet.values()); // [AA,BB,CC]


// 差集
let difference = setA.difference(setB)
console.log(difference.values()); // [CwdC]

// 子集
let isSubset = setB.subset(setA)
console.log(isSubset); // true
let isSubsetNO = setA.subset(setB)
console.log(isSubsetNO); // false


// 子集
