import 'dotenv/config'
dotenv.config()
import express from 'express'
import mongoose, { mongo } from 'mongoose'
import jwt from 'jsonwebtoken'
import multer from 'multer'
import cors from 'cors'
import bcrypt from 'bcrypt'
import rateLimit from 'express-rate-limit'
//path is a built-in Node.js module used to work with file and directory paths in a safe and cross-platform way.
import path from 'path'
import pkg from '@prisma/client'
const PrismaClient = pkg
const prisma = new PrismaClient()
const port = process.env.PORT
const database = process.env.DATABASE_URL

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
       await prisma.$queryRaw('SELECT 1')
       console.log('databse sucssesfully connected')
    }
    catch(error){
       console.log('The error is: ' + error)
    }
   
}

connection()


