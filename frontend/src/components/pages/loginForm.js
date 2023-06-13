import { useState } from "react"


const LoginForm = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('');

  const Login = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || password.trim().length === 0) {
      return;
    }

    const requestBody = {
      query: `
      query{
        login(email:"${username}",password:"${password}"){
          userId,
          token,
          tokenExpiration
        }
      }`
    };

    fetch('http://localhost:8000/graphql', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.status !== 200 && res.status !== 201) {
        throw new Error('Failed!')
      }
      return res.json();
    })
    .then(response => {
      console.log(response)
    }).catch(err => {
      console.log(err)
    });

  }

  const navigateToSignUp = () => {
    alert('navigate to signup')
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <div className="h-100 w-100 d-flex p-5 bg-light justify-content-center">
        <div
          className="border bg-white align-self-center justify-content-center p-2 rounded"
        >
          <form className="container py-3" onSubmit={Login}>
            <div className="form-group px-5">
              <div className="formGroup my-3">
                <input type="text" value={username}
                  onChange={handleUsernameChange}
                  className="form-control w-100" placeholder="Username" required />
              </div>

              <div className="formGroup my-3">
                <input type="password" value={password}
                  onChange={handlePasswordChange}
                  className="form-control w-100" placeholder="Password" required />
              </div>
              <button type="submit" className="btn my-2 btn-outline-primary w-100">
                Log In
              </button>

              <div>
                <label className="px-2" role="button">Forgot password</label><label className="px-2" role="button"
                  onClick={navigateToSignUp}>
                  Sign Up For
                  TenantManagement</label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}


export default LoginForm;