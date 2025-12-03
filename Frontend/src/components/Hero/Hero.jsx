import React, { useContext } from 'react'
import './hero.css'
import { DarkMode } from '../../context/DarkMode'
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import SplitText from 'gsap/SplitText'
import { language } from '../../context/Language'

gsap.registerPlugin(SplitText)

function Hero() {
  const { lang } = useContext(language)
  const { Dark } = useContext(DarkMode)

  return (
    <div className={`hero ${Dark}`}>
      {lang === 'English' ? (
        <div className='right-hero'>
          <h1>H-LI<span>B</span>RARY</h1>
          <h4>"Books are the training weights of the mind." - Epictetus</h4>
        </div>
      ) : (
        <div className="right-hero-2">
          <h1>ኤች <span>ቤተ-</span>መጽሐፍት</h1>
          <h4>"መጻሕፍት የአእምሮ ማሰልጠኛ ክብደት ናቸው።" ኤፒክቴተስ</h4>
        </div>
      )}

      <div className={`left-hero ${Dark}`}>
        {lang === 'English' ? <p>Search for books</p> : <p>መጽሐፍትን ይፈልጉ</p>}
        <input type="text" placeholder='search for book name, author...' />
      </div>
    </div>
  )
}

export default Hero
