import express from 'express'
const router = express.Router()
import Purchased from './purchasedschema.js'

router.get('/', async (req, res)=>{
    try{
    const pusrchased = await Purchased.find()
    return res.status(200).json({
         pusrchased: pusrchased
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