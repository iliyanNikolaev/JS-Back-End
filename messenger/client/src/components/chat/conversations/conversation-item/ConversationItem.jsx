import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ConversationItem({
    userId
}) {
    const [participant, setParticipant] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3030/api/users/${userId}`)
            .then(res => res.json())
            .then(data => setParticipant(data));
    }, []);

    return (
        <>
            {participant ? <Link> {participant.username} </Link> : <p>Loading...</p>}
        </>
    )
}
