import express from 'express'
const router = express.Router()
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
secret_key = process.env.SECRET_KEY

const  Users = mongoose.model('users', {
    username: {
        type: String,
        required: true,
    },
    email: {
        type:String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    cart: [
        {
         bookId: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
         quantity: { type: Number, default: 1 }
        }
    ],
    uploads: [
         { type: mongoose.Schema.Types.ObjectId, ref: "Book" }
    ],
    purchasedBooks: [
        { type: mongoose.Schema.Types.ObjectId, ref: "Book" }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
})

router.post("/user", async (req, res)=> {
    try {
        const {username, email, password} = req.body
        if(!username || !email || !password){
            return res.status(400).json({
                success: false,
                message: 'All feilds are required'
            })
        }
        const existinguser = await Users.findOne({email})
        if(existinguser){
            return res.status(400).json({
                success: false,
                message: 'User Already Exists!'
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const users = new Users({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            cart: []
        })

        await users.save()
        const Data = {
            user: {
                id: users.id
            }
        }
        const token = jwt.sign(Data, secret_key)
        res.json({
            success: true,
            token: token
        })


    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'server Error!'
        })
    }
})


export default router


