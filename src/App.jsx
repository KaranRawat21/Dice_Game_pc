
import './App.css'
import FirstPage from './components/FirstPage'
import Game from './components/Game'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<FirstPage />} />
          <Route path='/game' element={<Game />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
