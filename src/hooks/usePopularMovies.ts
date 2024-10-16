import { useDispatch, useSelector } from "react-redux"
import { addPopularMovies } from "../utils/movieSlice"
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constant"


const usePopularMovies = () => {
    const dispatch = useDispatch()
    const popularMovies = useSelector((store: { movies: any }) => store.movies?.popularMovies)

    const fetchPopularMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
        const data = await response.json()
        dispatch(addPopularMovies(data.results))
    }
    useEffect(() => {
        
        if (!popularMovies) {
            fetchPopularMovies();
        }

    }, [])

}
export default usePopularMovies;