import { useSelector } from "react-redux"
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const movies = useSelector((store: { movies: any }) => store.movies);
    if (!movies) {
        return <div className="text-white">Loading...</div>
    }
    const nowPlayingMovies = movies?.nowPlayingMovies;
    const popularMovies = movies?.popularMovies;
    const topRatedMovies = movies?.topRatedMovies;
    const upcommingMovies = movies?.upcommingMovies;
    return (
        <div className="mt-32">
            <MovieList movies={nowPlayingMovies} title="Now Playing" />
            <MovieList movies={popularMovies} title="Popular" />
            <MovieList movies={topRatedMovies} title="Top Rated" />
            <MovieList movies={upcommingMovies} title="Up Comming" />
        </div>


    )
}

export default SecondaryContainer;