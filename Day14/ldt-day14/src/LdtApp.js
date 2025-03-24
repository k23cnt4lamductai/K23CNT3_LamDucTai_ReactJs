import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LdtNavBar from './components/LdtNavBar';
import LdtHome from './components/LdtHome';
import LdtListUsers from './components/LdtListUsers';
import LdtCreateUser from './components/LdtCreateUser';
import LdtEditUser from './components/LdtEditUser';
import './styles.css';

const LdtApp = () => (
  <Router>
    <LdtNavBar />
    <Routes>
      <Route path="/" element={<LdtHome />} />
      <Route path="/users" element={<LdtListUsers />} />
      <Route path="/create" element={<LdtCreateUser />} />
      <Route path="/edit/:id" element={<LdtEditUser />} />
    </Routes>
  </Router>
);

export default LdtApp;
