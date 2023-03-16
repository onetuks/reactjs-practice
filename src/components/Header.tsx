import { Link, useNavigate } from "react-router-dom";

function Header() {
/**
 * react-router-dom.useNavigate()
 * - 리다이렉트하는 용도로 사용
 * - 접근권한이 없는 부적절한 접근 차단 기능
 * - 뒤로가기 기능
 * - useNavigate()는 최상위 레벨에 삽입할 수 없음. 
 *  -> 반드시 다른 컴포넌트 범위 내에서 사용해야 함.
 */
  const navigate = useNavigate();
  function onAboutClick() {
    navigate("/about");
  }

  return (
    <ul>
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <button onClick={onAboutClick}>About</button>
      </li>
    </ul>
  );
}

export default Header;
