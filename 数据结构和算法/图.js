// import {Dictionay} from './dict'
// console.log(Dictionay);

function Graph() {
    // 属性；顶点（数组）/边（字典）
    this.vertexes = []
    this.edges = new Dictionay()

    // 方法
    // 添加方法
    // 1.添加顶点的方法
    Graph.prototype.addVertex = function (v) {
        this.vertexes.push(v)
        this.edges.set(v, [])
    }

    // 2 添加边的方法
    Graph.prototype.addEdge = function (v1, v2) {
        this.edges.get(v1)?.push(v2)
        this.edges.get(v2)?.push(v1)
    }

     // 3 toString
     Graph.prototype.toString = function () {
        // 1.定义字符串，保存最终的结果
        let resultString = ''

        // 2.遍历所有的顶点， 以及顶点对应的边
        for (let i = 0; i < this.vertexes.length; i++) {
            resultString += this.vertexes[i] + ' -> '
            // 根据顶点获取 边
            let vEdges = this.edges.get(this.vertexes[i])
            for (let j = 0; j < vEdges.length; j++) {
                resultString += vEdges[j] + ' '
            }
            resultString += '\n'
        }
        return resultString
    }

    // 初始化状态的颜色 白色
    Graph.prototype.initializeColor = function() {
        let color = []
        for (let i = 0; i < this.vertexes.length; i++) {
            color[this.vertexes[i]] = 'white'
        }
        return color
    }

    // 实现广度优先 搜索（BFS： Breadth first search）
    /**
     * 
     * @param {*} initV 开始的节点
     * @param {*} handler 回调函数
     * 白色：顶点没有访问过
     * 灰色：该顶点被访问，但没有被探索
     * 黑色： 顶点被访问过且被完全探索
     */
    Graph.prototype.bfs = function (initV, handler) {
        // 1.初始化颜色
        let colors = this.initializeColor()

        // 2. 创建队列
        let queue = new Queue()

        // 3. 将顶点加入到队列中
        queue.enqueue(initV)

        // 4.循环从队列中取出元素
        while (!queue.isEmptry()) {
            // 4.1 从队列中取出一个顶点
            let v = queue.dequeue()

            // 4.2 获取和顶点相连的另外顶点
            let vList = this.edges.get(v)

            // 4.3 将V的颜色设置成灰色
            colors[v] = 'gray'

            // 4.4 遍历所有的顶点，并且加入到队列中
            for (let i = 0; i < vList.length; i++) {
               let e = vList[i]
               if (colors[e] === 'white') {
                    // 顶点状态的改变
                    colors[e] = 'gray'
                    // 加入队列
                    queue.enqueue(e)
               }
            }

            // 4.5 访问顶点 
            handler(v)

            // 4.6 将顶点设置为黑色
            colors[v] = 'black'
        }
    }

    // 深度优先搜索（DFS）
    Graph.prototype.dfs = function(initV, handler) {
        // 1. 初始化颜色
        let colors = this.initializeColor()

        // 2. 从某个顶点开始依次递归访问
        this.dfsVisit(initV, colors, handler)
    }

    Graph.prototype.dfsVisit = function(v, colors, handler) {
        // 1.将颜色设置为灰色
        colors[v] = 'gray'

        // 2.处理v 顶点
        handler(v)

        // 3. 处理v相连的顶点
        let vList = this.edges.get(v)
        for (let i = 0; i < vList.length; i++) {
            let e = vList[i]
            if (colors[e] == 'white') {
                this.dfsVisit(e, colors, handler)
            }
        }

        // 4. 将v设置成黑色
        colors[v] = 'black'
    }
}

// 测试代码
let graph = new Graph()
// 添加顶点
let myVertexts = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
for (let i = 0; i < myVertexts.length; i++) {
    graph.addVertex(myVertexts[i])
}

// 添加边
graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')

console.log(graph.toString());
/**
 * A -> B C D 
    B -> A E F 
    C -> A D G 
    D -> A C G H 
    E -> B I 
    F -> B 
    G -> C D 
    H -> D 
    I -> E 
 */

// 测试广度优先搜索
let resfult = ''
graph.bfs(graph.vertexes[0], function(v) {
    resfult += v + ' '
})

console.log(resfult); // A B C D E F G H I 


// 深度优先
resfult = ''
graph.dfs(graph.vertexes[0], function(v) {
    resfult += v + ' '
})

console.log(resfult); // A B E I F C D G H 