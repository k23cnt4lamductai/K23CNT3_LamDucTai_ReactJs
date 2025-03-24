import { useState, useEffect } from 'react';
import { getUser, updateUser } from '../api/api';
import { useNavigate, useParams } from 'react-router-dom';

const LdtEditUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({ Ldt_name: '', Ldt_email: '', Ldt_phone: '', Ldt_active: false });
  const navigate = useNavigate();

  useEffect(() => {
    getUser(id).then(response => setUser(response.data));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(id, user).then(() => navigate('/users'));
  };

  return (
    <div className="container">
      <h2 className="title">Sửa thông tin User</h2>
      <form onSubmit={handleSubmit} className="user-form">
        <input type="text" value={user.Ldt_name} onChange={e => setUser({...user, Ldt_name: e.target.value})} />
        <input type="email" value={user.Ldt_email} onChange={e => setUser({...user, Ldt_email: e.target.value})} />
        <input type="text" value={user.Ldt_phone} onChange={e => setUser({...user, Ldt_phone: e.target.value})} />
        <div>
          <label>
            <input type="radio" name="active" checked={user.Ldt_active} onChange={() => setUser({...user, Ldt_active: true})} />
            Hoạt động
          </label>
          <label>
            <input type="radio" name="active" checked={!user.Ldt_active} onChange={() => setUser({...user, Ldt_active: false})} />
            Đang khóa
          </label>
        </div>
        <button type="submit" className="btn">Update</button>
        <button type="button" onClick={() => navigate('/users')} className="btn">Back</button>
      </form>
    </div>
  );
};

export default LdtEditUser;
