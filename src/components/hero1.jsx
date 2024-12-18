import React, { useRef } from "react";
import useIntersectionObserver from "./useIntersectionObserver";
import resume from '../assets/ryanneozx_resume.pdf'
import { IoMailSharp } from "react-icons/io5";
import { IoIosPaper } from "react-icons/io";
import Nerd from '../assets/nerd.png'

const Hero1 = (props) => {
    const elementsRef = useRef([]);

    // Define the callback for when elements intersect
    const handleIntersect = (element) => {
        element.classList.add("active");
    };

    // Use the custom hook
    useIntersectionObserver(elementsRef, handleIntersect);

    return (
        <div id="home" name="home" className="hero min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <div className="avatar">
                        <div className="w-24 rounded">
                            {/* Add alt text to the image for accessibility */}
                            <img src={Nerd} alt="Ryan's Avatar" />
                        </div>
                    </div>
                    <div ref={(el) => (elementsRef.current[0] = el)} className="text-6xl font-bold typewriter inline-block">
                        <h1>Hi, I'm Ryan.</h1>
                    </div>
                    <div ref={(el) => (elementsRef.current[1] = el)} className='fade-text'>
                        <h2 className="text-2xl font-bold mt-2 fade-text">Software Development and Cybersecurity is my thing.</h2>
                        <p className="py-6">
                            I'm currently a student based in Singapore. I have a profound interest in Web App Development, 
                            Android App Development, and Cybersecurity surrounding them. 
                            
                        </p>
                        <div className="flex justify-center gap-1 fade-text">
                            <a href={resume} target="_blank" rel="noopener noreferrer" className='mr-2'>
                                <button className="btn btn-primary">
                                <div className="flex items-center text-primary-content">
                                    <IoIosPaper className="h-6 w-6 text-primary-content mr-2"/>
                                    <span className="text-primary-content">View Resume</span></div>
                                    
                                </button>
                            </a>
                            <a href="mailto:ryanneozx@gmail.com">
                                <button className="btn btn-secondary" aria-label="Get in touch with Ryan">
                                <div className="flex items-center text-secondary-content">
                                    <IoMailSharp className="h-6 w-6 text-secondary-content mr-2" />
                                    <span>Get In Touch</span>
                                </div>
                                </button>
                            </a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Hero1