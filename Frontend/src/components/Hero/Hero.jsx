import React, { useContext } from 'react'
import './hero.css'
import { DarkMode } from '../../context/DarkMode'
import gsap from "gsap"  
import {useGSAP} from "@gsap/react"
import { SplitText } from 'gsap/all'

function Hero() {
  const {Dark} = useContext(DarkMode)
  gsap.registerPlugin(SplitText)
  useGSAP(()=>{
    const heroSplit = new SplitText('.right-hero h1', {type: 'chars'})
    gsap.from(heroSplit.chars, {
      opacity:0,
      duration: 2,
      repeat:-1,
      repeatDelay:2,
      stagger:0.3
    })
  })
  return (
    <div className={`hero ${Dark}`}>
         <div className='right-hero'>
              <h1>H-LI<span>B</span>RARY</h1>
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