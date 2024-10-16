import { useDispatch } from "react-redux"
import { addNowPlayingMovies } from "../utils/movieSlice"
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constant"
import { useSelector } from "react-redux"


const useNowPlayingMovies = () => {
    const dispatch = useDispatch()
    const nowPlayingMovies = useSelector((store: { movies: any }) => store.movies?.nowPlayingMovies)    

    const fetchMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
        const data = await response.json()
        dispatch(addNowPlayingMovies(data.results))
    }
    useEffect(() => {
        if (!nowPlayingMovies) {
            fetchMovies();
        }
    }, [])

}
export default useNowPlayingMovies;