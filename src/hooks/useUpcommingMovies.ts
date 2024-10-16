import { useDispatch, useSelector } from "react-redux"
import { addUpcommingMovies } from "../utils/movieSlice"
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constant"


const useUpcommingMovies = () => {
    const dispatch = useDispatch()
    const upcommingMovies = useSelector((store: { movies: any }) => store.movies?.upcommingMovies)

    const fetchUpcommingMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)
        const data = await response.json()
        dispatch(addUpcommingMovies(data.results))
    }
    useEffect(() => {
        if (!upcommingMovies) {
            fetchUpcommingMovies();
        }
    }, [])

}
export default useUpcommingMovies;