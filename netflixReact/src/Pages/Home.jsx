import React from 'react'
import Row from '../Components/Row/Row'
import requests from '../requests'
import Banner from '../Components/Banner/Banner'
import Nav from '../Components/Nav/Nav'

function Home() {
  return (
    <>
        < Nav />
        < Banner />
        < Row title={"NETFLIX ORIGINALS"} fetchUrl={requests.fetchOriginals} isHighPoster />
        < Row title={"Trending Now"} fetchUrl={requests.fetchTrending} />
        < Row title={"Top Rated"} fetchUrl={requests.fetchTopRated} />
        < Row title={"Action Movies"} fetchUrl={requests.fetchAction} />
        < Row title={"Comedy Movies"} fetchUrl={requests.fetchComedy} />
        < Row title={"Horror Movies"} fetchUrl={requests.fetchHorror} />
        < Row title={"Romance"} fetchUrl={requests.fetchRomance} />
        < Row title={"Documenteries"} fetchUrl={requests.fetchDocumenteries} />   
    </>
  )
}

export default Home