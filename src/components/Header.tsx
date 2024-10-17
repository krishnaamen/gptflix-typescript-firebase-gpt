import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import logo from '../assets/logo.png';
import { toggleGptSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/langconstant';
import { changeLanguage } from '../utils/configSlice';
// Assuming you have some CSS for styling

const Header: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state: { user: { uid: string; email: string; displayName: string; photoURL: string } }) => state.user);
    const searchView = useSelector((state: { gpt: { showGptSearchView: boolean } }) => state.gpt.showGptSearchView);



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({
                    uid: uid, email: email, displayName: displayName, photoURL: photoURL
                }));
                navigate('/browse');


            } else {
                dispatch(removeUser());
                navigate('/');


            }
        });
        return () => unsubscribe();

    }, [dispatch, navigate]);

    const handleLogout = () => {
        signOut(auth).then(() => {
            dispatch(removeUser());
            navigate('/');
        }).catch(() => {
            // An error happened.
        });
    }
    const handleGptSearch = () => {
        dispatch(toggleGptSearchView()); // or any appropriate payload
    }
    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(changeLanguage(e.target.value));
    }
    return (

        <>
            <div className='flex flex-col md:flex-row md:justify-around p-2'>
                <div className='w-screen z-50 px-8 py-2 flex justify-center  md:justify-between bg-gradient-to-b from-black'>
                    <Link to="/"><img className='w-44 h-20' src={logo} alt="logo" /></Link>
                </div>





                {user && <>
                    <div className=' bg-opacity-70 flex justify-center text-white z-30'>
                        <img className='p-10 w-32  md:w-15 flex justify-center   text-white z-30 md:p-4' src={user?.photoURL} alt="photo" />
                    </div>
                    {searchView &&
                        <div className='bg-opacity-70 flex justify-center mb-2 md:mb-0 md:mr-1 text-white z-30'>
                            <select name="" id="" className='w-full md:w-24 rounded-lg  p-2 bg-red-700  justify-center flex md:w-30 md:h-10  text-blue-900 z-30 hover:underline' onChange={handleLanguageChange}>
                                {SUPPORTED_LANGUAGES.map((lang) => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
                            </select>
                        </div>
                    }

                    <div className=' bg-opacity-70 flex justify-center text-white md:mr-1 z-30'>
                        <button onClick={handleLogout} className=' w-full mb-1 md:w-24 rounded-lg p-2 bg-red-700  justify-center flex md:h-10  text-blue-900 z-30 hover:underline'>Logout</button>
                    </div>

                    <div className=' bg-opacity-70 flex justify-center text-white  md:mr-1 z-30'>
                        <button className='w-full mb-1 md:w-24 rounded-lg p-2 bg-red-700  justify-center flex  md:h-10  text-blue-900 z-30 hover:underline' onClick={handleGptSearch}>{searchView ? "Homepage" : "GptSearch"}</button>
                    </div>
                    <div className='bg-opacity-70 flex justify-center text-white  md:mr-1 z-30'>
                        <button className='w-full mb-1 md:mb-0 md:w-24 rounded-lg p-2 bg-red-700  justify-center flex  md:h-10  text-blue-900 z-30 hover:underline'>{user?.displayName}</button>
                    </div>

                </>}


            </div>


        </>


    );
};

export default Header;