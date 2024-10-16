import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";



const useMovieTrailer = (movieid: string) => {


    const dispatch = useDispatch();
    const trailerVideo = useSelector((store: { movies: any }) => store.movies?.trailerVideo);
    const getMovieVideo = async () => {

        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieid}/videos?language=en-US`, API_OPTIONS);
        const data = await response.json();
        interface Video {
            type: string;
            // Add other properties if needed
        }
        const trailers = data.results.filter((video: Video) => video.type === 'Trailer');
        const trailer = trailers.length ? trailers[0] : data.results[0];
        const url = `https://www.youtube.com/embed/${trailer.key}`;
        dispatch(addTrailerVideo(url));

    }
    useEffect(() => {
        if (!trailerVideo) {
            getMovieVideo();
        }
    }, [])
}
export default useMovieTrailer;