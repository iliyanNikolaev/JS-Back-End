import { Link } from "react-router-dom";

export default function AllUsers({
    allUsers
}) {
    return (
        <>
            {
                allUsers
                    ? <>{allUsers.map(x => <Link key={x._id} className="user-link"> {x.username} </Link>)}</>
                    : <>Loading...</>
            }
        </>
    )
}
