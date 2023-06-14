import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import TenantList from '../pages/tenantList';
import Tenant from '../pages/tenant';
import Dashboard from '../pages/dashboard';
import Navigation from '../pages/navigation';
import Profile from '../pages/profile';
import RoomList from '../pages/roomList';
import Login from './login';
import { useState } from 'react';
import AuthContext from '../../context/auth-context';


const NavigationBar = () => {
  const [auth, setAuth] = useState({
    token: null,
    userId: null,
  })

  const login = (token, userId, tokenExpiration) => {
    setAuth({ token: token, userId: userId });
  };

  const logout = () => {
    setAuth({ token: null, userId: null });
  };

  return (<>

    <BrowserRouter>
      <AuthContext.Provider value={{
        token: auth.token,
        userId: auth.userId,
        login: login,
        logout: logout
      }}>
        <Navigation></Navigation>
        <Routes>
          {auth.token && <Route path="/" element={<Dashboard />} />}
          {auth.token && <Route path="/tenant" element={<Tenant />} />}
          {auth.token && <Route path="/tenantList" element={<TenantList />} />}
          {auth.token && <Route path="/profile" element={<Profile />} />}
          {auth.token && <Route path="/roomlist" element={<RoomList />} />}
          {auth.token && <Route path="/Login" element={<Navigate replace to="/" />} />}
          {!auth.token && <Route path="/Login" element={<Login />} />}
          {!auth.token && <Route path="/" element={<Navigate replace to="/Login" />} />}
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter >
  </>)
}

export default NavigationBar;