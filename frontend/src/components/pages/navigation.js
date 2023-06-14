import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../context/auth-context";
import { useContext, useEffect, useState } from "react";

const Navigation = () => {
    const [user, setUser] = useState({
        name: '',
        _id: '',
        email: '',
        role: '',
        phoneNumber: ''
    });
    const navigate = useNavigate();
    const authContextValue = useContext(AuthContext);

    useEffect(() => {
        const getUser = async () => {
            const requestBody = {
                query: `
              query{
                user(userId:"${authContextValue.userId}"){
                  name
                  _id
                  email
                  role
                  phoneNumber
                }
              }
              `
            };
            const request = await fetch('http://localhost:8000/graphql', {
                method: 'POST',
                body: JSON.stringify(requestBody),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const response = await request.json();
            setUser({
                name: response.data.user.name,
                _id: response.data.user._id,
                email: response.data.user.email,
                role: response.data.user.role,
                phoneNumber: response.data.user.phoneNumber
            })
        }
        getUser();
    }, [authContextValue.userId])

    const nevigateToHome = () => {
        navigate('/');
    }

    const moveToTenantdList = () => {
        navigate('/tenantList');
    }

    const navigateToProfile = () => {
        navigate('/profile');
    }

    const signOut = () => {
        authContextValue.logout();
    }

    return (<>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/" onClick={nevigateToHome}>Tenant Management </Link>
            {authContextValue.token ? <>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {user.role !== 'Tenant' ? <><li className="nav-item" >
                            <Link to="/tenantList" onClick={moveToTenantdList} className="nav-link">Tenant</Link>
                        </li>
                            <li className="nav-item active" >
                                <Link to="/roomlist" className="nav-link">Room </Link>
                            </li></> : <></>}

                        <li className="nav-item active">
                            <Link to="/profile" onClick={navigateToProfile} className="nav-link"> {user.name}  </Link>
                        </li>
                        <li className="nav-item active">
                            <Link onClick={signOut} className="nav-link">SignOut </Link>
                        </li>
                    </ul>
                </div>
            </> : <></>}
        </nav >
    </>)
}

export default Navigation;