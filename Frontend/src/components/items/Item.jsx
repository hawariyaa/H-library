import React, { useContext } from 'react'
import './item.css'
import { DarkMode } from '../../context/DarkMode'
import { language } from '../../context/Language'


function Item({image, category, price}) {
  const {lang} = useContext(language)
  return (
    <div className='item'>
       <img src={image} alt="book image" />
       {lang === 'English' ? <p>category: {category}</p> : <p>ምድብ: {category}</p>}
       {lang === 'English' ? <p>price: {price} Birr</p> :  <p>ዋጋ: {price} ብር</p>}
    </div>
  )
}

export default Item