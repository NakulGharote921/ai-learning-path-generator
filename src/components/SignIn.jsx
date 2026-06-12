import SignInHero from './SignIn/SignInHero'
import SignInForm from './SignIn/SignInForm'

function SignIn() {
  return (
    <div className="signup-page flex min-h-screen flex-col md:flex-row">
      <SignInHero />
      <SignInForm />
    </div>
  )
}

export default SignIn
