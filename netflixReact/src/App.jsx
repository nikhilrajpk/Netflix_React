import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import { MovieProvider } from './Contexts/MovieContext'
import Home from './Pages/Home'

function App() {
  const [movie, setMovie] = useState('')

  const handleMovie = (movie) =>{
    setMovie(movie)
  }

  return (
    <MovieProvider value={{movie, handleMovie}}>
      <div className="app">
        < Router >
          < Routes >
            < Route path='/' element={< Home />} />
          </Routes>
        </Router>
      </div>
    </MovieProvider>
  )
}

export default App
