import { useState } from "react";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";

function SignUpForm() {
  const { register,handleSubmit, formState:{errors}} = useForm();
  const navigate = useNavigate()
  const [conformPassword, setConformPassword] = useState("")
  const [passwordError, setPasswordError] = useState(null)
  const submit = (data) =>{
    if(data.password !== conformPassword) return setPasswordError("Password not matched")
      setPasswordError(null)
    console.log(data);
    navigate('/dashboard')

    
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
          <h2 className="font-headline-lg text-headline-lg text-primary mb-xs">Create your Account</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">free 30 days trial</p>
        </div>
        <div className="grid grid-cols-2 gap-sm mb-xl">
          <button className="flex items-center justify-center gap-sm px-md py-sm bg-surface border border-outline-variant rounded-lg font-label-md text-label-md hover:bg-surface-container transition-colors">
            <img
              alt="Google"
              className="w-5 h-5"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9IbJHeYvRCr_pF3fUkTK0YtAKZ4RFuWhr7eY9hyTx4SI0rhVVIxDzUGz7Ol_Ta-YWlzHT08b8TS58Ul7KZsN33XYIKiCW1y09eJ52P_MgjwohJLgouKQOcIIIhHHpOSHnup-LB1xrTuXrnx-VbWuGAItkectVnHNrg2B6TC7yTkb94Y0UCpaE0I2oQ4Q_alZLIjKMSlcf3V3WHhqS67KqmIpJ10mh6qFa49fpVQovLQuXnr7zi_pwOFu6o_zR0suYKeoTYQrPwUs"
            />
            Google
          </button>
          <button className="flex items-center justify-center gap-sm px-md py-sm bg-surface border border-outline-variant rounded-lg font-label-md text-label-md hover:bg-surface-container transition-colors">
            <span className="material-symbols-outlined text-black" data-icon="apple">
              apps
            </span>
            Apple
          </button>
        </div>
        <div className="relative flex items-center justify-center mb-xl">
          <div className="w-full border-t border-outline-variant" />
        </div>
        <form className="space-y-md" onSubmit={handleSubmit(submit)}>
          <div>
            <label className="block font-label-md text-label-md text-on-surface mb-xs" htmlFor="full-name">
              Full Name
            </label>
            <input
              className="w-full px-md py-sm bg-white border border-outline-variant/50 rounded-lg auth-input text-body-md"
              id="name"
              placeholder="name@company.com"
              type="text"
              {
                ...register('fullName',{
                  required:"please enter name",
                  minLength:{
                   value:6,
                    message:"name should be atleast 6 character"
                  },
                  maxLength:{
                    value:50,
                    message:"name should be atmost 50 character"
                  }
                })
              }
            />
        {
          errors.fullName && <span className='invalid-entry'>{errors.fullName.message}</span>
        }
          </div>
          <div>
            <label className="block font-label-md text-label-md text-on-surface mb-xs" htmlFor="full-name">
              Email Address
            </label>
            <input
              className="w-full px-md py-sm bg-white border border-outline-variant/50 rounded-lg auth-input text-body-md"
              id="email"
              placeholder="name@company.com"
              type="text" 
              {
                ...register("email",{
                  required:"email is required",
                  pattern:{
                    value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message:"invalid email"
                  }
                })
              }
            />
        {
          errors.email && <span className='invalid-entry'>{errors.email.message}</span>
        }
          </div>
          <div>
            <label className="block font-label-md text-label-md text-on-surface mb-xs" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-md py-sm bg-white border border-outline-variant/50 rounded-lg auth-input text-body-md"
              id="password"
              placeholder="password"
              type="password"
              {
                ...register('password',{
                  required:"please enter password",
                  minLength:{
                   value:6,
                    message:"password should be atleast 6 character"
                  },
                  maxLength:{
                    value:30,
                    message:"password should be atmost 30 character"
                  }
                })
              }
            />   
        {
          errors.password && <span className='invalid-entry'>{errors.password.message}</span>
        }
          </div>
          <div>
            <label className="block font-label-md text-label-md text-on-surface mb-xs" htmlFor="conform-password">
              Conform Password
            </label>
            <input
              className="w-full px-md py-sm bg-white border border-outline-variant/50 rounded-lg auth-input text-body-md"
              id="conform-password"
              placeholder="conform password"
              type="password"
              value={conformPassword}
              onChange={(e)=>setConformPassword(e.target.value)}
            />   
        {
          passwordError && <span className='invalid-entry'>{passwordError}</span>
        }
          </div>
          <div>
            <label className="block font-label-md text-label-md text-on-surface mb-xs" htmlFor="date-of-birth">
              Date of Birth
            </label>
            <input
              className="w-full px-md py-sm bg-white border border-outline-variant/50 rounded-lg auth-input text-body-md"
              id="date-of-birth"
              placeholder="date of birth"
              type="date"
              {
                ...register("dateOfBirth",{
                  required:"please select date of birth"
                })
              }   
              />
        {
          errors.dateOfBirth && <span className='invalid-entry'>{errors.dateOfBirth.message}</span>
        }
          </div>
          <div className="flex items-center gap-xs">
            <input className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary" id="remember" type="checkbox"
            {
              ...register("remember")
            } />
            <label className="font-body-sm text-body-sm text-on-surface-variant" htmlFor="remember">
              Remember me for 30 days
            </label>
          </div>
          <button
            className="w-full py-sm bg-primary-container text-on-primary-container rounded-lg font-label-md text-label-md font-bold btn-pressable hover:bg-primary transition-colors flex items-center justify-center gap-xs"
            type="submit"
          >
            Sign Up
            <span className="material-symbols-outlined text-[18px]" data-icon="login">
              login
            </span>
          </button>
        </form>
        <p className="mt-xl text-center font-body-sm text-body-sm text-on-surface-variant">
          already have an account! <a className="text-primary font-bold hover:underline" href="/signin">Sign In</a>
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

export default SignUpForm
