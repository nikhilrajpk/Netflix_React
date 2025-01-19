import axios from "axios"

// image url for image
export const imgURL="https://image.tmdb.org/t/p/original"

// base url to make requests to the movie
const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
});

export default instance;