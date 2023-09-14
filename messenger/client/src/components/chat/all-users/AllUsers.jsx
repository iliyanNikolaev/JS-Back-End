import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../../context/userContext";

export default function AllUsers({
    allUsers
}) {
    const { authData } = useContext(UserContext);

    return (
        <>
            <h2>All users in the app</h2>
            {
                allUsers
                    ? <>{allUsers.map(x => <Link key={x._id} className="user-link"> {x.username} {x._id == authData._id && '(You)'} </Link>)}</>
                    : <>Loading...</>
            }
        </>
    )
}
