import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
            <div className='flex justify-around z-50 p-2'>
                <div className='w-screen z-50 px-8 py-2 bg-gradient-to-b from-black'>
                    <img className='w-44 h-20' src={logo} alt="logo" />
                </div>
                {user && <>
                    {searchView && <select name="" id="" className='bg-red-600 flex' onChange={handleLanguageChange}>
                        {SUPPORTED_LANGUAGES.map((lang) => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
                    </select>}

                    <div className=' bg-red-600 text-white z-30'>
                        <button onClick={handleLogout} className='w-20 h-20  bg-red-600 text-blue-900 z-30 hover:underline'>Logout</button>
                    </div>
                    <img className='w-15 bg-red-600 text-white z-30 p-4' src={user?.photoURL} alt="photo" />
                    <div className=' bg-red-600 text-white z-30'>
                        <button className='w-20 h-20  bg-red-600 text-blue-900 z-30 hover:underline' onClick={handleGptSearch}>{searchView ? "Homepage" : "GptSearch"}</button>
                    </div>
                    <div className=' bg-red-600 text-white z-30'>
                        <button className='w-20 h-20  bg-red-600 text-blue-900 z-30 hover:underline'>{user?.displayName}</button>
                    </div>

                </>}


            </div>


        </>


    );
};

export default Header;