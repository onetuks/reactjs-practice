import { useOutletContext } from "react-router-dom";

interface IFollowersContext {
    username: string,
}

/**
 * useOutletContext() < react-router-dom@6.x
 * - Outlet 컴포넌트에서 context props를 통해 전달된 context를 수신하는 메소드.
 * - 그냥 함수 자체를 사용해도 된다. -> console.log(userOutletContext());
 * - typescript에서는 interface 지정해주어야 한다. 
 */
function Followers() {
    const { username } = useOutletContext<IFollowersContext>();
    return <h1>Here are {username}'s Followers</h1>;
}

export default Followers;