import React, { useState } from 'react'
import './navbar.css'
import searchb from '../../assets/search-b.png'
import searchw from '../../assets/search-w.png'
import day from '../../assets/day.png'
import night from '../../assets/night.png'
import menub from '../../assets/menuicon-b.png'
import menuw from '../../assets/menuicon-w.png'

function NavBar() {
    const [search, setsearch] = useState(false)
    const handlesearch = () =>{
        setsearch(!search)
    }
  return (
    <div className='nav-bar'>
        <div className="logo">
          <h3>H-library</h3>
          <select name="language" id="">
            <option value="English">English</option>
            <option value="Amharic">አማርኛ</option>        
          </select>
        </div>
        <div className={`right-side ${search}`}>
            <i class="fa-solid fa-share-nodes"></i>
            <img src={night} alt="modeicon" />
            <input type="text" placeholder='search for book name, author...'/> 
            <i class="fa-solid fa-magnifying-glass" onClick={handlesearch}></i>
            <p>Login/sign-up</p>
            <i class="fa-solid fa-cart-shopping"></i>
            <i class="fa-solid fa-bars"></i>
        </div>
    </div>
  )
}

export default NavBar