
import './App.scss'
import Notfound from './pages/Notfound'
import Home from './pages/Home'
import { Routes,Route } from 'react-router-dom'
import AdminLogin from './pages/AdminLogin'
import AdminPost from './pages/AdminPost'

import "./styles/main.scss";


function App() {

  return (
    <div>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/admin' element={<AdminLogin/>}/>
      <Route path='/admin/posts' element={<AdminPost/>}/>
      <Route path='*' element={<Notfound/>}/>
    </Routes>
    </div>
  )
}

export default App