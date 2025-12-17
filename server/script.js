import express from 'express'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import multer from 'multer'
import cors from 'cors'
import rateLimit from 'express-rate-limit'
import path from 'path'
import dotenv from 'dotenv'
import Users from './routes/Auth/userschema.js'
import Comment from './routes/comments/commentschema.js'

import signupRoute from  './routes/Auth/signup.js'
import googleRoute from './routes/Auth/google.js'
import loginRoute from './routes/Auth/login.js'
import Bookupload from './routes/Books/uploadBooks.js'
import uploadimage from './routes/Books/uploadimage.js'
import uploadfile from './routes/Books/Bookfile.js'
import addComment from './routes/comments/addcomment.js'
import fetchComment from './routes/comments/fetchComment.js'
import payment from './routes/payment/payment.js'
import fetchall from './routes/Auth/fetchall.js'
import callback from './routes/payment/callback.js'
import allbooks from './routes/Books/getallbooks.js'
import allpurchased from './routes/payment/allpurchased.js'

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
app.use('/bookupload', Bookupload )
//Whenever someone visits a URL that starts with /uploads/Bookimage, 
//serve files from the uploads/Bookimage folder on your computer.”
//This tells Express: “Make the folder uploads/Bookimage publicly accessible.”
//so basically what we do is use the uploadimage route upload image in the folder and get a url
//then put the url when uploading the book, litrally paste the url and put it in the database
app.use('/uploads/Bookimage', express.static('uploads/Bookimage'))
app.use('/uploadimage', uploadimage)

app.use('/uploads/Bookfile', express.static('uploads/Bookfile'))
app.use('/uploadfile', uploadfile)

app.use('/addcomment', addComment )
app.use('/fetchcomment', fetchComment )

app.use('/fetchall', fetchall)
app.use('/allbooks', allbooks)
app.use('/allpurchased', allpurchased)

app.use('/payment', payment)
app.use('/callback', callback)

app.listen(port, ()=> {
    console.log("server running!")
})//put the listen after the middleware this will allow you to prevent wired timing issues




