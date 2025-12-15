import express from 'express'
const router = express.Router()
import Users from '../Auth/userschema.js'
import { Chapa } from 'chapa-nodejs';
import dotenv from 'dotenv'
dotenv.config()
const Secretkey = process.env.Secret_key 



//Creates a Chapa client instance All future payment requests go through this object
const chapa = new Chapa({
  secretKey: Secretkey,
});

//Creates a new payment session Returns: A checkout URL, A transaction reference
//The user is redirected to Chapa’s payment page
//tx_ref: tx_ref,
//A unique ID for this transaction You generate this yourself Used later to:
//Verify payment and Match payment to a user/order
//The callback URL is a backend endpoint on your server that Chapa calls automatically after a payment attempt.
//It is a server-to-server notification, The user is not involved, This is where you confirm and trust the payment
router.post('/', async (req, res)=>{
  try{
  const {userid, amount} = req.body
  if(!userid || !amount){
    return res.status(400).json({
        success: false,
        message: "User id and amount are needed!"
    })
  }
  const user = await Users.findById(userid)
  if(!user){
    return res.status(404).json({
       success: false,
       message: "user not found!"
    })
  }
  const tx_ref = `order_${userid}_${Date.now()}`
  const response = await chapa.initialize({
  first_name: user.username,
  last_name: user.username,
  email: user.email,
  phone_number: '0911121314',
  currency: 'ETB',
  amount: amount,
  tx_ref: tx_ref,
  callback_url: 'https://google.com',
  return_url: 'https://example.com/',
  customization: {
    title: 'Book Purchase',
    description: 'checkOut',
  },
});

console.log(response)
return res.status(200).json({
    success: true,
    message: response,
    tx_ref: tx_ref
})
  }
  catch(error){
    return res.status(500).json({
        success: false,
        message: "Server Error!",
        error: error.message
    })
  }
})

export default router
