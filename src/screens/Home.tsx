import { Link, useSearchParams } from "react-router-dom";
import { users } from "../db";

function Home() {
    const [readSearchParams, setSearchParams] = useSearchParams();

    setTimeout(() => {
        setSearchParams({
            day:'today',
            tomorrow: '123',
        })
    }, 3000);
    console.log(readSearchParams.get("123"));

    return <div>
        <h1>Home</h1>
        <ul>
            {users.map((user, key) => (
                <li><Link key={key} to={`/user/${user.id}`}>{user.name}</Link></li>
            ))}
        </ul>
    </div>;
}
export default Home;