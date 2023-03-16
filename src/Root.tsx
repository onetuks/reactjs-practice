import { Outlet } from "react-router-dom";
import Header from "./Header";

/* Outlet 컴포넌트
  - createBrowserRouter 메소드 사용 시 써야함.  
*/
function Root() {
  return <div>
    Hi!!
    <Header />
    <Outlet />
  </div>;
}

export default Root;