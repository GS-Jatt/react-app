
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Form from './pages/login'
import Page2 from './pages/page2'

function App() {

  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Form/>} />
        <Route path='page2' element={<Page2/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
