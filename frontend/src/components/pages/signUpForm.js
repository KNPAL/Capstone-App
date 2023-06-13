


const SignUpForm = () => {

  const SignIn = () => {
    // this.authService.SignUp(this.SignUpForm.value);
    alert('sign up')
  }

  const navigateToLogin = () => {
    // this.dataManageMentService.isNewUser.next(false)
    alert('navigte to login')
  }
  return (
    <>
      <div className="h-100 w-100 d-flex p-5 bg-light justify-content-center">
        <div
          className="border bg-white align-self-center justify-content-center p-2 rounded"
        >
          <form className="container py-3">
            <div className="form-group px-5">
              <div className="form-group my-3">
                <input placeholder="Name" className="form-control" required />
              </div>
              <div className="form-group my-3">
                <input type="number" placeholder="Phone Number" className="form-control" required />
              </div>
              <div className="form-group my-3">
                <input type="text" className="form-control w-100" placeholder="Email Id" required />
              </div>
              <div className="form-group my-3">
                <input type="password" className="form-control w-100" placeholder="Password" required />
              </div>
              <div className="form-group my-3">
                <div className="form-check form-check-inline">
                  <input className="form-check-input" value="Owner"
                    type="radio" name="role" id="role-owner" />
                  <label className="form-check-label" htmlFor="role-owner">
                    Owner
                  </label>
                </div>
                <div className="form-check form-check-inlinek">
                  <input className="form-check-input" value="Tenant"
                    type="radio" name="role" id="role-tenant" />
                  <label className="form-check-label" htmlFor="role-tenant">
                    Tenant
                  </label>
                </div>
              </div>
              <button type="submit" onClick={SignIn} className="btn my-2 btn-outline-primary w-100">
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