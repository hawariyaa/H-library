import React, { useContext } from 'react'
import NavBar from '../../components/navbar/NavBar'
import './sellbooks.css'
import cloud from '../../assets/cloud.png'
import { DarkMode } from '../../context/DarkMode'

function SellBooks() {
  const {Dark} = useContext(DarkMode)
  return (
    <div className={`sellbooks-section ${Dark}`}>
      <NavBar />
      <div className="sellbooks">
        <h1>Sell you're own Books</h1>
        <div className="sell-each">
           <label htmlFor="">Enter The Name</label>
           <input type="text" placeholder='Enter Name of Book' />
        </div>
        <div className="sell-each">
            <label htmlFor="">Enter The Language</label>
            <input type="text"  placeholder='Enter The Language'/>
        </div>
        <div className="sell-each">
            <label htmlFor="">Enter The Edition</label>
            <input type="text"  placeholder='Enter The Edition' />
        </div>
        <div className="sell-each">
            <label htmlFor="">Enter The category</label>
            <input type="text"  placeholder='Enter The Category' />
        </div>
         <div className="sell-each">
            <label htmlFor="">Enter The file type</label>
            <input type="text"  placeholder='Enter The file type' />
         </div>
        <div className="sell-each">
           <label htmlFor="">Enter The year</label>
           <input type="text"  placeholder='Enter The year'/>
        </div>
         <div className="sell-each">
            <label htmlFor="">Enter The publisher</label>
            <input type="text"  placeholder='Enter The publisher' />
         </div>
        <div className="sell-each">
            <label htmlFor="">Enter The Number of pages</label>
            <input type="text"  placeholder='Enter Number of pages' />
        </div>
         <div className="sell-each">
            <label htmlFor="">Enter The ISBN Number</label>
            <input type="text"  placeholder='Enter The ISBN Number' />
         </div>
         <div className="sell-each">
             <label htmlFor="">Price</label>
             <input type="text"  placeholder='Enter The Price of Book' />
         </div>
        <div className="sell-each">
          <p>Upload Image</p>
         <label htmlFor="imageupload"><img src={cloud} alt="" /></label>
         <input type="file" hidden id='imageupload'  />
        </div> 
        <button>Submit</button>
      </div>    
    </div>
  )
}

export default SellBooks