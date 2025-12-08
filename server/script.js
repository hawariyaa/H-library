import express from 'express'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import multer from 'multer'
import cors from 'cors'
import rateLimit from 'express-rate-limit'
import path from 'path'
import dotenv from 'dotenv'
import Users from './routes/Auth/userschema.js'

import signupRoute from  './routes/Auth/signup.js'
import googleRoute from './routes/Auth/google.js'
import loginRoute from './routes/Auth/login.js'

dotenv.config()
const port = process.env.PORT
const MONGODB = process.env.MONGODB_URL 
const app = express()




const databaseConnect = async () => {
   try {
    await mongoose.connect(MONGODB)
    console.log("mongodb successfully connected!")
   } catch (error) {
      console.log("The error is: " + error)
   }
}
databaseConnect()


app.use(express.json()) //Parses incoming JSON in request bodies and makes it available as req.body.
app.use(express.urlencoded({extended: true})) // Parses form data (URL-encoded) sent via POST requests.
app.use(cors())// Allow cross-origin requests


app.use('/signup', signupRoute)//so if you put here /user and also on the routes pages /user it would be /user/user
//the other thing to do is to make it here /user and in the routes make it only / or empty
app.use('/google', googleRoute)
app.use('/login', loginRoute)

app.listen(port, ()=> {
    console.log("server running!")
})//put the listen after the middleware this will allow you to prevent wired timing issues



