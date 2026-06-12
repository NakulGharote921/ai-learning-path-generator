import SignupHero from './Signup/SignupHero'
import SignupForm from './Signup/SignupForm'
import TopNavBar from './home/TopNavBar'

function Signup() {
  return (
    <div className="signup-page flex min-h-screen flex-col md:flex-row">
      <TopNavBar />
      <SignupHero />
      <SignupForm />
    </div>
  )
}

export default Signup
