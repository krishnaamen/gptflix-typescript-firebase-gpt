import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { gptMovieResults, searchMovies } = useSelector((state: any) => state.gpt);
  if (!searchMovies) return null;

  return (
    <div className="text-white z-10">
      {searchMovies.map((searchMovie: string,index:number) => 
      <MovieList key={searchMovie} movies={gptMovieResults[index]} title={searchMovie} />
      )
    }
    </div>
  )
}

export default GptMovieSuggestion