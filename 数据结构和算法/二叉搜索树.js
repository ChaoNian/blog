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
let s = ''
bst.preOrderTraversal(function(key) {
    s += key + ' '
})
console.log(s);