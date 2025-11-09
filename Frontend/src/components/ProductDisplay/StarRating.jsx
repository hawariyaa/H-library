import React, { useState } from 'react'
import {FaStar} from 'react-icons/fa'

function StarRating() {
    //we created an array with length of 5, and spread makes the value from empty slot to undefined
    const [rating, setrating] = useState(null)
    const [rateColor, setrateColor] = useState(null)
  return (
    <>
    
     { ([...Array(5)].map((star, index) => {
        const currentRate = index + 1
        return (
            <label htmlFor="">
               <input type="radio" name='rate' value={currentRate} onClick={()=>setrating(currentRate)} style={{display:"none"}} />
               <FaStar color={currentRate <= (rateColor || rating) ? "yellow" : "grey"}  style={{cursor:"pointer"}}
                onClick={()=>setrateColor(currentRate)}
               />
            </label>
             )
        }))}
    </>
  )
}

export default StarRating