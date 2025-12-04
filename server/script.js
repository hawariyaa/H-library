import express from 'express'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import multer from 'multer'
import cors from 'cors'
import rateLimit from 'express-rate-limit'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()
const port = process.env.PORT
const app = express()

app.listen(port, ()=> {
    console.log("server running!")
})

app.use(express.json()) //Parses incoming JSON in request bodies and makes it available as req.body.
app.use(express.urlencoded({extended: true})) // Parses form data (URL-encoded) sent via POST requests.
app.use(cors())// Allow cross-origin requests


