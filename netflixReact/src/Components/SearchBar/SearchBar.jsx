import React, { useEffect, useState } from 'react'
import './SearchBar.css'
import Arrow from '../Arrow/Arrow'
import axios from '../../axios'
import { API_KEY } from '../../requests'
import Loader from '../../utils/Loader/Loader'
import SearchResult from '../SearchResult/SearchResult'

function SearchBar() {
    const [searchText, setSearchText] = useState('')
    const [loading, setLoading] = useState(false)
    const [results, setResults] = useState([])

    useEffect(()=>{
        setLoading(true)
        async function searchData (){
            try{
                const response = await axios.get(`/search/movie?api_key=${API_KEY}&query=${searchText}&include_adult=false&language=en-US&page=1`)
                setResults(response.data.results)
            }catch(err){
                console.log(err.message)
            }
            finally{
                setLoading(false)
            }
        }
        searchData()
    },[searchText])
  return (
    <div className='searchBar_full'>
        < Arrow />
        <div className="search_div">
            <input type="text" className='searchbar'
                placeholder='Enter movie or shows'
                value={searchText}
                onChange={(e)=>setSearchText(e.target.value)}
            />
        </div>
        <div className='search_results'>
        {
            loading ? 
                < Loader /> : < SearchResult results={results} />
        }
        </div>
    </div>
  )
}

export default SearchBar