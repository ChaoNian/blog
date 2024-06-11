// 封装链表类
function LinkedList() {
    // 内部的类：节点类
    function Node(data) {
        this.data = data // 数据
        this.next = null // 指针
    }

    // 属性
    this.head = null // 第一个节点
    this.length = 0 // 节点长度
    

    // 1.追加方法
    LinkedList.prototype.append = function (data) {
        // 1.创建新的节点
        var newNode = new Node(data)

        // 2. 判断是否添加的是第一个节点
        if (this.length === 0) { // 2.1 是第一个节点
            this.head = newNode
        } else {                 // 2.2 不是第一个节点
            // 找到最后一个节点
            let current = this.head // 从头开始
            while(current.next) { // current.next 不是null,需要循环找到最后一个节点
                current = current.next
            }

            // 最后节点的next指向新的节点
            current.next = newNode
        }

        // 3. length +1
        this.length += 1

    }

    // 2 toString方法
    LinkedList.prototype.toString = function () {
        // 1.定义变量
        let current = this.head
        let listString = ''

        // 2.循环获取一个个节点
        while(current) {
            listString += current.data + ' '
            current = current.next
        }

        // 3.返回字符串
        return listString
    }

    // 3. insert方法 插入到任意位置
    LinkedList.prototype.insert = function(position, data) {
        // 1.对position 进行边界判断 位置不能小于0， 或者不能超出链表长度
        if (position < 0 || position > this.length) return false

        // 2. 根据data创建newNode
        let newNode = new Node(data)

        // 3. 判断插入的位置是否是第一个
        if (position == 0) {
            newNode.next = this.head
            this.head = newNode
        } else { // 节点插入到指定位置
            let index = 0
            let current = this.head
            let previous = null // 记录前一个节点
            while (index++ < position) { // 找到位置
                previous = current
                current = current.next
            }
            newNode.next = current
            previous.next = newNode
        }

        // 4. length +1
        this.length += 1
        return true
    }

    // 4. 获取方法 
    LinkedList.prototype.get = function(position) {
        // 1.边界判断
        if (position < 0 || position >= this.length) return null

        // 2.获取对应的Data
        let current = this.head
        let index = 0
        while (index++ < position) {
            current = current.next
        }

        // 3.返回数据
        return current.data
    }

    // 5. indexOf方法  获取对应数据位置
    LinkedList.prototype.indexOf = function(data) {
        // 1.定义变量
        let current = this.head
        let index = 0

        // 2.开始查找
        while (current) {
            if (current.data === data) {
                return index
            }
            current = current.next
            index += 1
        }

        // 3. 找到最后没有找到的，返回-1
        return -1
    }

    // 6.updata方法
    LinkedList.prototype.updata = function(position, newData) {
        // 1.边界判断
        if (position < 0 || position >= this.length) return false

        // 2.查找正确的节点
        let current = this.head
        let index = 0
        while (index++ < position) {
            current = current.next
        }

        // 3.返回position位置的 node 的data修改成 newData
        current.data = newData

        return true
    }

    // 7.removeAt方法
    LinkedList.prototype.removeAt = function(position) {
        // 1.边界判断、
        if (position < 0 || position >= this.length) return null

        // 2.判断舒服删除的是第一个节点
        let current = this.head
        if (position == 0) {
            this.head = this.head.next
        } else {
            let index = 0
            let previous = null
            while (index++ < position) {
                previous = current
                current = current.next
            }
            // 前一个节点的next指向， current的next 即可
            previous.next = current.next
        }

        // 3.length - 1
        this.length -= 1

         // 4.返回被删除的数据
         return current.data
    }

    // 8.remove方法
    LinkedList.prototype.remove = function(data) {
        // 获取data 在列表中位置
        let positio = thi.indexOf(data)

        // 2.根据位置信息， 删除节点
        return this.head.removeAt(positio)
    }


    // 9.isEmpty方法
    LinkedList.prototype.isEmpty = function() {
        return this.length === 0
    }

    // 10 size方法
    LinkedList.prototype.size = function() {
        return this.length
    }

}

// 使用
// let list = new LinkedList()

// list.append('3322')
// list.append('343')
// list.append('45')
// list.updata(2,'eee')
// list.append('465')
// list.append('475')
// console.log(list);

// list.removeAt(2)
// console.log(list);


