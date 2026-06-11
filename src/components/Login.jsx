import React from 'react'
import LoginStyles from './login/LoginStyles'
import LoginBrandPanel from './login/LoginBrandPanel'
import LoginForm from './login/LoginForm'

function Login() {
  return (
    <div>
      <div>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Login | Cognitive Flow AI</title>
        <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@600;700&family=Inter:wght@400;500&family=Geist:wght@500;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <LoginStyles />
      </div>
      <main className="min-h-screen flex flex-col md:flex-row">
        <LoginBrandPanel />
        <LoginForm />
      </main>
    </div>
  )
}

export default Login
