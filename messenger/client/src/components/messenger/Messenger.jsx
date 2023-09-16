import './messenger.css'
import { useNavigate } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../../context/userContext';

import { getAllUsers } from '../../services/userService';
import { getAllConversationsByUserId } from '../../services/conversationService';

import Conversation from '../conversation/Conversation';
import { getMessagesByConversationId } from '../../services/messageService';

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
        if (!authData.username) {
            navigate('/');
        }
        const getUserConversations = async () => {
            try {
                const conversations = await getAllConversationsByUserId(authData._id);
                setConversations(conversations);
            } catch (err) {
                alert(err.message);
            }
        }

        getUserConversations();
    }, []);

    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState(null);
    useEffect(() => {
        const conversationId = currentChat?._id;

        const getMessages = async () => {
            try {
                const messages = await getMessagesByConversationId(conversationId);
                setMessages(messages);
            } catch (err) {
                alert(err.message);
            }
        }

        getMessages();
    }, [currentChat]);


    return (

        <div className="messenger-container">
            <div className="conversations">
                {!conversations && <p>Loading...</p>}

                {conversations && conversations.map(c =>
                    <div key={c._id} onClick={() => setCurrentChat(c)}>
                        <Conversation conversation={c} currentUser={authData} />
                    </div>
                )}
            </div>

            <div className="chat">
                {!currentChat && <p>Open a conversation to start a chat..</p>}
                
                {currentChat && <>
                    {!messages && <p>Loading...</p>}

                    {messages && <>
                        {messages.length == 0
                            ? <p>No messages yet in this conversation</p>
                            : <ul>
                                {messages.map(m => <li key={m._id}><strong>{m.sender}</strong>: {m.text}</li>)}
                            </ul>}
                    </>}
                </>}
            </div>

            <div className="all-users">
                {!allUsers && <p>Loading...</p>}

                {allUsers && <ul>
                    {allUsers.map(u => <li key={u._id}>{u.username} {u._id == authData._id && '(You)'}</li>)}
                </ul>}
            </div>
        </div>
    )
}
