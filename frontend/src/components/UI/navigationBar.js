import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TenantList from '../pages/tenantList';
import Tenant from '../pages/tenant';
import Dashboard from '../pages/dashboard';
import Navigation from '../pages/navigation';
import Profile from '../pages/profile';
import RoomList from '../pages/roomList';
import Login from './login';


const NavigationBar = () => {
  const isUserLogin = true;
  return (<>

    <Router>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tenant" element={<Tenant />} />
        <Route path="/tenantList" element={<TenantList />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/roomlist" element={<RoomList />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router >
  </>)
}

export default NavigationBar;