import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies = useSelector((store: { movies: any }) => store.movies?.nowPlayingMovies);
    if (!movies) {
        return <div>Loading...</div>
    }
    console.log('movie', movies[1]);

    return (

        <div className='text-white flex'>
            <VideoTitle title={movies[1].title} overview={movies[0].overview} />
            <VideoBackground movieid={movies[0].id} />

        </div>
    )
}

export default MainContainer