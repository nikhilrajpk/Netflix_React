import React, { Suspense, useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import { MovieProvider } from './Contexts/MovieContext'
import Home from './Pages/Home'
const MovieDisplay = React.lazy(()=>import('./Pages/MovieDisplay'))

function App() {
  const [movie, setMovie] = useState('')

  const handleMovie = (movie) =>{
    setMovie(movie)
  }

  return (
    <MovieProvider value={{movie, handleMovie}}>
      <div className="app">
        < Router >
          < Suspense fallback={<div>Loading...</div>} >
            < Routes >
                < Route path='/' element={< Home />} />
                < Route path='/movie-display' element={< MovieDisplay />} />
            </Routes>
          </Suspense>
        </Router>
      </div>
    </MovieProvider>
  )
}

export default App
