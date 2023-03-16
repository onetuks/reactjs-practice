import { useOutletContext } from "react-router-dom";

interface IFollowersContext {
    username: string,
}

function Followers() {
    const { username } = useOutletContext<IFollowersContext>();
    return <h1>Here are {username}'s Followers</h1>;
}

export default Followers;