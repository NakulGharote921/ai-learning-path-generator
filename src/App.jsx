import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Assessment from './components/Assessment'
import Signup from './components/Signup'
import DashBoard from './components/DashBoard'
import Roadmap from './components/Roadmap'
import Laibray from './components/library'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/library" element={<Laibray />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
