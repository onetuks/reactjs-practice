import { useParams } from "react-router-dom";
import { users } from "../db";

function User() {
    // const params = useParams();
    // const userId = params.userId;
    const { userId } = useParams();
    return <div>
        <h1>User</h1>
        <p>UserId: {userId} has name of {users[Number(userId)-1].name}.</p>
    </div>;
}

export default User;