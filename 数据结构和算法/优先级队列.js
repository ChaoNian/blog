// 封装队列的类
function PriorityQueue() {
    // 在PriortyQueue 重新创建了一个类：可以理解成内部类
    function QueueElement(element, priority) {
        this.element = element
        this.priority = priority
    }

    // 属性
    this.items = []

    // 方法
    // 实现插入方法
    PriorityQueue.prototype.enqueue = function (element, priority) {
        // 1、创建QueueElement 对象
        let queueElement = new QueueElement(element, priority)

        // 2、判断队列是否为空
        if (this.items.length === 0) {
            this.items.push(queueElement)
        } else {
            let added = false
            for (let i = 0; i < this.items.length; i++) {
                // 对比优先级
                if (queueElement.priority < this.items[i].priority) {
                    this.items.splice(i, 0, queueElement) // 插入
                    added = true
                    break // 找到位置后，不再循环
                }
                
            }
            if (!added) {
                this.items.push(queueElement)
            }
        }
        
    }
    // 2、从队列中删除前端元素
    PriorityQueue.prototype.dequeue = function() {
        return this.items.shift()
    }

    // 3、查看前端元素
    PriorityQueue.prototype.front = function() {
        return this.items[0]
    }

    // 4、查看队列是否为空
    PriorityQueue.prototype.isEmptry = function() {
        return this.items.length === 0
    }

    // 5、查看队列中元素的个数
    PriorityQueue.prototype.size = function() {
        return this.items.length
    }

    // 6、转换字符串 方法[可以利用继承来实现]
    PriorityQueue.prototype.toString = function() {
        let resultString = ''
        for (let i = 0; i < this.items.length; i++) {
            resultString += this.items[i].element + '-' + this.items[i].priority + '，'
            
        }
        return resultString
    }
}
// 使用队列
// let queue = new PriorityQueue()
// queue.enqueue('12w2', 1)
// queue.enqueue('ere',3)
// queue.enqueue('gh',67)
// queue.enqueue('4556',5)
// console.log(queue.size());
// console.log(queue.front());
// console.log(queue.toString());  
// console.log(queue.dequeue(), '----');
// console.log(queue.toString());

let arr = [1,2,3,4,5]
let set = new Set().add(23).add(43)
console.log(set);