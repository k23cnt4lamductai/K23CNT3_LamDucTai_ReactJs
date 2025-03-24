import { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../api/api';
import { Link } from 'react-router-dom';

const LdtListUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(response => setUsers(response.data));
  }, []);

  const handleDelete = (id) => {
    deleteUser(id).then(() => setUsers(users.filter(user => user.id !== id)));
  };

  return (
    <div className="container">
      <h2>Danh sách User</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Họ tên</th>
            <th>Email</th>
            <th>Điện thoại</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.Ldt_name}</td>
              <td>{user.Ldt_email}</td>
              <td>{user.Ldt_phone}</td>
              <td>{user.Ldt_active ? "Hoạt động" : "Đang khóa"}</td>
              <td>
                <Link to={`/edit/${user.id}`} className="btn">Sửa</Link>
                <button onClick={() => handleDelete(user.id)} className="btn">Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LdtListUsers;
