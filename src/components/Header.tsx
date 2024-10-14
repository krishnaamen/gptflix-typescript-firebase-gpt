import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { NETFLIX_LOGO } from '../utils/constant';
// Assuming you have some CSS for styling

const Header: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state: { user: { uid: string; email: string; displayName: string; photoURL: string } }) => state.user);




    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({
                    uid: uid, email: email, displayName: displayName, photoURL: photoURL
                }));
                navigate('/browse');


            } else {
                dispatch(removeUser({}));
                navigate('/');


            }
        });
        return () => unsubscribe();

    }, []);

    const handleLogout = () => {
        signOut(auth).then(() => {
            dispatch(removeUser({}));
            navigate('/');
        }).catch(() => {
            // An error happened.
        });
    }
    return (

        <>
            <div className='flex justify-around z-50 p-2'>
                <div className='w-screen z-50 px-8 py-2 bg-gradient-to-b from-black'>
                    <img className='w-44 h-20' src={NETFLIX_LOGO} alt="logo" />
                </div>
                {user && <>
                    <div className=' bg-red-600 text-white z-30'>
                        <button onClick={handleLogout} className='w-20 h-20  bg-red-600 text-white z-30'>Logout</button>
                    </div>
                    <img className='w-15 bg-red-600 text-white z-30 p-4' src={user?.photoURL} alt="photo" />
                    <div className=' bg-red-600 text-white z-30'>
                        <button className='w-20 h-20  bg-red-600 text-white z-30'>{user?.displayName}</button>
                    </div>

                </>}


            </div>


        </>


    );
};

export default Header;