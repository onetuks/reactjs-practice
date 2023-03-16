import { Link, Outlet, useParams } from "react-router-dom";
import { users } from "../db";

/** 
 * Outlet
 * - react-router-dom 내장 컴포넌트
 * - 현재 컴포넌트에 Router.tsx에 선언한 children이 존재하는 경우 자식 컴포넌트를 렌더링하기 위한 컴포넌트
 * - createBrowserRouter() 메소드(@6.x 버전) 사용 시 활용
*/

function User() {
    const { userId } = useParams();
    const username = users[Number(userId)-1].name;
    return <div>
        <h1>User</h1>
        <p>UserId: {userId} has name of {username}.</p>
        <hr/>
        <Link to="followers">See {username}'s followers.</Link>
        <Outlet />
    </div>;
}

export default User;