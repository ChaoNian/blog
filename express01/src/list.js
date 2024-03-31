import express from 'express'
// expreee 是一个函数
const router = express.Router()


router.get('/getall', (req,res) => {
    res.json({
        code: 200,
        msg: '获取成功',
        data: [
            {id: 111}
        ]
    })
})
export default router