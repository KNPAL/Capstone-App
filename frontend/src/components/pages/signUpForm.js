import { useState } from "react";



const SignUpForm = ({ onIsNewUserClick }) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('')
  const [email, setEmail] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  }

  const SignIn = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || password.trim().length === 0 || role.trim() === 0 || email.trim() === 0 || PhoneNumber.trim() === 0) {
      return;
    }

    const requestBody = {
      query: `
      mutation{
        createUsers(userInput:{
          name:"${username}"
          email:"${email}",
          role:"${role}",
          phoneNumber:${PhoneNumber},
          password:"${password}"
        }){
          _id
        }
      }
      `
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

  const navigateToLogin = () => {
    onIsNewUserClick(true)
  }
  return (
    <>
      <div className="h-100 w-100 d-flex p-5 bg-light justify-content-center">
        <div
          className="border bg-white align-self-center justify-content-center p-2 rounded"
        >
          <form className="container py-3" onSubmit={SignIn}>
            <div className="form-group px-5">
              <div className="form-group my-3">
                <input placeholder="Name" value={username} onChange={handleUsernameChange} className="form-control" required />
              </div>
              <div className="form-group my-3">
                <input type="number" value={PhoneNumber} onChange={handlePhoneNumberChange} placeholder="Phone Number" className="form-control" required />
              </div>
              <div className="form-group my-3">
                <input type="text" value={email} onChange={handleEmailChange} className="form-control w-100" placeholder="Email Id" required />
              </div>
              <div className="form-group my-3">
                <input type="password" value={password} onChange={handlePasswordChange} className="form-control w-100" placeholder="Password" required />
              </div>
              <div className="form-group my-3">
                <div className="form-check form-check-inline">
                  <input className="form-check-input"
                    value="Owner" checked={role === "Owner"} onChange={handleRoleChange} type="radio" name="role" id="role-owner" />
                  <label className="form-check-label" htmlFor="role-owner">
                    Owner
                  </label>
                </div>
                <div className="form-check form-check-inlinek">
                  <input className="form-check-input"
                    value="Tenant" checked={role === "Tenant"} onChange={handleRoleChange} type="radio" name="role" id="role-tenant" />
                  <label className="form-check-label" htmlFor="role-tenant">
                    Tenant
                  </label>
                </div>
              </div>
              <button type="submit" className="btn my-2 btn-outline-primary w-100">
                Sign Up
              </button> {/* [disabled]="!SignUpForm.valid" */}
              <div>
                <label role="button" onClick={navigateToLogin} className="px-2">Already have an account?</label>
              </div>
            </div>
          </form>
        </div>
      </div>

    </>
  )

}


export default SignUpForm;