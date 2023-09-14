import { useContext ,useEffect, useState } from "react";
import { UserContext } from "../../../../../context/userContext";
import { Link } from "react-router-dom";

export default function ConversationItem({
    conversation
}) {
    const { authData } = useContext(UserContext);

    const [participant, setParticipant] = useState(null);
    
    useEffect(() => {
        const participantId = conversation.members.find(x => x != authData._id);

        fetch(`http://localhost:3030/api/users/${participantId}`)
            .then(res => res.json())
            .then(data => setParticipant(data))
            .catch(err => alert(err.message));
    }, []);

    return (
        <>
            { participant 
            ?<> <Link>{participant.username}</Link></>
            : <p>Loading...</p>}
        </>
    )
}
