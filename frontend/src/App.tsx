import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { About } from './components/About/About';
import { Login } from './components/Login/Login';

import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