// 封装双向链表
function DoublyLinkList() {
    // 内部类： 节点类
    function Node(data) {
        this.data = data
        this.prev = null
        this.next = null
    }

    // 属性
    this.head = null
    this.tail = null
    this.length = 0

    // 常见的操作：方法
    // 1.追加方法
    DoublyLinkList.prototype.append = function(data) {
        // 1.根据data 创建节点
        let newNode = new Node(data)

        // 2.判断添加是否是第一个节点
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.prev = this.tail
            this.tail.next = newNode
            this.tail = newNode
        }

        // 3. length+1
        this.length += 1
    }

    // 2. 将链表转成字符串形式
    // 2.1 toString
    DoublyLinkList.prototype.toString = function() {
        return this.backwardString()
    }

    // 2.2 forwardString
    DoublyLinkList.prototype.forwardString = function() {
       // 定义变量
       let current = this.tail
       let resultString = ''

       // 依次向后遍历，获取每一个节点
       while(current) {
           resultString += current.data + ' '
           current = current.prev
       }
       return resultString
    }

    // 2.3 backwardString
    DoublyLinkList.prototype.backwardString = function() {
        // 定义变量
        let current = this.head
        let resultString = ''

        // 依次向后遍历，获取每一个节点
        while(current) {
            resultString += current.data + ' '
            current = current.next
        }
        return resultString
    }

    // 3. insert 方法
    DoublyLinkList.prototype.insert = function (position, data) {
        // 1.判断边界
        if(position < 0 || position > this.length) return false

        // 2.根据data创建新的节点
        let newNode = new Node(data)
        
        // 3.判断原来的列表是否为空
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            // 3.1 判断position 是否为0(插入在第一个节点),
            if (position === 0) {
                this.head.prev = newNode
                newNode.next = this.head
                this.head = newNode
            } else {
                // 3.3 其他情况
                let current = this.head
                let index = 0
                // 找到位置
                while(index++ < position) {
                    current = current.next
                }

                // 修改指针
                newNode.next = current
                newNode.prev = current.prev
                current.prev.next = newNode
                current.prev = newNode
            }
        }
    }

    // 4. get 获取方法
    DoublyLinkList.prototype.get = function() {
        // 1.判断边界
        if (positio < 0 || positio >= this.length) return false

        // 2.获取元素
        let current = this.head
        let index = 0

        while(index++ < positio) {
            current = current.next
        }
        return current.data

        /**
         * 更优解法
         * 先分开范围
         * this.length / 2 > position:从头开始先后遍历
         *  while(index++ < positio) {
              current = current.next
            }
            return current.data
         * this.length / 2 < position: 从后向前遍历
            let current = this.tail
            let index = this.length - 1
            while(index-- < positio) {
              current = current.next
            }
            return current.data
         */
    }

    // 5. indexOf返回列表中的索引
    DoublyLinkList.prototype.indexOf = function() {
        // 1. 定义变量
        let current = this.head
        let index = 0

        // 2. 查找和data 相同的节点
        while(current) {
            if (current.data == data) {
                return index
            }
            current = current.next
            index += 1
        }
         return -1
    }

    // 6.uodata方法
    DoublyLinkList.prototype.updata = function(positio, newData) {
        // 1.判断边界
        if (positio < 0 || position >= this.length) return false

        // 2. 寻找正确的节点
        let current = this.head
        let index = 0

        while(index++ < positio) {
            current = current.next
        }

        // 3.修改找到的节点的data信
        current.data = newData
    }

    // 7. removeAt方法
    DoublyLinkList.prototype.removeAt = function(posirion) {
        // 1.判断边界
        if (positio < 0 || position >= this.length) return null

        let current = this.head
        // 2. 判断是否只有一个节点
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            if (position === 0) { // 判断是否删除第一个节点
                this.head.next.prev = null
                this.head = this.head.next
            } else if(psoition === this.length - 1) { // 判断最后一个节点
                current = this.tail
                this.tail.prev.next = null
                this.tail = this.tail.prev
            } else {
                let index = 0
               
                while (index++ < positio) {
                    current = current.next
                }

                current.prev.next =current.next
                current.next.prev = current.prev
            }
            
        }

        // length =1
        this.length -= 1

        return current.data // 返回被删除的节点
    }

    // 8.remove
    DoublyLinkList.prototype.remove = function(data) {
        // 1、根据data获取下标
        let index = this.indexOf(data)
        // 2. 根据index 删除对应位置的方法
        return this.removeAt(index)

    }

    // 9.isEmpty
    DoublyLinkList.prototype.remove = function(data) {
       return this.length === 0
    }

    // 10.size
    DoublyLinkList.prototype.remove = function(data) {
       return this.length

    }

    // 11.获取链表第一个元素
    DoublyLinkList.prototype.getHead = function(data) {
        return this.head
     }
 
     // 12.获取链表最后一个元素
     DoublyLinkList.prototype.getTail = function(data) {
        return this.tail
 
     }
}

let Dblist = new DoublyLinkList()

Dblist.append('3322')
Dblist.append('343')
Dblist.append('45')
// Dblist.updata(2,'eee')
// list.append('465')
// list.append('475')
// console.log(list);
Dblist.insert(0, 'qqq')

Dblist.insert(2, 'vvvv')
// list.removeAt(2)
console.log(Dblist);
// console.log(Dblist.backwardString());
// console.log(Dblist.forwardString());