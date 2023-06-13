import { Link, useNavigate } from "react-router-dom";

const Navigation = () => {

    const navigate = useNavigate();
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

    }

    return (<>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/" onClick={nevigateToHome}>Tenant Management </Link>
            {/* <ng-container *ngIf="isUserLogedIn()"> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item" >
                        {/* *ngIf="!isTenant && isUserVerified()" */}
                        <Link to="/tenantList" onClick={moveToTenantdList} className="nav-link">Tenant</Link>
                    </li>
                    <li className="nav-item active" >
                        {/* *ngIf="!isTenant  && isUserVerified()" */}
                        <Link to="/roomlist" className="nav-link">Room </Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/profile" onClick={navigateToProfile} className="nav-link"> userName  </Link>
                    </li>
                    <li className="nav-item active">
                        <Link onClick={signOut} className="nav-link">SignOut </Link>
                    </li>
                </ul>
            </div>
            {/* </ng - container > */}

        </nav >

    </>)
}

export default Navigation;