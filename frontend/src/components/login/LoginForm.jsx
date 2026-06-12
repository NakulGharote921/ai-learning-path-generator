import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithGoogle } from '../../lib/firebase'

function LoginForm() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleGoogleSignIn = async () => {
    setError('')
    setLoading(true)
    try {
      await signInWithGoogle()
      navigate('/dashboard')
    } catch (authError) {
      setError(authError?.message || 'Google sign-in failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="flex-1 flex flex-col justify-center px-margin py-xl bg-warm-canvas">
      <div className="max-w-md w-full mx-auto">
        <div className="md:hidden flex items-center gap-xs mb-xl">
          <span className="material-symbols-outlined text-primary text-4xl" data-icon="psychology">
            psychology
          </span>
          <span className="font-headline-md text-headline-md font-bold text-primary">Cognitive Flow</span>
        </div>
        <div className="mb-xl">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-xs">Welcome Back</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Continue your journey into deep focus.</p>
        </div>
        <div className="grid grid-cols-2 gap-sm mb-xl">
          <button
            className="flex items-center justify-center gap-sm px-md py-sm bg-surface border border-outline-variant rounded-lg font-label-md text-label-md hover:bg-surface-container transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={loading}
            onClick={handleGoogleSignIn}
            type="button"
          >
            <img
              alt="Google"
              className="w-5 h-5"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9IbJHeYvRCr_pF3fUkTK0YtAKZ4RFuWhr7eY9hyTx4SI0rhVVIxDzUGz7Ol_Ta-YWlzHT08b8TS58Ul7KZsN33XYIKiCW1y09eJ52P_MgjwohJLgouKQOcIIIhHHpOSHnup-LB1xrTuXrnx-VbWuGAItkectVnHNrg2B6TC7yTkb94Y0UCpaE0I2oQ4Q_alZLIjKMSlcf3V3WHhqS67KqmIpJ10mh6qFa49fpVQovLQuXnr7zi_pwOFu6o_zR0suYKeoTYQrPwUs"
            />
            {loading ? 'Signing in...' : 'Google'}
          </button>
          <button className="flex items-center justify-center gap-sm px-md py-sm bg-surface border border-outline-variant rounded-lg font-label-md text-label-md hover:bg-surface-container transition-colors">
            <span className="material-symbols-outlined text-black" data-icon="apple">
              apps
            </span>
            Apple
          </button>
        </div>
        {error ? (
          <p className="mb-md rounded-lg border border-red-200 bg-red-50 px-md py-sm text-sm text-red-700">
            {error}
          </p>
        ) : null}
        <div className="relative flex items-center justify-center mb-xl">
          <div className="w-full border-t border-outline-variant" />
          <span className="absolute bg-warm-canvas px-md font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
            or sign in with email
          </span>
        </div>
        <form className="space-y-md" onSubmit={(event) => event.preventDefault()}>
          <div>
            <label className="block font-label-md text-label-md text-on-surface mb-xs" htmlFor="email">
              Email Address
            </label>
            <input
              className="w-full px-md py-sm bg-white border border-outline-variant/50 rounded-lg auth-input text-body-md"
              id="email"
              placeholder="name@company.com"
              type="email"
            />
          </div>
          <div>
            <div className="flex justify-between mb-xs">
              <label className="font-label-md text-label-md text-on-surface" htmlFor="password">
                Password
              </label>
              <a className="font-label-sm text-label-sm text-primary hover:underline" href="#">
                Forgot password?
              </a>
            </div>
            <input
              className="w-full px-md py-sm bg-white border border-outline-variant/50 rounded-lg auth-input text-body-md"
              id="password"
              placeholder="••••••••"
              type="password"
            />
          </div>
          <div className="flex items-center gap-xs">
            <input className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary" id="remember" type="checkbox" />
            <label className="font-body-sm text-body-sm text-on-surface-variant" htmlFor="remember">
              Remember me for 30 days
            </label>
          </div>
          <button
            className="w-full py-sm bg-primary-container text-on-primary-container rounded-lg font-label-md text-label-md font-bold btn-pressable hover:bg-primary transition-colors flex items-center justify-center gap-xs"
            type="submit"
          >
            Log In
            <span className="material-symbols-outlined text-[18px]" data-icon="login">
              login
            </span>
          </button>
        </form>
        <p className="mt-xl text-center font-body-sm text-body-sm text-on-surface-variant">
          Don't have an account? <a className="text-primary font-bold hover:underline" href="#">Create an account</a>
        </p>
        <footer className="mt-xl pt-xl border-t border-outline-variant/20 flex justify-center gap-md">
          <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">
            Privacy Policy
          </a>
          <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">
            Terms of Service
          </a>
          <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">
            Help Center
          </a>
        </footer>
      </div>
    </section>
  )
}

export default LoginForm
