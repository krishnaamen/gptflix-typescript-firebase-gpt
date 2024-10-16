import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant';
import { addTrailerVideo } from '../utils/movieSlice';
import { useDispatch, useSelector } from 'react-redux';

interface VideoBackgroundProps {
    movieid: string;
}

const VideoBackground = ({ movieid }: VideoBackgroundProps) => {
    const url = useSelector((store: { movies: { trailerVideo: string } }) => store.movies?.trailerVideo);
    const dispatch = useDispatch();
    const getMovieVideo = async () => {

        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieid}/videos?language=en-US`, API_OPTIONS);
        const data = await response.json();
        interface Video {
            type: string;
            // Add other properties if needed
        }
        const trailers = data.results.filter((video: Video) => video.type === 'Trailer');
        const trailer = trailers.length ? trailers[0] : data.results[1];
        const url = `https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1`;
        dispatch(addTrailerVideo(url));

    }
    useEffect(() => {
        getMovieVideo();
    }, [])

    return (
        <div>
            <iframe className="w-screen aspect-video" src={url} title="YouTube video player" allow="accelerometer; autoPlay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>

        </div>
    )
}

export default VideoBackground