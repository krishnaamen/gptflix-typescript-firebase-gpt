import { useDispatch } from "react-redux"
import { addTopRatedMovies } from "../utils/movieSlice"
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constant"


const useTopRatedMovies = () => {
    const dispatch = useDispatch()

    const fetchTopRatedMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)
        const data = await response.json()
        dispatch(addTopRatedMovies(data.results))
    }
    useEffect(() => {
        fetchTopRatedMovies()
    }, [])

}
export default useTopRatedMovies;