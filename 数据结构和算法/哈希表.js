// 设计哈希函数
/**
 * 1）将字符串转换成比较大的数字：hashCode
 * 2）将大的数字hashCode 压缩到数组范围（大小）之内
 */

function hashFunc(str, size) {
    // 1.定义hashCode变量
    let hashCode = 0

    // 2.霍纳算法，来计算hashCode 的值
    for (let i = 0; i < str.length; i++) {
        hashCode = 37 * hashCode + str.charCodeAt(i)
    }

    // 3. 取余操作(压缩)
    let index = hashCode % size

    return index
}

// console.log(hashFunc('abc', 7), '---');
// console.log(hashFunc('cba', 7), '---');
// console.log(hashFunc('nba', 7), '---');
// console.log(hashFunc('mba', 7), '---');
// console.log(hashFunc('qwvcq', 7), '---');
// console.log(hashFunc('qwvcwq', 7), '---');
// 这里有个疑问： 生成重复的下标

// 封装哈希表类
function HahsTable() {
    // 属性
    this.storage = [] // 存储桶的数组
    this.count = 0
    this.limit = 7 // 长度

    // 方法
    // 哈希函数
    HahsTable.prototype.hashFunc = function (str, size) {
        // 1.定义hashCode变量
        let hashCode = 0
    
        // 2.霍纳算法，来计算hashCode 的值
        for (let i = 0; i < str.length; i++) {
            hashCode = 37 * hashCode + str.charCodeAt(i)
        }
    
        // 3. 取余操作(压缩)
        let index = hashCode % size
    
        return index
    }
    // 插入或修改操作
    HahsTable.prototype.put = function(key, value) {
        // 1.根据key 获取对应的index
        let index = this.hashFunc(key, this.limit)

        // 2.根据index取出对应的bucket(桶)
        let bucket = this.storage[index]

        // 3. 判断该bucket 是否为null
        if (bucket == null) {
            bucket = []
            this.storage[index] = bucket
        }

        // 4.判断是否时修改数据
        for (let i = 0; i < bucket.length; i++) {
            let tuple = bucket[i]
            if (tuple[0] === key) { // 已存在
                tuple[1] = value
                return
            }
            
        }

        // 5.进行添加操作
        bucket.push([key, value])
        this.count += 1

        // 6. 判断是否需要扩容
        if (this.count > this.limit * 0.75) {
            let newSize = this.limit * 2
            let newPrime = this.getPrime(newSize) // 获取的一定是质数， 这样就可以保证limit 是质数
            this.resize(newPrime)
        }
    }

    // 获取操作
    HahsTable.prototype.get = function(key) {
        // 1. 根据key获取对应的 index
        let index = this.hashFunc(key, this.limit)

        // 2. 根据index 获取对应的bucket
        let bucket = this.storage[index]

        // 3.判断bucket 是否 为 null
        if (bucket == null) {
            return null
        }

        // 4.有bucket 那么就进行线性查找
        for (let i = 0; i < bucket.length; i++) {
           let tuple = bucket[i]
           if (tuple[0] == key) {
            return tuple[1]
           }
            
        }

        // 5. 依然没有找到，那么 返回 null
        return null
    }

    // 删除操作
    HahsTable.prototype.remove = function(key) {
         // 1. 根据key获取对应的 index
         let index = this.hashFunc(key, this.limit)

         // 2. 根据index 获取对应的bucket
         let bucket = this.storage[index]
 
         // 3.判断bucket 是否 为 null
         if (bucket == null) {
             return null
         }
 
         // 4.有bucket 那么就进行线性查找 并且删除
         for (let i = 0; i < bucket.length; i++) {
            let tuple = bucket[i]
            if (tuple[0] == key) {
                bucket.splice(i, 1)
                this.count--

                // 减少容量 ，最小容量是7
                if (this.limit > 7 && this.count < this.limit * 0.25) {
                    let newSize = Math.floor(this.limit / 2)
                    let newPrime = this.getPrime(newSize) // 获取的一定是质数， 这样就可以保证limit 是质数
                    this.resize(newPrime)
                }
             return tuple[1] // 返回被删除的值
            }
             
         }
 
         // 5. 依然没有找到，那么 返回 null
         return null
    }

    // 判断哈希表是否为null
    HahsTable.prototype.isEmpty = function() {
        return this.count == 0
    }

    // 获取哈希表中元素个数
    HahsTable.prototype.size = function() {
        return this.count
    }

    // 哈希表扩容
    HahsTable.prototype.resize = function(newLimit) {
        // 1.保存旧的数据内容
        let oldStorage = this.storage

        // 2.重置所有的属性
        this.storage = []
        this.count = 0
        this.limit = newLimit

        // 3.遍历oldStorage 中所有的bucket
        for (let i = 0; i < oldStorage.length; i++) {
            // 3.1 取出对应的bucket
            let bucket = oldStorage[i]

            // 3.2 判断bucket 是否为null
            if (bucket == null) {
                continue
            }

            // 3.3 bucket中有数据， 那么 取出数据， 重新插入
            for (let j = 0; j < bucket.length; j++) {
                const tuple = bucket[j]
                this.put(tuple[0], tuple[1])
            }
            
        }
    }

    // 判断某个数是否质数
    HahsTable.prototype.isPrime = function(num) {
          // 1. 获取num 的平方根
        let temp = parseInt(Math.sqrt(num))

        // 2. 循环判断
        for (let i = 2; i <= temp; i++) {
            if (num % i == 0) {
                return false
            }
        }
        return true
    }

    // 获取质数的方法
    HahsTable.prototype.getPrime = function(num) {
      // 14 -> 17 从14开始往后找，只要找到最近的质数即可 返回
      // 34 -> 37 从34开始往后找，只要找到最近的质数即可 返回
      while (!this.isPrime(num)) {
        num++
      }
      return num
    }

}


// 测试
let ht = new HahsTable()

// 插入数据
ht.put('abc', '2332')
ht.put('cba', '86')
ht.put('nba', '56')
ht.put('nbc', '34')


console.log(ht.get('abc'));
console.log(ht.get('cba'));
console.log(ht.get('nba'));

ht.put('abc', '1111')
console.log(ht.get('abc'));


ht.remove('abc')
console.log(ht.get('abc'));


// 判断一个数是质数(
// 特点：素数， 表示大于1的自然数中，只能被1和自己整除的数，不能被2到之间的num-1 数字整除
function isPrime(num) {
    if (num === 0) {
        return '输入大于0的数字'
    }
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            // 不是质数 可以被其他num 整除
            return false
        }
    }
    // 是质数
    return true
}

// 求n 以内的质数
function findPrime(n) {
    // 取遍 n 以内 的数字 看看是不是质数 如果是就输出
    for (let i = 2; i < n; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

// 更加高效判断质数
function isPrime2(num) {
    // 1. 获取num 的平方根
    let temp = parseInt(Math.sqrt(num))

    // 2. 循环判断
    for (let i = 2; i <= temp; i++) {
        if (num % i == 0) {
            return false
        }
    }
    return true

}