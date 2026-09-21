import { Route, Routes } from 'react-router-dom'
import { Sidebar } from './components/Sidebar'
import { Home } from './pages/Home'
import { ProjectDetail } from './pages/ProjectDetail'

function App() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Sidebar />
      <div className="md:pl-64">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
