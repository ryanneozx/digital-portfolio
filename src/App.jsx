import './App.css'
import Navbar from './components/navbar.jsx'
import Hero1 from './components/hero1.jsx'
import About from './components/about.jsx'
import Experience from './components/experience.jsx'
import Projects from './components/projects.jsx'
import Certifications from './components/certifications.jsx'

function App() {

  return (
    
    <Navbar>
      <Hero1></Hero1>
      <About></About>
      <Experience></Experience>
      <Certifications></Certifications>
      <Projects></Projects>
      <footer className="footer footer-center bg-base-100 text-base-content p-4">
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All right reserved by Ryan Neo.</p>
        </aside>
      </footer>
    </Navbar>
    
  )
}


export default App
