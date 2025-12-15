import express from 'express'
const router = express.Router()
import Users from './userschema.js'

router.post('/', async (req, res)=>{
    const users = await Users.find()
    return res.status(200).json({
        sucess: true,
        message: users
    })
})

export default router