import React from 'react';
import Header from './Header';
import ParticleBackground from './ParticleBackground';

const Browse: React.FC = () => {
    return (
        <div>

            <Header />
            {/* <div className='mt-72'>
                <ParticleBackground />
            </div> */}


            <div className='h-20 m-30 p-20'>
                <h1 className='my-30'>Browse</h1>
                <p>Welcome to the browse page!</p>
            </div>

        </div>
    );
};

export default Browse;