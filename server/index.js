import express from 'express'
import mongoose, { mongo } from 'mongoose'
import jwt from 'jsonwebtoken'
import multer from 'multer'
import cors from 'cors'
import bcrypt from 'bcrypt'
import rateLimit from 'express-rate-limit'
//path is a built-in Node.js module used to work with file and directory paths in a safe and cross-platform way.
import path from 'path'
const port = 4000
const mongo = "mongodb://mongo:SQRyLGFqxsmBVAiZrxCuvHqRQyzcHNrI@caboose.proxy.rlwy.net:51744"

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.listen(port, (error)=>{
    if(!error){
        console.log('Express app running on port: ' + port)
    }
    else{
        console.log('There is an error: ' + error)
    }
})

const connection = async () =>{
    try{
       await mongoose.connect(mongo)
       console.log('mongodb sucssesfully connected')
    }
    catch(error){
       console.log('The error is: ' + error)
    }
   
}

connection()


