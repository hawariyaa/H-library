import React, { createContext, useEffect, useState } from 'react'

export const language = createContext(null)
function Language({children}) {
  //A refresh is literally the same as closing the app and opening it again. when refreshed the whole react 
  //unmounts and mounts again, so below react first when onmount, tries to fetch from the localStorage
  //after fetching and updating the lang, then goes and stores the state into the localstorage
  //so first check if localstorage has it, if it does use that otherwise use English then store that in 
  //the localStorage for the future
 const [lang, setlang] = useState(()=>{
   const saved = localStorage.getItem('lang-saved')
   return saved ? saved : 'English'
 })
 useEffect(()=>{
   localStorage.setItem('lang-saved', lang )
 })
 const languageValue = {lang, setlang}
  return (
    <language.Provider value={languageValue}>
        {children}
    </language.Provider>

  )
}

export default Language