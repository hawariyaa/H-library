import React, { useContext } from 'react'
import './hero.css'
import { DarkMode } from '../../context/DarkMode'

function Hero() {
  const {Dark} = useContext(DarkMode)
  return (
    <div className={`hero ${Dark}`}>
         <div className='right-hero'>
              <h1>H-LIBRARY</h1>
              <h4>"Books are the training weights of the mind." - Epictetus</h4>
         </div>
         <div className={`left-hero ${Dark}`}>
            <p>Search for books</p>
            <input type="text" placeholder='search for book name, author...'/>
         </div>
    </div>
  )
}

export default Hero