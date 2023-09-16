import './messenger.css'
import { useNavigate } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../../context/userContext';
import { getAllUsers } from '../../services/userService';
import { getAllConversationsByUserId } from '../../services/conversationService';

export default function Messenger() {
    const navigate = useNavigate();
    const { authData } = useContext(UserContext);

    const [allUsers, setAllUsers] = useState(null);
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const users = await getAllUsers();
                setAllUsers(users);
            } catch (err) {
                alert(err.message);
            }
        }

        fetchUsers();
    }, []);

    const [conversations, setConversations] = useState(null);
    useEffect(() => {
        if(!authData.username){
            navigate('/');
        }
        const getUserConversations = async () => {
            try {
                const conversations = await getAllConversationsByUserId(authData?._id);
                setConversations(conversations);
            } catch (err) {
                alert(err.message);
            }
        }

        getUserConversations();
    }, [])

    return (

        <div className="messenger-container">
            <div className="conversations">coversations</div>
            <div className="chat">chat</div>

            <div className="all-users">
                {!allUsers && <p>Loading...</p>}

                {allUsers && <ul>
                    {allUsers.map(u => <li key={u._id}>{u.username}</li>)}
                </ul>}
            </div>
        </div>
    )
}
