// mac 下载ffpmeg
// https://blog.csdn.net/Adore11/article/details/132175068
/**
 * 官网下载后，点开，会有终端弹窗 让他打开 执行 会有【进程已完成】提示
 * 接着 环境配置
 * 1、创建zshrc（新开一个终端，输入`touch .zshrc`）
   2、打开zshrc （输入`open -e .zshrc` ） 此时会弹出一个界面，这里为命令行添加ffmpeg的路径。
   . 添加代码如下：
    ## FFmpeg
 
  export PATH=$PATH:/Users/marui/Downloads/ffmpeg  # 这里$PATH后为刚才下载的ffmpeg路径
   （记不得自己下载路径的可以直接刚下载的ffmpeg拖过来）

   4 添加完后记得`command+S`保存文件，关闭

   注意：这里后续想改变ffmpeg文件位置，记得重新到.zshrc文件里修改path后面的路径（重复步骤1～4）
     4. 激活环境 `source .zshrc`  


  以上上方法安装不成功， ffmpeg -version  结果not found

  方法2 homebrew
 * 
 */