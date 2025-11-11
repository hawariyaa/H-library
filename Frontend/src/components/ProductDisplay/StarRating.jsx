import React, {useState} from 'react'
import { FaStar } from "react-icons/fa";


function StarRating() {
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