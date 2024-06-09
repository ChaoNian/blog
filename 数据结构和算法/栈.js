function Stack () {
    // 栈中的属性
    this.items = []

    // 栈相关操作
    // 1、将元素压入栈
    Stack.prototype.push = function (element) {
        this.items.push(element)
    }

    // 2、从栈中取出元素
    Stack.prototype.pop = function (){
        return this.items.pop()
    }

    // 3、查看栈中元素
    Stack.prototype.peek = function () {
        return this.items[this.items.length -1]
    }

    // 4、判断栈是否为空
    Stack.prototype.isEmpty = function() {
        return this.items.length === 0
    }

    // 5、获取栈中元素的个数
    Stack.prototype.size = function() {
        return this.items.length
    }

    // 6、toString方法
    Stack.prototype.toString = function() {
        let resultString = ''
        for (let i = 0; i < this.items.length; i++) {
            resultString += this.items[i] +','
            
        }
        return resultString
    }

}
// var s = new Stack()
// s.push(12) 
// s.push(120)
// s.push(102)
// s.push(132) 
// console.log(s);

// s.pop()
// console.log(s);
// console.log(s.peek());
// console.log(s.size());
// console.log(s.toString());

// 函数： 将十进制转成二进制
function dec2bin(decNumber) {
    // 1、定义栈对象
    let stack= new Stack()

    // 2、循环操作
    while (decNumber) {
        // 2.1 获取余数，并且放入到栈中
        stack.push(decNumber % 2)
        // 2.2 获取整除后的结果，作为下一次运行的数字

        decNumber = Math.floor(decNumber / 2)
    }

    // 3、从栈中取出0和1
    let binaryString = ''
    while(!stack.isEmpty()) {
        binaryString += stack.pop()
    }
    return binaryString
}
console.log(dec2bin(100)); // 1100100

console.log(dec2bin(1000)); // 1111101000