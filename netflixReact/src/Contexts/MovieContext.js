import { createContext, useContext } from "react";

// Creating context for movie
export const MovieContext = createContext({
    movie : '',
    handleMovie : ()=>{},
})

// Movie context provider
export const MovieProvider = MovieContext.Provider;


// consuming the movie context 
export default function useMovie(){
    return useContext(MovieContext)
}