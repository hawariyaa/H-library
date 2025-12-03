import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import BookContextProvider from './context/BookContext.jsx'
import DarkModeProvider from './context/DarkMode.jsx'
import Language from './context/Language.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <DarkModeProvider>
     <GoogleOAuthProvider>
      <BookContextProvider>
        <Language>
             <App />
        </Language>
      </BookContextProvider>
     </GoogleOAuthProvider>
     </DarkModeProvider>
    </BrowserRouter>   
  </StrictMode>,
)
