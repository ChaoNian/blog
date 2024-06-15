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
list.selectionsort()
console.log(list.toString());