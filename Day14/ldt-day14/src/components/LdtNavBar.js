import { Link } from 'react-router-dom';

const LdtNavBar = () => (
  <nav>
    <ul className="navbar">
      <li><Link to="/">Trang chủ</Link></li>
      <li><Link to="/users">Danh sách User</Link></li>
      <li><Link to="/create">Thêm mới User</Link></li>
    </ul>
  </nav>
);

export default LdtNavBar;
