// 封装队列的类
function Queue() {
    // 属性
    this.items = []

    // 方法
    // 1、将元素加入到队列中
    Queue.prototype.enqueue = function(element) {
        this.items.push(element)
    }

    // 2、从队列中删除前端元素
    Queue.prototype.dequeue = function() {
        return this.items.shift()
    }

    // 3、查看前端元素
    Queue.prototype.front = function() {
        return this.items[0]
    }

    // 4、查看队列是否为空
    Queue.prototype.isEmptry = function() {
        return this.items.length === 0
    }

    // 5、查看队列中元素的个数
    Queue.prototype.size = function() {
        return this.items.length
    }

    // 6、转换字符串 方法[可以利用继承来实现]
    Queue.prototype.toString = function() {
        let resultString = ''
        for (let i = 0; i < this.items.length; i++) {
            resultString += this.items[i] +','
            
        }
        return resultString
    }

}

// 使用队列
// let queue = new Queue()
// queue.enqueue('122')
// queue.enqueue('ere')
// queue.enqueue('4556')
// queue.enqueue('gh')
// console.log(queue.size());
// console.log(queue.front());
// console.log(queue.toString());
// console.log(queue.dequeue());
// console.log(queue.toString());


//  面试题：击鼓传花
function passGame(nameList, num) {
    // 1. 创建一个队列结构
    let queue = new Queue()

    // 2. 将所有人依次加入到队列中
    for (let i = 0; i < nameList.length; i++) {
        queue.enqueue(nameList[i])
    }

    // 3、开始数数
    while(queue.size() > 1) { //大于1一个人就需要数数
        /**
         * 不是num的时候，重新加入到队列中的末尾
         * 是num这个数字的时候，将其从队列中删除
         * 3.1 num 数字之前的人重新放入到队列的末尾
         */
        for (let i = 0; i < num - 1; i++) {
            queue.enqueue(queue.dequeue())
        }

        // 3.2 num对应这个人，直接从队列中删除掉
        queue.dequeue()
    }

    // 4、获取剩下的那个人
    let endName = queue.front()


    console.log(endName);
    return nameList.indexOf(endName)
}

let names = ['1d','2fv','3gh','45fh', '56hgh5']
console.log(passGame(names, 3));
