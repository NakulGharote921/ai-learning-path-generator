import { Link } from 'react-router-dom'

function TopNavBar() {
  return (
    <nav
      className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md dark:bg-inverse-surface/80 shadow-sm transition-all duration-300"
      id="navbar"
    >
      <div className="flex justify-between items-center px-margin max-w-max_width mx-auto h-xl">
        <Link
          className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed flex items-center gap-2"
          to="/"
        >
          <span
            className="material-symbols-outlined text-accent"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            auto_awesome
          </span>
          Cognitive Flow
        </Link>

        <div className="hidden md:flex items-center gap-lg">
          <Link
            className="font-label-md text-label-md text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed hover:bg-primary/5 transition-colors duration-200 px-3 py-2 rounded-md"
            to="/#features"
          >
            Features
          </Link>
          <Link
            className="font-label-md text-label-md text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed hover:bg-primary/5 transition-colors duration-200 px-3 py-2 rounded-md"
            to="/"
          >
            Methodology
          </Link>
          <Link
            className="font-label-md text-label-md text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed hover:bg-primary/5 transition-colors duration-200 px-3 py-2 rounded-md"
            to="/"
          >
            Pricing
          </Link>
          <Link
            className="font-label-md text-label-md text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed hover:bg-primary/5 transition-colors duration-200 px-3 py-2 rounded-md"
            to="/"
          >
            Resources
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            className="hidden md:inline-flex font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
            to="/"
          >
            Log In
          </Link>
          <Link
            className="inline-flex items-center justify-center font-label-md text-label-md bg-[#FF7444] text-white px-6 py-2.5 rounded-lg shadow-button hover:bg-[#e6683d] scale-95 active:scale-90 transition-transform font-bold tracking-wide"
            to="/signup"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default TopNavBar
