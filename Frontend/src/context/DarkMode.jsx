import React, {createContext, useEffect, useState} from 'react'


export const DarkMode = createContext(null)

function DarkModeProvider({children}) {
    //Everything in localStorage is always stored as a string.
    //JSON.parse() is used to convert JSON string from an API response or localStorage to javascript object or booleans or others
  //JSON.stringify() is the opposite of JSON.parse() - it converts JavaScript values to JSON strings
    const [Dark, setDark] = useState(()=>{
    const saved = localStorage.getItem('dark-mode')
    return saved ? JSON.parse(saved) : false
  })
  const DarkModeValue = {Dark, setDark}

  useEffect(()=>{
    localStorage.setItem('dark-mode', JSON.stringify(Dark))
  }, [Dark])
  return (
    <DarkMode.Provider value={DarkModeValue}>
        {children}
    </DarkMode.Provider>
  )
}

export default DarkModeProvider