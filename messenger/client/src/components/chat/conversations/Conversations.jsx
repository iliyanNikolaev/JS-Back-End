import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../../../context/userContext'

import ConversationItem from './conversation-item/ConversationItem';

export default function Conversations() {

    const { authData } = useContext(UserContext);

    const [conversations, setConversations] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3030/api/conversations/${authData._id}`)
            .then(res => res.json())
            .then(data => {
                setConversations(data);
            })
            .catch(err => alert(err.message));
    }, [])
    return (
        <>
            <h2>Your Conversations</h2>
            {conversations
                ? <> {conversations.map(x => <ConversationItem key={x._id} conversation={x} />)} </>
                : <p>Loading...</p>}
        </>
    )
}
