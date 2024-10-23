import { useState } from 'react'
import {BrowserRouter as Router, Routes ,Route,Navigate} from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />}>
        <Route path="/" element={<Login />}></Route>
        </Route>
      </Routes>

    </Router>
  )
}

export default App
