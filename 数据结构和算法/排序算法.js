// 创建列表类
function ArrayList() {
    // 属性
    this.array = []

    // 方法 
    // 将数据可以插入到数组中的方法
    ArrayList.prototype.insert = function(item) {
    this.array.push(item)
    }

    // toString
    ArrayList.prototype.toString = function(item) {
    return this.array.join('-')
    }

    // 交换数据的位置
    ArrayList.prototype.swap = function(m, n) {
        let temp = this.array[m]
        this.array[m] = this.array[n]
        this.array[n] = temp
    }
    // 排序
    // 冒泡排序
    ArrayList.prototype.bubblesort = function () {
        // 1.获取数组的长度
        let length = this.array.length

        for (let j = length - 1; j >= 0; j--) {
            for (let i = 0; i < j ; i++) {
               if (this.array[i] > this.array[i + 1]) {
                this.swap(i, i + 1)
               }
            }
            
        }

    }

    // 选择排序
    ArrayList.prototype.selectionsort = function () {
        // 1.获取数组的长度
        let length = this.array.length

        // 2. 外层循环，从0位置开始获取数据
        for (let j = 0; j < length - 1; j++) {
            let min = j
            for (let i = min + 1; i < length ; i++) {
               if (this.array[min] > this.array[i]) {
                min = i
               }
            }
            this.swap(min, j)
        }
    }

    // 插入排序 找到其中一项，与左侧部分有序的元素进行依次对比
    ArrayList.prototype.insertionsort = function(){
        // 1.获取数组长度
        let length = this.array.length

        // 2.外层循环：从第1个位置开始获取数据， 向前局部有序进行插入
        for (let i = 1; i < length; i++) {
            // 3.内层循环：获取 i 位置的元素，和前面数据依次进行比较
            let temp = this.array[i]
            let j = i
            while (this.array[j - 1] > temp && j > 0) {
                this.array[j] = this.array[j - 1]
                j--
            }
            // 4. 将 j 位置的数据， 放置temp即可
            this.array[j] = temp
        }
    }
    // 希尔排序
    ArrayList.prototype.shellsort = function () {
        // 1.获取数组的长度
        let length = this.array.length

        // 2. 初始化的增量（gap -> 间隔/间隙）
        let gap = math.floor(length / 2)

        // 3.while循环（gap 不断的减少）
        while (gap >= 1) {
            // 4. 以gap作为间隔， 进行分组 对分组纪念下插入排序
            for (let i = gap; i < length; i++) {
                let temp = this.array[i]
                let j = i
                while (this.array[j - gap] > temp && j > gap - 1) {
                    this.array[j] = this.array[j - gap]
                    j -= gap
                }
                // 5. 将j 位置的元素赋值temp
                this.array[j] = temp
            }
            // 改变gap， 缩小两倍
            gap = Math.floor(gap / 2)
        }
    }

    // 快速排序
    // 1. 选择枢纽
    ArrayList.prototype.median = function (left, right) {
        // 1.取出中间的位置
        let center = Math.floor((left + right) / 2)

        // 判断大小， 并且进行交换
        if (this.array[left] > this.array[center]) {
            this.swap(left, center)
        }
        if (this.array[center] > this.array[right]) {
            this.swap(center, right)
        }
        if (this.array[left] > this.array[right]) {
            this.swap(left, right)
        }

        // 3.将center 换到right - 1 的位置, z这样不会重复对比
        this.swap(center, right - 1)

        // 返回枢纽
        return this.array[right - 1]
    }

    // 2. 快速排序的实现
    ArrayList.prototype.quicksort = function () {
        this.quick(0, this.array.length - 1)
    }
    ArrayList.prototype.quick = function (left, right) {
        // 1. 结束条件
        if (left >= right) return

        // 2.获取枢纽
        let pivot = this.median(left, right)
        if (!pivot) return

        // 3. 定义变量，用于记录当前找到位置
        let i = left
        let j = right - 1

        // 4.开始进行交换
        while (true) {
            // 两个位置分别遍历
            while (this.array[++i] < pivot) {}
            while (this.array[--j] > pivot) {}
            if (i < j) {
                this.swap(i, j)
            } else {
                break
            }
        }

        // 5. 将枢纽放置在正确位置，i的位置
        this.swap(i, right - 1)

        // 6.分而治之 枢纽位置两侧分别继续循环
        this.quick(left, i - 1)
        this.quick(i + 1, right)

    }

}

// 测试代码
let list = new ArrayList()

list.insert(33)
list.insert(3)
list.insert(13)
list.insert(43)
list.insert(5)
list.insert(66)
list.insert(303)
list.insert(330)
console.log(list.toString());

// 冒泡排序 两两对比
// list.bubblesort()
// console.log(list.toString());

// 选择排序， 选中一个最小的循环对比
// list.selectionsort()
// console.log(list.toString());


// list.quicksort()
// console.log(list.toString());