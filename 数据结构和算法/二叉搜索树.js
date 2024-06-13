// 封装二叉搜索树
function BinarySearchTree() {
    function Node (key) {
        this.key = key
        this.left = null
        this.right = null
    }

    // 属性
    this.root = null

    // 方法
    // 插入数据： 对外给用户调用的方法
    BinarySearchTree.prototype.insert = function(key) {
        // 1.根据key 创建节点
        let newNode = new Node(key)

        // 2.判断节点是否有值
        if (this.root == null) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    // 递归查找插入的合适位置
    /**
     * 
     * @param {*} node 
     * @param {*} newNode 
     */
    BinarySearchTree.prototype.insertNode = function(node, newNode) {
        if (newNode.key < node.key) { // 向左查找
            if (node.left == null) {
                node.left = newNode
            } else {
                this.insertNode(node.left, newNode)
            }
        } else { // 向右查找
            if (node.right == null) {
                node.right = newNode
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }

    // 树的遍历
    // 1.先序遍历 方向是 根左右
    BinarySearchTree.prototype.preOrderTraversal = function (handler) {
        this.preOrderTraversalNode(this.root, handler)
    }

    // 先序遍历递归函数（函数调用栈，先进先出， 当前函数执行完了就会出栈）
    BinarySearchTree.prototype.preOrderTraversalNode = function(node,handler) {
        if (node != null) {
            // 1.先处理经过的节点
            handler(node.key)

            // 2. 后处理经过节点的左子节点
            this.preOrderTraversalNode(node.left, handler)

            // 3. 后处理经过节点的右子节点
            this.preOrderTraversalNode(node.right, handler)
        }
    }

    // 2.中序遍历 方向是 左根右   特点：升序
    BinarySearchTree.prototype.midOrderTraversal = function (handler) {
        this.midOrderTraversalNode(this.root, handler)
    }

    // 先序遍历递归函数（函数调用栈，先进先出， 当前函数执行完了就会出栈）
    BinarySearchTree.prototype.midOrderTraversalNode = function(node,handler) {
        if (node != null) {
            // 1. 先处理经过节点的左子节点
            this.midOrderTraversalNode(node.left, handler)
            
            // 2.后处理经过的节点
            handler(node.key)

            // 3. 后处理经过节点的右子节点
            this.midOrderTraversalNode(node.right, handler)
        }
    }

    // 3.后序遍历 方向是 左右根 
    BinarySearchTree.prototype.postOrderTraversal = function (handler) {
        this.postOrderTraversalNode(this.root, handler)
    }

    // 后序遍历递归函数（函数调用栈，先进先出， 当前函数执行完了就会出栈）
    BinarySearchTree.prototype.postOrderTraversalNode = function(node,handler) {
        if (node != null) {
            // 1. 先处理经过节点的左子节点
            this.postOrderTraversalNode(node.left, handler)

            // 2. 后处理经过节点的右子节点
            this.postOrderTraversalNode(node.right, handler)
            
            // 3.后处理经过的节点
            handler(node.key)
        }
    }

    // 寻找最值
    // 寻找最大值
    BinarySearchTree.prototype.max = function() {
        // 1.获取根节点
        let node = this.root

        // 2.依次向右不断的查找， 直刀节点为null
        let key = null
        while(node != null) {
            key = node.key
            node = node.right
        }

        return key
    }
     // 寻找最小值
     BinarySearchTree.prototype.min = function() {
         // 1.获取根节点
         let node = this.root

         // 2.依次向左不断的查找， 直刀节点为null
         let key = null
         while(node != null) {
             key = node.key
             node = node.left
         }
 
         return key
        
     }

    //  搜索某个key
    BinarySearchTree.prototype.search = function(key) {
        // return this.searchNode(this.root, key) // 递归写法

        // 1.获取根节点
        let node = this.root

        // 2. 循环搜索key
        while(node != null) {
            if (key < node.key) { // 向左
                node = node.left
            } else if (key > node.key) {// 向右
                node = node.right
            } else {
                return true
            }
        }
        return false
    }
    // 递归写法
    // BinarySearchTree.prototype.searchNode = function(node, key) {
    //    if (node == null) {
    //     return false
    //    }

    //     //   判断node 节点的值和传入的key大小
    //     if (key < node.key) { // 向左继续查找
    //         return this.searchNode(node.left, key)
    //     } else if (key > node.key) {// 向右继续查找
    //         return this.searchNode(node.right, key)
    //     } else { // 值 相同， 直接返回
    //         return true
    //     }
    // }

    // 删除节点 特点 删除某个节点后任然符合二叉搜索树的特性， 左小 右大
    BinarySearchTree.prototype.remove = function (key) {
        // 1. 寻找药删除的节点
        // 1.1 定义变量， 保存一些信息
        let current = this.root
        let parent = null
        let isLeftChild = true

        // 1.2 开始寻找删除的节点
        while (current.key != key) {
            parent = current
            if (key < current.key) { // 向左
                isLeftChild = true
                current = current.left
            } else { // 向右
                isLeftChild = false
                current = current.right
            }

            // 某种情况：已经找到了最后的节点，依然没有找到 == key
            if (current == null) return false
            
        }

        // 2.根据对应的情况删除节点
        // 2.1删除的节点是叶子节点（没有子节点）
        if (current.left == null && current.right == null) {
            if (current == this.root) {
                this.root = null
            } else if (isLeftChild) {
                parent.left = null
            } else {
                parent.right = null
            }
        }
        // 2.2 删除的节点current 有一个子节点
        else if (current.right == null) { // 当 右 边没有子节点就是 左 边有子节点
            if (current == this.root) { // 等于根节点时，将当前节点变为根节点
                this.root = current.left
            } else if (isLeftChild) { 
                // 要删除的current 是 左 子节点时，将current节点的 左 子节点 变成父节点的 左 子节点
                parent.left = current.left
            } else {
                // 要删除的current 是 右 子节点时，将current节点的 左 子节点 变成父节点的 右 子节点
                parent.right = current.left
            }
        } else if(current.left == null) {// 当 左 边没有子节点就是 右 边有子节点
            if (current == this.root) { // 等于根节点时，将当前节点变为根节点
                this.root = current.right
            } else if (isLeftChild) { 
                // 要删除的current 是 左 子节点时，将current节点的 左 子节点 变成父节点的 左 子节点
                parent.left = current.right
            } else {
                // 要删除的current 是 右 子节点时，将current节点的 左 子节点 变成父节点的 右 子节点
                parent.right = current.right
            }
        } 
         // 2.3 删除的节点current 有两个子节点
        else {
            // 1. 获取后继节点
            let successor  = this.getSuccessor(current)

            // 2. 判断是否根节点
            if (current == this.root) {
                this.root = successor
            } else if (isLeftChild) {
                parent.left = successor
            } else {
                parent.right = successor
            }

            // 3 将删除节点的左子树 = current.left
            successor.left = current.left

        }

    }
    // 找后继的方法
    // 思路：左子树的找最大，右子树的找最小
    BinarySearchTree.prototype.getSuccessor = function(delNode) {
        // 1.定义变量，保存找到的后继(继承的子节点)
        let successor = delNode // 
        let current = delNode.right // 从删除节点的 右子树开始
        let successorrParent = delNode
        
        // 2.循环查找 找左 测最大节点
        while (current != null) {
            successorrParent = successor
            successor = current // successor是目标节点
            current = current.left // 继续向左子树找
        }

        // 3.判断寻找的后继节点是否直接就是delNode的right节点
        if (successor != delNode.right) {
            // 调整后继节点的关系
            successorrParent.left = successor.right
            successor.right = delNode.right
        }
        return successor
    }
}

// 测试
let bst = new BinarySearchTree()
bst.insert(11)
bst.insert(7)
bst.insert(15)
bst.insert(5)
bst.insert(3)
bst.insert(9)
bst.insert(8)
bst.insert(10)
bst.insert(12)
bst.insert(14)
bst.insert(20)
bst.insert(18)
bst.insert(25)
// let s = ''
// bst.preOrderTraversal(function(key) {
//     s += key + ' '
// })
// console.log(s);

let s1 = ''
bst.midOrderTraversal(function(key) {
    s1 += key + ' '
})
console.log('查找: ', s1);

// let s2 = ''
// bst.postOrderTraversal(function(key) {
//     s2 += key + ' '
// })
// console.log(s2);

// console.log(bst.max());
// console.log(bst.min());

// console.log(bst.search(3));
// console.log(bst.search(25));
// console.log(bst.search(333));

// 测试删除
bst.remove(9)
bst.remove(7)
bst.remove(15)
s1 = ''
bst.midOrderTraversal(function(key) {
    s1 += key + ' '
})
console.log('查找: ', s1);