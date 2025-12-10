import express from 'express'
const router = express.Router()
import Books from './Bookschema.js'
import multer from 'multer'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()
const port = process.env.PORT

//Creates a storage engine that saves files to disk (your server's filesystem).
//destination is where the file will be saved
const storage = multer.diskStorage({
    destination: path.join(process.cwd(), "uploads", "Bookimage" ),
    filename: (req,file,cb)=>{
       return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload = multer({storage: storage})

//upload.single("image")  this means expect a single file being uploaded with a name = image
//like the inputs have names right, <input type='file' name='image'/>
router.post('/', upload.single("image"),async(req, res)=>{
     res.json({
        succuess: true,
        img_url: `http://localhost:${port}/uploads/Bookimage/${req.file.filename}`
     })
})

export default router

/*Multer allows two storage types:
diskStorage() → saves files on the server
memoryStorage() → keeps files in RAM only

destination: path.join(process.cwd(), "uploads", "Bookimage")
process.cwd() Gets the current working directory of your Node project (usually the project root).
path.join(...) Safely joins folders into a correct file path, regardless of OS (Windows, Linux, etc.).

Argument	      Meaning
req         	The HTTP request
file	        Information about the uploaded file
cb	            Callback function to set the filename

The filename template
`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`

This constructs a unique filename using:

✔️ file.fieldname The name of the <input type="file" name="image">.
Example: "image"

✔️ Date.now() A unique timestamp (number of milliseconds since 1970), used to avoid overwriting files.
Example: 1712456723910

✔️ path.extname(file.originalname) Extracts the original file's extension.
If user uploads: book.png
Then this returns: .png

✔️ Combined filename example:
If the uploaded file input name is "image" and the uploaded file is "book.png":
image_1712456723910.png

 img_url: `http://localhost:${port}/uploads/Bookimage/${req.file.filename}` 
 this gives us the url of the image, the last one req.file.filename is the filename we gave it up there
*/