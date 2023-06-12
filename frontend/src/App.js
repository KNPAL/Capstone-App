import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TenantList from './components/pages/tenantList';
import LoginForm from './components/pages/loginForm';

function App() {
  return (
    <div className="App">
      {/* <TenantList></TenantList> */}
      <LoginForm></LoginForm>
      {/* <SignUpForm></SignUpForm> */}
    </div>
  );
}

export default App;
