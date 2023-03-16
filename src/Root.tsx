import { Outlet } from "react-router-dom";
import Header from "./components/Header";

/* Outlet 컴포넌트
  - createBrowserRouter 메소드 사용 시 써야함.  
  - 현재 컴포넌트에 Router.tsx 에 선언한 children이 있다면 Outlet 컴포넌트를 사용해서 렌더링해야함.
*/
function Root() {
  return <div>
    Hi!!
    <Header />
    <Outlet />
  </div>;
}

export default Root;