import React from 'react'
import SignUpStyle from '../components/SignUp/SignUpStyles'
import SignUpBrandPanel from '../components/SignUp/SignUpBrandPanel'
import SignUpForm from '../components/SignUp/SignUpForm'

function Signup() {
  return (
    <div>
      <div>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>SignUp | Cognitive Flow AI</title>
        <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@600;700&family=Inter:wght@400;500&family=Geist:wght@500;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <SignUpStyle />
      </div>
      <main className="min-h-screen flex flex-col md:flex-row">
        <SignUpBrandPanel />
        <SignUpForm />
      </main>
    </div>
  )
}

export default Signup
