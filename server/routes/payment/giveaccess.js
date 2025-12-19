import express from 'express'
const router = express.Router()


router.post('/', async (req, res)=>{
     const {paid, userid, bookid} = req.body
     if(!paid || !userid || !bookid){
        return res.status(400).json({
            success: false,
            message: "All datas are required!"
        })
     }
     if(paid === 'success'){
        return res.status(200).json({
            
        })
     }
})

export default router