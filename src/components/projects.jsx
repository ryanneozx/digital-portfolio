import React, { useRef } from "react";
import useIntersectionObserver from "./useIntersectionObserver";
import { FaGithub } from "react-icons/fa";

const Card = ({ title, description, technologies, link, delay, eleRef, index }) => {
    return (
        <div 
        className="card card-compact bg-primary text-primary-content text-left m-0 p-0 h-56 shadow-md transform proj-card"
        >
            <div className="card-body p-0">
                <h3 className="card-title m-0 p-0 align-top">{title}</h3>
                <p>{description}</p>
                <p className="pt-4">{technologies}</p>
                <div className="card-actions justify-end pb-3">
                    <a href={link} className="text-primary-content" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="h-8 w-8 rounded-full hover:animate-glow" />
                    </a>
                </div>
            </div>
        </div>
    );
};

const Projects = (props) => {
    const projects = [
        {
            title: "Blogs App",
            description: "Full-stack Application for a blogs app.",
            technologies: "NodeJS, ReactJS, TailwindCSS",
            link: "https://www.linkedin.com/in/ryan-neo/",
        },
        {
            title: "Project Title 2",
            description: "Full-stack Application for a blogs app.",
            technologies: "NodeJS, ReactJS, TailwindCSS",
            link: "https://www.linkedin.com/in/ryan-neo/",
        },
        {
            title: "Project Title 3",
            description: "Full-stack Application for a blogs app.",
            technologies: "NodeJS, ReactJS, TailwindCSS",
            link: "https://www.linkedin.com/in/ryan-neo/",
        },
    ];

    const elementsRef = useRef([]);

    // Define the callback for when elements intersect
    const handleIntersect = (element) => {
        element.classList.add("active");
    };

    // Use the custom hook
    useIntersectionObserver(elementsRef, handleIntersect);

    return (
        <div id="projects" name="projects" className="anchor bg-base-100 min-h-svh lg:mx-10 mt-16">
            <div className="text-left">
                <h1 className="text-4xl font-bold tracking-wider mb-4">/projects</h1>
                <hr ref={(el) => (elementsRef.current[0] = el)} className="border-t-4 border-secondary mb-6 rounded-full"></hr>
            </div>
            
            <div ref={(el) => (elementsRef.current[1] = el)} className="delayed-fade ">
                {/* hide project carousel until have actual projects */}

                {/* <div className="carousel w-4/5 rounded-box">
                    <div id="slide1" className="carousel-item relative w-full anchor">
                        <img
                        src="src/assets/test.png"
                        className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full anchor ">
                        <img
                        src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                        className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full anchor">
                        <img
                        src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                        className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div> */}
                
                <div className="grid lg:grid-cols-3 gap-4 mt-"> {/* Adjust grid-cols for responsive layout */}
                    {projects.map((project, index) => (
                        <Card className="" index={index}
                            eleRef={elementsRef}
                            key={index}
                            title={project.title}
                            description={project.description}
                            technologies={project.technologies}
                            link={project.link}
                            delay={index * 0.2} // Incremental delay for each card
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;