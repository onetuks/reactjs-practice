import { Link, Outlet, useParams } from "react-router-dom";
import { users } from "../db";

function User() {
    const { userId } = useParams();
    const username = users[Number(userId)-1].name;
    return <div>
        <h1>User</h1>
        <p>UserId: {userId} has name of {username}.</p>
        <hr/>
        <Link to="followers">See followers</Link>
        <Outlet context={{ username: username }}/>
    </div>;
}

export default User;