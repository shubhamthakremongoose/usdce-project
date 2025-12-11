import { useState } from 'react'
import './App.css'
import Home from './components/home'
import BackgroundBlocks from './components/common/BackgroundBlocks'

function App() {
  return (
    <div>
      <BackgroundBlocks/>
      <Home/>
    </div>
  )
}

export default App
