import SignInHero from '../components/SignIn/SignInHero'
import SignInForm from '../components/SignIn/SignInForm'
import TopNavBar from '../components/home/TopNavBar'

function SignIn() {
  return (
    <div className="signup-page flex min-h-screen mt-4 flex-col md:flex-row">
      <TopNavBar/>
      <SignInHero />
      <SignInForm />
    </div>
  )
}

export default SignIn
