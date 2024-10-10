import React, { useState, useRef } from 'react';
import Header from './Header';


const Login: React.FC = () => {
    const email = useRef(null)
    const password = useRef(null)
    const name = useRef(null)
    const [error, setError] = useState('');
    const [isSignup, setIsSignup] = useState(false);




    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            console.log('Login successful',email?.current?.value, password?.current?.value);
        } catch (err) {
            setError('Failed to login');
        }
    };

    const handleToggle = () => {
        setIsSignup(!isSignup);
    }

    return (
        <>
            <Header />

            <div className='absolute'>
                <img className='' src="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/DK-en-20241008-TRIFECTA-perspective_8de77145-a891-4bd2-8f1f-d603aea8878a_large.jpg" alt="" />

            </div>


            <form className='absolute my-36 bg-black p-12  md:w-4/12 rounded-2xl  mx-auto left-0 right-0 '>

                <h1 className='text-2xl text-white mx-2 py-4'>{!isSignup ? "Sign In" : "Sign Up"}</h1>
                {isSignup &&
                    <input
                        type="text"
                        id="name"
                        ref={name}
                        required
                        className='w-full bg-gray-700 text-white rounded p-2 m-2'
                        placeholder='Your name'

                    />

                }
                <input
                    type="email"
                    id="email"
                    ref={email}
                    required
                    className='w-full bg-gray-700 text-white rounded p-2 m-2'
                    placeholder='Email'

                />



                <input
                    type="password"
                    id="password"
                    ref={password}
                    required
                    className='w-full bg-gray-700 text-white rounded p-2 m-2'
                    placeholder='Password'
                />

                <button className="bg-red-500 w-full rounded text-white p-2 m-2" type="submit" onClick={handleLogin}>{!isSignup ? "Sign In" : "Sign Up"}</button>
                <p className='text-white cursor-pointer' onClick={handleToggle}> {isSignup ? "Sign In" : "Don't have account? Sign Up here"} </p>
            </form>



        </>

    );
};

export default Login;