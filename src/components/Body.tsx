import React, { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';

import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Body: React.FC = () => {
    const dispatch = useDispatch();



    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {

                const { uid, email, displayName } = user;
                dispatch(addUser({
                    uid: uid, email: email, displayName: displayName
                }));



            } else {
                dispatch(removeUser({}));


            }
        });
    }, []);

    return (
        <div>
        </div>
    );
};

export default Body;