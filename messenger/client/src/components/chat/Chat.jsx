import './chat.css'
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../context/userContext';

import AllUsers from './all-users/AllUsers';
import Conversations from './conversations/Conversations';

export default function Chat() {
    const navigate = useNavigate();
    const { authData } = useContext(UserContext);
    if(!authData.username) {
        return navigate('/');
    }

    const [allUsers, setAllUsers] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3030/api/users')
            .then(res => res.json())
            .then(data => setAllUsers(data))
            .catch(err => alert(err.message));
    }, []);

    return (
        <div className="chat-container">
            <div className="conversations"><Conversations/></div>
            <div className="chat-content">chat-content</div>
            <div className="all-users">
                { <AllUsers allUsers={allUsers} />}
            </div>
        </div>
    )
}
