import './App.css'
import Navbar from './components/navbar'
import Hero1 from './components/hero1'
import About from './components/about'
import Experience from './components/experience'
import Projects from './components/projects'
import Certifications from './components/certifications'

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
