import React, { useRef } from "react";
import useIntersectionObserver from "./useIntersectionObserver";
import VerticalTabs from "./vertTabs.jsx";

const Experience = (props) => {
    const elementsRef = useRef([]);

    // Define the callback for when elements intersect
    const handleIntersect = (element) => {
        element.classList.add("active");
    };

    // Use the custom hook
    useIntersectionObserver(elementsRef, handleIntersect);

    return (
      <div id="experience" name="experience" className="anchor bg-base-100 min-h-96 mt-14 lg:mx-10">
        <div className="flex-col text-left">
            {/* Header Section */}
            <div className="w-full">
                <h1 className="text-4xl font-bold tracking-wider mb-4">/experience</h1>
                <hr ref={(el) => (elementsRef.current[0] = el)}  className="border-t-4 border-secondary mb-6 rounded-full"></hr>
            </div>
  
            {/* Content Section */}

            <div ref={(el) => (elementsRef.current[1] = el)} className="delayed-fade">
                <VerticalTabs>
                </VerticalTabs>
            </div>
            
        </div>
      </div>
    );
};

export default Experience;
  