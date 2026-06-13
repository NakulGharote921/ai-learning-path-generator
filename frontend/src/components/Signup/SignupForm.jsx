import { useNavigate } from 'react-router-dom'

function SignupForm() {
  const navigate = useNavigate()

  return (
    <div className="signup-form w-full md:w-1/2 h-full bg-surface overflow-y-auto flex items-center justify-center p-md md:p-xl">
      <div className="w-full max-w-md flex flex-col signup-card">
        <div className="mb-xl text-center md:text-left">
          <h1 className="font-headline-lg-mobile md:font-headline-xl text-headline-lg-mobile md:text-headline-xl text-primary-container mb-xs">
            Welcome Back
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Sign in to continue your progress.
          </p>
        </div>

        <div className="flex flex-col gap-sm mb-lg">
          <button className="flex items-center justify-center gap-sm w-full py-sm px-md rounded-xl border border-outline-variant bg-surface-container-lowest hover:bg-surface-container-low transition-colors duration-200">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>
              login
            </span>
            <span className="font-label-md text-label-md text-on-surface">
              Continue with Google
            </span>
          </button>
        </div>

        <div className="flex items-center gap-sm mb-lg">
          <div className="h-px bg-outline-variant/50 flex-1" />
          <span className="font-label-sm text-label-sm text-outline uppercase tracking-widest">
            Or
          </span>
          <div className="h-px bg-outline-variant/50 flex-1" />
        </div>

        <form
          className="flex flex-col gap-md"
          onSubmit={(event) => {
            event.preventDefault()
            navigate('/assessment')
          }}
        >
          <div className="flex flex-col gap-xs">
            <label className="font-label-sm text-label-sm text-on-surface-variant ml-xs" htmlFor="email">
              Email Address
            </label>
            <input
              className="w-full bg-surface-container-lowest border border-primary-container/20 rounded-xl px-md py-sm font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
              id="email"
              placeholder="you@example.com"
              type="email"
            />
          </div>

          <div className="flex flex-col gap-xs">
            <label className="font-label-sm text-label-sm text-on-surface-variant ml-xs" htmlFor="password">
              Password
            </label>
            <input
              className="w-full bg-surface-container-lowest border border-primary-container/20 rounded-xl px-md py-sm font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
              id="password"
              placeholder="••••••••"
              type="password"
            />
          </div>

          <div className="flex items-center justify-between mt-xs mb-sm">
            <label className="flex items-center gap-xs cursor-pointer group">
              <input
                className="rounded border-outline-variant text-primary focus:ring-primary bg-surface-container-lowest"
                type="checkbox"
              />
              <span className="font-body-sm text-body-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                Remember me
              </span>
            </label>
            <a
              className="font-label-sm text-label-sm text-primary hover:text-primary-container transition-colors"
              href="#"
            >
              Forgot password?
            </a>
          </div>

          <button
            className="w-full bg-primary text-on-primary font-label-md text-label-md py-sm px-md rounded-xl shadow-[0_4px_14px_0_rgba(63,82,117,0.39)] hover:shadow-[0_6px_20px_rgba(63,82,117,0.23)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            type="submit"
          >
            Sign In
          </button>
        </form>

        <p className="font-body-sm text-body-sm text-center text-on-surface-variant mt-lg">
          Don't have an account?{' '}
          <a
            className="font-label-md text-label-md text-primary hover:text-primary-container transition-colors"
            href="#"
          >
            Create one now
          </a>
        </p>
      </div>
    </div>
  )
}

export default SignupForm
