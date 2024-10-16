import { useDispatch } from "react-redux"
import { addNowPlayingMovies } from "../utils/movieSlice"
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constant"


const useNowPlayingMovies = () => {
    const dispatch = useDispatch()

    const fetchMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
        const data = await response.json()
        dispatch(addNowPlayingMovies(data.results))
    }
    useEffect(() => {
        fetchMovies()
    }, [])

}
export default useNowPlayingMovies;