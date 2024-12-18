import React, { useRef, useState, useEffect } from "react";
import useIntersectionObserver from "./useIntersectionObserver";
import Selfie from "../assets/selfie.JPEG";
import ProfCam from "../assets/profCam.JPEG";

const About = (props) => {
    const [loading, setLoading] = useState(true);
    const elementsRef = useRef([]);

    // Define the callback for when elements intersect
    const handleIntersect = (element) => {
        element.classList.add("active");
    };

    // Use the custom hook
    useIntersectionObserver(elementsRef, handleIntersect);

    // Simulate a loading delay of 4 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
        setLoading(false);
        }, 4000);

        return () => clearTimeout(timer); // Cleanup the timer on unmount
    }, []);

    return (
        <div id="about-me" name="about-me" className="anchor bg-base-100">
            <div className="w-full flex flex-col-reverse lg:flex-row-reverse">
                {/* Images Section */}
                <div ref={(el) => (elementsRef.current[2] = el)}  className="delayed-fade flex flex-col items-center lg:items-start lg:ml-6 lg:mt-14">
                    <img
                        className="max-w-sm rounded-lg shadow-2xl mb-4"
                        src={Selfie}
                        alt="Selfie"
                    />
                    <img
                        className="max-w-sm rounded-lg shadow-2xl"
                        src={ProfCam}
                        alt="Professional Camera"
                    />
                </div>
                {/* Text Section */}
                <div className="text-left lg:w-3/5 mx-auto">
                    <h1 className="text-4xl font-bold tracking-wider mb-4">/about-me</h1>
                    <hr ref={(el) => (elementsRef.current[0] = el)} className="border-t-4 border-secondary mb-6 rounded-full" />

                    <div ref={(el) => (elementsRef.current[1] = el)} className="delayed-fade">

                    <p className="py-2 font-medium">
                    I am <span className="text-primary font-semibold">currently serving National Service</span> and will begin
                    studying Computer Science at <span className="text-primary font-semibold">NUS</span> next year.
                    </p>
                    
                    <p className="py-2 ">
                        In 2023, I graduated with a{' '}
                        <span className="text-primary font-semibold">
                            <div className="tooltip tooltip-accent" data-tip="Awarded to top 10% of cohort (3.97/4 GPA)">
                                Diploma with Merit
                            </div>{' '}
                            in Cybersecurity and Digital Forensics{' '}
                        </span>
                        from Nanyang Polytechnic, focusing on Operational Intelligence and Artificial Intelligence.
                    </p>
                    <p className="py-2">
                        I am passionate about{' '}
                        <span className="text-primary font-semibold">
                            Software Engineering, Cybersecurity, and Machine Learning.
                        </span>{' '}
                        I have a curious mind which makes me want to explore, learn, and create new innovative
                        technologies.
                    </p>
                    <div className="py-4">
                        <h2 className="text-md font-semibold mb-3">Technologies I've worked with:</h2>
                        <div className="grid lg:grid-cols-2 gap-3 text-sm">
                            {/* Programming Languages */}
                            <div className="card bg-base-300 shadow-md p-3">
                                <h3 className="font-bold text-primary mb-1">Programming Languages</h3>
                                <ul className="list-disc list-inside">
                                    <li>C</li>
                                    <li>Python</li>
                                    <li>Java</li>
                                    <li>Kotlin</li>
                                    <li>JavaScript</li>
                                    <li>HTML & CSS</li>
                                </ul>
                            </div>
                            {/* Frameworks & Libraries */}
                            <div className="card bg-base-300 shadow-md p-3">
                                <h3 className="font-bold text-primary mb-1">Frameworks & Libraries</h3>
                                <ul className="list-disc list-inside">
                                    <li>Flask</li>
                                    <li>ReactJS</li>
                                    <li>NodeJS</li>
                                    <li>TailwindCSS</li>
                                    <li>Bootstrap</li>
                                </ul>
                            </div>
                            {/* Databases */}
                            <div className="card bg-base-300 shadow-md p-3">
                                <h3 className="font-bold text-primary mb-1">Databases</h3>
                                <ul className="list-disc list-inside">
                                    <li>
                                        <span className="font-semibold">SQL:</span> PostgreSQL, MySQL, SQLite
                                    </li>
                                    <li>
                                        <span className="font-semibold">NoSQL:</span> MongoDB
                                    </li>
                                </ul>
                            </div>
                            {/* DevOps & Cloud */}
                            <div className="card bg-base-300 shadow-md p-3">
                                <h3 className="font-bold text-primary mb-1">DevOps & Cloud</h3>
                                <ul className="list-disc list-inside">
                                    <li>Docker</li>
                                    <li>Jenkins CI/CD</li>
                                    <li>AWS Cloud</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <p className="py-3">Outside of work, I enjoy reading, working out, and watching anime.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
