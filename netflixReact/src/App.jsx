import React, { Suspense, useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import { MovieProvider } from './Contexts/MovieContext'
// import Home from './Pages/Home'
import Loader from './utils/Loader/Loader'
import Footer from './Components/Footer/Footer'
const Home = React.lazy(()=> import('./Pages/Home'))
const MovieDisplay = React.lazy(()=>import('./Pages/MovieDisplay'))
const Play = React.lazy(()=>import('./Pages/Play'))
const Search = React.lazy(()=>import('./Pages/Search'))

function App() {
  const [movie, setMovie] = useState('')

  const handleMovie = (movie) =>{
    setMovie(movie)
  }

  return (
    <MovieProvider value={{movie, handleMovie}}>
      <div className="app">
        < Router >
          < Suspense fallback={< Loader />} >
            < Routes >
                < Route path='/' element={< Home />} />
                < Route path='/movie-display' element={< MovieDisplay />} />
                < Route path='/play' element={< Play />} />
                < Route path='/search' element={< Search />} />
            </Routes>
          </Suspense>
        </Router>
        < Footer />
      </div>
    </MovieProvider>
  )
}

export default App
