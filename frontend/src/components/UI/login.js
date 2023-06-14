import { useState } from "react";
import LoginForm from "../pages/loginForm";
import SignUpForm from "../pages/signUpForm";
import "./login.css";


const Login = () => {
    const [isNewUser, setIsUserLogin] = useState(true);

    const handleIsNewUser = (data) => {
        setIsUserLogin(data)
    }

    return (
        <>
            <div className="h-100 w-100 d-flex p-5 bg-light justify-content-center">
                <div
                    className="border bg-white align-self-center justify-content-center p-2 rounded"
                >
                    {isNewUser ? <LoginForm onIsNewUserClick={handleIsNewUser}></LoginForm> : <SignUpForm onIsNewUserClick={handleIsNewUser}></SignUpForm>}
                </div>
            </div>
        </>
    );
}

export default Login;
