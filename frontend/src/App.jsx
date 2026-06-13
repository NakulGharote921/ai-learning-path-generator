import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Assessment from './pages/Assessment'
import Signup from './pages/Signup'
import DashBoard from './pages/DashBoard'
import Analytics from './components/Analytics'
import Roadmap from './components/Roadmap'
import Project from './components/Project'
import Laibray from './components/library'
import Profile from './components/Profile'
import Setting from './components/Setting'
import Support from './components/Support'
import Methodology from './pages/Methodology'
import Features from './pages/Features'
import SignIn from './pages/SignIn'
import Resources from './pages/Resources'
import Pricing from './pages/Pricing'
import AiTutor from './components/AiTutor'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/library" element={<Laibray />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Setting />} />
        <Route path="/support" element={<Support />} />
        <Route path="/features" element={<Features />} />
        <Route path="/methodology" element={<Methodology />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/resources" element={<Resources/>}/>
        <Route path="/ai-tutor" element={<AiTutor/>}/>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
