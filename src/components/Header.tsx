import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
// Assuming you have some CSS for styling

const Header: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state: { user: { uid: string; email: string; displayName: string; photoURL: string } }) => state.user);




    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
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
            <div className='flex justify-around z-50'>
                <div className='w-screen z-50 px-8 py-2 bg-gradient-to-b from-black'>
                    <img className='w-44' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
                </div>
                {user && <><div className=''>
                    <button onClick={handleLogout} className='w-20 h-20  bg-red-600 text-white z-30'>Logout</button></div><img className='w-15 p-4' src={user?.photoURL} alt="photo" /><h6 className='text-black'>{user?.displayName}</h6></>}


            </div>


        </>


    );
};

export default Header;