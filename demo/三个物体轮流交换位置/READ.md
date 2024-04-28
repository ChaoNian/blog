需求： 三个物体轮流交换位置，最前面的那个放大。
效果：
<video controls src="iShot_2024-04-28_10.46.22.mp4" title="Title"></video>
实现思路
1. 分析静止状态：3个DOM，相同样式：width。height， position
2. 分析动态状态： 间隔动态放大某一个DOM
3. 
逻辑实现：
将放大的样式class动态添加在一个DOM，其他两个DOM 需要去掉放大class，
将三个DOM的 class 动态顺序切换

间隔实现：
setInterval