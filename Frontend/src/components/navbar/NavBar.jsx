import React, { useEffect, useState, useRef, useContext } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import searchb from '../../assets/search-b.png'
import searchw from '../../assets/search-w.png'
import day from '../../assets/day.png'
import night from '../../assets/night.png'
import menub from '../../assets/menuicon-b.png'
import menuw from '../../assets/menuicon-w.png'
import { DarkMode } from '../../context/DarkMode'
import profile from '../../assets/profile/defaultprofile.gif'
import { language } from '../../context/Language'

function NavBar() {
    const {lang, setlang} = useContext(language)
    const {Dark, setDark} = useContext(DarkMode)
    const [search, setsearch] = useState(false)
    const [bar, setbars] = useState(false)
    const barsRef = useRef(null)
    const searchbar = useRef(null)
//e.stopPropagation() is a method used in JavaScript event
//  handling to prevent an event from bubbling up the DOM tree to parent elements.
    const handlesearch = (e) =>{
        e.stopPropagation()
        setsearch(!search)
    }
    useEffect(()=>{
      const handleOutside = (e) => {
  //the first element bellow is to avoid error and to check if the element exists inside the DOM
  //e is the click event object, e.target is the actual DOM element that was clicked
         if(searchbar.current && !searchbar.current.contains(e.target)){
          setsearch(false)
         }
        }
    
    window.addEventListener('click', handleOutside)
    return ()=> window.removeEventListener('click', handleOutside)
   
    },[])
  //so why do we have [] dependence, because once the eventlistner mounts on the window then it wiill work forever
  //when the component unmounts, it will remove the eventlistener from the window keeping it clean
  //Mounting means React is creating a component and putting it into the DOM for the first time.
  //The useEffect() hook with no dependencies ([]) runs once, right after it’s added to the DOM.
  //Unmounting means React is removing a component from the DOM — usually because the user navigated away, or conditional rendering hides it.
  //so your telling me unless i opened the signup page it is not in the DOM, Until you navigate to that page, the component doesn’t exist in the DOM — it’s not mounted yet.
  const handleBars = () =>{
    setbars(!bar)
  }
  useEffect(()=>{
    const handleClose = (e) => {
      if(barsRef.current && !barsRef.current.contains(e.target) && !searchbar.current.contains(e.target)){
        setbars(false)
      }
    }

    window.addEventListener('click', handleClose)
    return ()=> window.removeEventListener('click', handleClose)
  },[])
  return (
    <div className={`nav-bar ${Dark}`}>
        <div className="logo">
          {lang === 'English' ? <Link to='/'><h3>H-library</h3></Link> : <Link to='/'><h3>ኤች-ላይብረሪ</h3></Link>}
          <select name="language" id="" onChange={(e)=>setlang(e.target.value)}>
            <option value="English">English</option>
            <option value="Amharic">አማርኛ</option>        
          </select>
        </div>
        <div className={`right-side ${search}`} ref={searchbar}> 
            <i class="fa-solid fa-share-nodes"></i>
             <img src={Dark ? day :night } alt="modeicon" onClick={()=>setDark(!Dark)} />
            <input type="text" placeholder='search for book name, author...' onClick={(e)=>e.stopPropagation()}/> 
            <i class="fa-solid fa-magnifying-glass" onClick={handlesearch}></i>
            {lang === 'English' ? <Link to='/signup'><p>Login/sign-up</p></Link> : <Link to='/signup'><p>ይግቡ/ይመዝገቡ</p></Link>}
            <Link to='/cart'><i class="fa-solid fa-cart-shopping"></i></Link> 
            <i class="fa-solid fa-bars" onClick={handleBars}></i>
        </div>
        <div className={`menu-bar ${bar} `}>
          <div className="menu-pages" ref={barsRef} >
             <Link to='/profile'>
              <div className="profile">
                 <img src={profile} alt="" />
                 <p>username</p>
              </div>
              </Link>
              <div className="options">
                <Link to='/mybooks'><p>My Books</p></Link> 
                <Link to='/sellbooks'><p>Sell Books</p></Link>
              </div>
          </div>
        </div>
    </div>
  )
}

export default NavBar