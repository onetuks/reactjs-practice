import { Link } from 'react-router-dom';

function Header() {
    return <ul>
        <li>
            <Link to="/">home</Link>
        </li>
        <li>
            <Link to="/about">about</Link>
        </li>
    </ul>
    ;
}

export default Header;