import React, { useState, useRef } from 'react';
import Header from './Header';
import ParticleBackground from './ParticleBackground';
import { checkValiddata } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';



const Login: React.FC = () => {
    const email = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)
    const name = useRef<HTMLInputElement>(null)
    const [error, setError] = useState('');
    const [isSignup, setIsSignup] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();





    const handleButton = async (e: React.FormEvent) => {
        e.preventDefault();

        const data = {
            email: email.current?.value || '',
            password: password.current?.value || '',
            name: name.current?.value || ''
        };
        try {
            const messsage = checkValiddata(data);
            if (messsage !== true) {
                setError(messsage);
                return;
            }
            if (isSignup) {

                createUserWithEmailAndPassword(auth, data.email, data.password)
                    .then((userCredential) => {
                        // Signed up 
                        const user = userCredential.user;


                        updateProfile(user, {
                            displayName: data.name, photoURL: "https://avatars.githubusercontent.com/u/24782689"
                        }).then(() => {
                            if (auth.currentUser) {
                                const { uid, email, displayName, photoURL } = auth.currentUser;
                                dispatch(addUser({
                                    uid: uid,
                                    email: email,
                                    displayName: displayName,
                                    photoURL: photoURL
                                }));
                                navigate('/browse');
                            } else {
                                setError('User not found');
                            }
                        }).catch(() => {
                            // An error occurred
                            // ...
                        });




                        console.log(user);
                        // ...
                    })
                    .catch((error) => {
                        setError(error.message);
                        console.error(error.message);
                        // ..
                    });
            } else {
                signInWithEmailAndPassword(auth, data.email, data.password)
                    .then((userCredential) => {
                        // Signed in 
                        const user = userCredential.user;

                        console.log("after update user", user);

                        if (auth.currentUser) {
                            const { uid, email, displayName, photoURL } = auth.currentUser;
                            dispatch(addUser({
                                uid: uid,
                                email: email,
                                displayName: displayName,
                                photoURL: photoURL
                            }));
                        } else {
                            setError('User not found');
                        }

                        // ...
                    })
                    .catch((error) => {
                        setError(error.message);
                        console.error(error.message);
                    });



            }
        } catch {
            setError('Failed to login');
        }
    };

    const handleToggle = () => {
        setIsSignup(!isSignup);
    }

    return (
        <>
            <ParticleBackground />

            <Header />

            {/* <div className='absolute'>
                <img className='' src="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/DK-en-20241008-TRIFECTA-perspective_8de77145-a891-4bd2-8f1f-d603aea8878a_large.jpg" alt="" />

            </div> */}


            <form className='absolute my-36 bg-red-300 p-12  md:w-4/12 rounded-2xl bg-opacity-50 mx-auto left-0 right-0 '>

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
                <p className='text-red-500'>{error}</p>

                <button className="bg-red-400 w-full rounded bg-opacity-50 text-white p-2 m-2" type="submit" onClick={handleButton}>{!isSignup ? "Sign In" : "Sign Up"}</button>
                <p className='text-white cursor-pointer' onClick={handleToggle}> {isSignup ? "Are you already registered? Sign In" : "Don't have account? Sign Up here"} </p>
            </form>



        </>

    );
};

export default Login;