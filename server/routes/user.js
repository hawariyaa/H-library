import express from 'express'
import { Router } from 'express'
import mongoose from 'mongoose'

const router = Router()
//becareful of the route in the main app if /user and here /profile then the route will be
//POST /user/profile, so if your router has one route you can leave it as '' empty string or '/' 

const User = mongoose.model('users',{
    id:{
        type:Number,
        required:true,
        unique:true,
    },
    username:{
        type:String,
        minlength:3,
        
    }

})

router.post('/',(req,res)=>{
    
})


export default router