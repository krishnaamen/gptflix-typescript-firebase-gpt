import React from 'react';
import Header from './Header';
import ParticleBackground from './ParticleBackground';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcommingMovies from '../hooks/useUpcommingMovies';

const Browse: React.FC = () => {
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcommingMovies();
    

    return (
        <div className="relative">
            {/* Particle Background in the background */}
            <ParticleBackground />

            {/* Main content on top of the particles */}
            <div className="relative z-10">
                <Header />
                <MainContainer />
                <SecondaryContainer />

                <div className="h-20 m-8 p-8">
                    <h1 className="my-8">Browse</h1>
                    <p>Welcome to the browse page!</p>
                </div>
            </div>
        </div>
    );
};

export default Browse;
