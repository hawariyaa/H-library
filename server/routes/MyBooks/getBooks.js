import express from 'express'
const router = express.Router()
import Purchased from '../payment/purchasedschema.js'

router.get('/', async (req, res) => {
  try {
    const { userid } = req.query

    if (!userid) {
      return res.status(400).json({
        success: false,
        message: "Userid is required"
      })
    }

    const purchases = await Purchased.find({
      userid,
      paid: true
    })
    const BookId = purchases.map(p => p.bookid)
    return res.status(200).json({
      success: true,
      books: BookId
    })

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message
    })
  }
})

export default router
