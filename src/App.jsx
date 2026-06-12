import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Assessment from './components/Assessment'
import Signup from './components/Signup'
import DashBoard from './components/DashBoard'
import Analytics from './components/Analytics'
import Roadmap from './components/Roadmap'
import Project from './components/Project'
import Laibray from './components/library'
import Profile from './components/Profile'
import Setting from './components/Setting'
import Support from './components/Support'
import Methodology from './components/Methodology'
import Features from './components/Features'
import SignIn from './components/SignIn'
import Resources from './components/Resources'
import TopNavBar from './components/home/TopNavBar'



function App() {
  return (
    <BrowserRouter>
    <TopNavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/library" element={<Laibray />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Setting />} />
        <Route path="/support" element={<Support />} />
        <Route path="/methodology" element={<Methodology />} />
        <Route path="/features" element={<Features />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/resources" element={<Resources/>}/>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
