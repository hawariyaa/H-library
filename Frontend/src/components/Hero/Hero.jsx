import React from 'react'
import './hero.css'

function Hero() {
  return (
    <div className="hero">
         <div className='right-hero'>
              <h1>H-LIBRARY</h1>
              <h4>"Books are the training weights of the mind." - Epictetus</h4>
         </div>
         <div className='left-hero'>
            <label htmlFor="">Search</label>
            <input type="text"  placeholder='search by name, author....' />
         </div>
    </div>
  )
}

export default Hero