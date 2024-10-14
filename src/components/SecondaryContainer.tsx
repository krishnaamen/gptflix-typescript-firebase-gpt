import { useSelector } from "react-redux"
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const movies = useSelector((store: { movies: any }) => store.movies);
    if (!movies) {
        return <div className="text-white">Loading...</div>
    }
    const nowPlayingMovies = movies?.nowPlayingMovies;
    return (
        <div >
            <MovieList movies={nowPlayingMovies} title="Now Playing" />
            <MovieList movies={nowPlayingMovies} title="Comedy" />
            <MovieList movies={nowPlayingMovies} title="Drama" />
        </div>


    )
}

export default SecondaryContainer;