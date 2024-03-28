import fs from 'node:fs'
import download from 'download-git-repo'
import ora from 'ora'
const spinner = ora('下载中...')

// 检查路径是否存在
export const checkPath = (path) => {
    if (fs.existsSync(path)) {
        return true
    } else {
        return false
    }
}

// 从仓库拉取模版
export const downloadTemp = (branch, name) => {
    return new Promise((resolve, rejects) => {
        spinner.start()
        /**
         * 参数1   仓库代码地址
         * 参数2 目录
         * clone
         */
        download(`direct:https://gitee.com/loxton/vue-template.git#${branch}`, name, { clone: true, }, function(err){
            if (err) rejects(err)
            resolve()
            spinner.succeed('下载完成')
        })
    })
}