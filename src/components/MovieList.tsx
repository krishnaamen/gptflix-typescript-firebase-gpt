import MovieCards from "./MovieCards";

interface Movie {
    id: number;
    poster_path: string;
    title: string;
    overview: string;
}

interface MovieListProps {
    movies: Movie[];
    title: string;
}

const MovieList: React.FC<MovieListProps> = ({ movies,title }) => {
    return (
        <div className="m-4">
            <h1 className='text-white text-4xl mb-4'>{title}</h1>

            <div className="flex overflow-x-scroll">
                <div className="flex">
                    {movies?.map((movie) => (
                        <MovieCards key={movie.id} title={movie.title} poster_path={movie.poster_path} />
                    ))}
                </div>
            </div>
        </div>



    )
}

export default MovieList