import Themes from './navthemes'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Navbar = (props) => {
    return(
    <div className="drawer h-screen top-0 z-10">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div className="navbar bg-base-100 w-full sticky top-0 z-10">
                <div className="flex-none lg:hidden">
                    <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block h-6 w-6 stroke-current">
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                    </label>
                </div>
                <div className="mx-2 flex-1 px-4 text-xl">Ryan Neo</div>
                <div className="navbar-center hidden flex-none lg:block">
                    <ul className="menu menu-horizontal">
                    {/* Navbar menu content here */}
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about-me">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href='#certifications'>Certifications</a></li>
                    <li><a href="#projects">Projects</a></li>
                    
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* Socials Icon Links */}
                    <a href="https://github.com/ryanneozx" target="_blank">
                        <FaGithub className='h-8 w-8 glow'></FaGithub>
                    </a>
                    
                    <a href="https://www.linkedin.com/in/ryan-neo/" className='p-1' target="_blank">
                        <FaLinkedin className='h-8 w-8 glow'></FaLinkedin>
                    </a>
                    {/* <button className="btn btn-primary mt-4" data-toggle-theme="coffee,night" data-act-class="ACTIVECLASS">Switch Theme</button> */}
                    {/* Theme Dropdown Menu (for testing) */}
                    <Themes></Themes>
                </div>
            </div>
            {/* Page content here */}
            {props.children}
        </div>
        <div className="drawer-side">
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Experience</a></li>
            <li><a>Projects</a></li>
            <li><a>Education</a></li>
            <li><a>Certifications</a></li>
            </ul>
        </div>
    </div>
    )
}

export default Navbar