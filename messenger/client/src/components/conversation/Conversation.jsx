import { useState, useEffect } from 'react'
import { getUserById } from '../../services/userService';

export default function Conversation({
    conversation,
    currentUser
}) {

    const [participant, setParticipant] = useState(null);
    useEffect(() => {
        const participantId = conversation.members.find(m => m != currentUser._id);

        const getUser = async () => {
            try {   
                const user = await getUserById(participantId);
                setParticipant(user);
            } catch (err) {
                alert(err.message);
            }
        }

        getUser();
    }, []);

    return (
        <div>
            {!participant && <span>Loading...</span>}

            {participant && <p> {participant.username} </p>}
        </div>
    )
}
