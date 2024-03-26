import { useState, useEffect } from 'react'
import './App.css'

import ListOfPersonajes from './components/personajes';

function App() {
  return (
    <div className='container'>
      <ListOfPersonajes/>
    </div>
  )
}

export default App
