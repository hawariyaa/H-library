import express from 'express'
const router = express.Router()
import Books from './Bookschema.js'


router.get('/', async (req, res)=>{
    try{
    const allbooks = await Books.find()
    return res.status(200).json({
         allbooks: allbooks
    })
}
catch(error){
    return res.status(500).json({
        success: false,
        error: error.message
    })
}
})

export default router