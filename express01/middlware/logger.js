import log4js from 'log4js' // 控制台输出  文件也要输出
log4js.configure({
    appenders: {
        out: { // 控制台样式
            type: 'stdout', // 输出到控制台
            layout: {
                type: 'colored' // 使用带颜色的布局
            }
        },
        file: {// 生成日志文件
            filename: 'log/access.log', // 指定日志文件路径和名称
            type: 'file' // 输出到文件
        }
    },
    // 存放在一个类别里
    categories: {
        default: {
            appenders: ['out', 'file'], // 使用 out 和 file 输出器
            level: 'debug' // 设置日志级别为 debug
        }
    }
})
const logger = log4js.getLogger('default');
/**
 * 
 * @param {*} req  接受签到传过来的参数
 * @param {*} res  返回给前端的参数
 * @param {*} next 执行下一个中间件 如果调用 就会卡在这个中间件
 * 每一个请求都会经过中间件， 所以非常方便日志记录
 */
const LoggerMiddleware = (req, res, next) => {
    logger.debug(`[${req.method}] ${req.url}`)
    next()
}

export default LoggerMiddleware