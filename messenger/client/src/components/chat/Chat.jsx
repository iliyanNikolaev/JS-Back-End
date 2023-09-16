import './chat.css'
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../context/userContext';

import AllUsers from './all-users/AllUsers';
import Conversations from './conversations/Conversations';
import CurrentConversation from './current-conversation/CurrentConversation';

export default function Chat() {
    const navigate = useNavigate();

    const { authData } = useContext(UserContext);

    const [allUsers, setAllUsers] = useState(null);

    const [currentChat, setCurrentChat] = useState(null);

    useEffect(() => {
        if (!authData.username) {
            return navigate('/');
        }


        fetch('http://localhost:3030/api/users')
            .then(res => res.json())
            .then(data => setAllUsers(data))
            .catch(err => alert(err.message));
    }, []);

    async function startConversation(conversationId) {
        try {
            const res = await fetch(`http://localhost:3030/api/messages/${conversationId}`);
            const chat = await res.json();

            setCurrentChat(chat);
        } catch (err) {
            alert(err.message);
        }
    }

    return (
        <div className="chat-container">
            <div className="conversations"><Conversations startConversation={startConversation}/></div>
            <div className="chat-content"><CurrentConversation chat={currentChat} /></div>
            <div className="all-users">
                {<AllUsers allUsers={allUsers} startConversation={startConversation}/>}
            </div>
        </div>
    )
}
