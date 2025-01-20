export const API_KEY = "ceeb11cb34dd4ed2dc583dc004912cf3"


const requests = {
    fetchOriginals : `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchAction : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchComedy : `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorror : `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomance : `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumenteries : `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests