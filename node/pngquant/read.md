http://pngquant.com/
是一个用于压缩 PNG 图像文件的工具。它可以显著减小 PNG 文件的大小，同时保持图像质量和透明度。通过减小文件大小，可以提高网页加载速度，并节省存储空间。pngquant 提供命令行接口和库，可轻松集成到各种应用程序和脚本中。

## 原理是什么?
pngquant 使用修改过的 Median Cut 量化算法以及其他技术来实现压缩 PNG 图像的目的。它的工作原理如下：

1. 首先，pngquant 构建一个直方图，用于统计图像中的颜色分布情况。
2. 接下来，它选择盒子来代表一组颜色。与传统的 Median Cut 算法不同，pngquant 选择的盒子是为了最小化盒子中颜色与中位数的差异。
3. pngquant 使用感知模型给予图像中噪声较大的区域较少的权重，以建立更准确的直方图。
4. 为了进一步改善颜色，pngquant 使用类似梯度下降的过程对直方图进行调整。它多次重复 Median Cut 算法，并在较少出现的颜色上增加权重。
5. 最后，为了生成最佳的调色板，pngquant 使用 Voronoi 迭代（K-means）对颜色进行校正，以确保局部最优。
6. 在重新映射颜色时，pngquant 只在多个相邻像素量化为相同颜色且不是边缘的区域应用误差扩散。这样可以避免在视觉质量较高且不需要抖动的区域添加噪声。

通过这些步骤，pngquant 能够在保持图像质量的同时，将 PNG 图像的文件大小减小到最低限度。

## Nodejs 中 调用pngquant
```node.js
import { exec } from 'child_process'
exec('pngquant 73kb.png --output test.png')

exec('pngquant 73kb.png --quality=82 --output test.png')

exec('pngquant 73kb.png --speed=1 --quality=82 --output test.png')
```
`quality` 表示图片质量0-100值越大图片越大效果越好

`--speed=1:` 最慢的速度，产生最高质量的输出图像。
`--speed=10:` 最快的速度，但可能导致输出图像质量稍微降低。