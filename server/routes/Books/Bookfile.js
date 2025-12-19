import express from 'express'
const router = express.Router()
import Books from './Bookschema.js'
import multer from 'multer'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()
const port = process.env.PORT

//both in the image and here we create a custom filename to avoid file being replaced when similar file 
// gets uploaded(with the same name)
const storage = multer.diskStorage({
     destination: path.join(process.cwd(), "uploads", "Bookfile" ),
     filename: (req,file,cb)=>{
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
     }
})

//this is creating a multer instance that uses the above defined storage engine 
const upload = multer({storage: storage})
router.post('/', upload.single("file"),async(req, res)=>{
     res.json({
        succuess: true,
        file_url: `http://localhost:${port}/uploads/Bookfile/${req.file.filename}`
     })
})

export default router