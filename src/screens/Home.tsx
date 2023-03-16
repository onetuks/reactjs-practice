import { Link } from "react-router-dom";
import { users } from "../db";

function Home() {
    return <div>
        <h1>Home</h1>
        <ul>
            {users.map((user, key) => (
                // {`/user/:${user.id}`} 로 할경우 url 파라미터로 전달되는 user.id가 :n 꼴의 문자열로 전달됨.
                <li><Link key={key} to={`/user/${user.id}`}>{user.name}</Link></li>
            ))}
        </ul>
    </div>;
}
export default Home;