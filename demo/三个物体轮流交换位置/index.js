// 交换位置和放大位置
function swapAndEnlarge() {
    // 获取三个DOM
    let one = document.getElementById('one-cloud')
    let two = document.getElementById('two-cloud')
    let three = document.getElementById('three-cloud')

    // 临时存储原位置
    let temp = one.style.left

    // 变换位置
    // one移动到three位置
    one.style.left = three.style.left
    one.classList.add('enlarged')

    // two移动到one位置
    two.style.left = temp
    two.classList.remove('enlarged')

    // three 移动到one位置
    three.style.left = two.style.left;
    three.classList.remove('enlarged');


    // 更新id 为了下一次交换
    one.id = 'three-cloud'
    two.id = 'one-cloud'
    three.id = 'two-cloud'

}
// 间隔时间交换位置和放大
setInterval(swapAndEnlarge, 3000) // 每3秒执行一次