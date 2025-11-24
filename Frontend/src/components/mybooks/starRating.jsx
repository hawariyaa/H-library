import React, {useState} from 'react'
import { FaStar } from "react-icons/fa";


function StarRating() {
  //we created an array with length of 5, and spread makes the value from empty slot to undefined

  const [rate, setrate] = useState(null)
  return (
    <>
        {[...Array(5)].map((star, index) => {
          let currentRate = index + 1
            return(
              
              <label key={index}>
                 <input type="radio"name='star' value={currentRate} onClick={()=>setrate(currentRate)} hidden />
                 <FaStar color={currentRate <= rate ? 'yellow': 'grey'} style={{cursor:"pointer"}} />

              </label>

            )
        })}
    </>
  )
}

export default StarRating