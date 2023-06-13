

const LoginForm = () => {

  const Login = () => {
    alert('login')
  }

  const navigateToSignUp = () => {
    alert('navigate to signup')
  }
  return (
    <>
      <div className="h-100 w-100 d-flex p-5 bg-light justify-content-center">
        <div
          className="border bg-white align-self-center justify-content-center p-2 rounded"
        >
          <form className="container py-3">
            <div className="form-group px-5">
              <div className="formGroup my-3">
                <input type="text"
                  className="form-control w-100" placeholder="Username" formControlName="email" required />
              </div>

              <div className="formGroup my-3">
                <input type="password"
                  className="form-control w-100" placeholder="Password" formControlName="password" required />
              </div>
              <button type="submit" onClick={Login} className="btn my-2 btn-outline-primary w-100">
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