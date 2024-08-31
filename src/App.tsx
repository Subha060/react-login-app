import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import NavBar from './components/navBar'
import SignInThree from './components/SignInThree'

import './App.css'
import MouseFollow from './components/mouseFollow'
import DarkMode from './components/darkMode'


function App() {

  return (
    <div className=' lg:px-7 '>
    <nav>
    <NavBar/>
    </nav>
    <DarkMode />
    <main className=' py-7 lg:py-0 '>
      <SignInThree />
    </main>
    
    <MouseFollow />
    </div>
  )
}

export default App
