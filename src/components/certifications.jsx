import React, { useRef } from "react";
import useIntersectionObserver from "./useIntersectionObserver";
import AWSBadge from "../assets/awsbadge.png";
import CHFIBadge from "../assets/chfibadge.webp";


const Certifications = () => {
  const certifications = [
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services (AWS)',
      date: 'October 2022',
      expire: 'October 2025',
      link: 'https://www.credly.com/badges/f354b1d6-d521-436d-97bf-1a39087d6041/linked_in_profile',
      img: `${AWSBadge}`
    },
    {
      name: 'Computer Hacking Forensic Investigator (CHFI)',
      issuer: 'EC-Council',
      date: 'March 2022',
      expire: 'March 2025',
      link: 'https://aspen.eccouncil.org/VerifyBadge?type=certification&a=uxlQlpr/+RoqW/Z0Gqrm64mC5f8XJhC9+tMI3ikdciw=',
      img: `${CHFIBadge}`
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
    <section id="certifications" className="anchor lg:pt-0 pt-6 lg:mx-10 rounded-lg ">
      {/* Header Section */}
      <div className="w-full ">
        <h1 className="text-4xl font-bold tracking-wider mb-4 text-left">/certifications</h1>
        <hr ref={(el) => (elementsRef.current[0] = el)}  className="border-t-4 border-secondary mb-6 rounded-full"></hr>
      </div>

      <ul className="space-y-4">
        <div className="grid lg:grid-cols-2 gap-3 text-sm">
          {certifications.map((cert, index) => (
              <li ref={(el) => (elementsRef.current[1+index] = el)} key={index} className="card bg-base-300 shadow-lg fade-in" style={{ opacity:0, animationDelay: `${1.5+index*0.2}s` }}
              >
              <div className="card-body flex items-start">
                {/* Certification Image */}
                <img 
                  className="object-scale-down h-40 flex-shrink-0 rounded-md object-contain" 
                  src={cert.img} 
                  alt={`${cert.name} badge`} 
                />
                {/* Certification Details */}
                <div className="flex-1 text-left">
                  <h3 className="card-title text-lg font-semibold">{cert.name}</h3>
                  <p className="text-sm text-gray-400">Issued by: {cert.issuer}</p>
                  {cert.date && (
                    <p className="text-sm text-gray-500">
                      Date: {cert.date} - {cert.expire}
                    </p>
                  )}
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link link-primary text-sm"
                    >
                      View Certificate
                    </a>
                  )}
                </div>
              </div>
            </li>
            
            
            ))}
        </div>    
      </ul>
    </section>
  );
};

export default Certifications;

  