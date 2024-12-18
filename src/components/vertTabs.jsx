import React, { useState } from "react";

const VerticalTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [fade, setFade] = useState(false);

  const tabData = [
    {
      tab: "SAF MINDEF (NS)",
      org: "SAF MINDEF / G1 Army (NS)",
      title: "Data Analyst (Admin Support Assistant)",
      duration: "Dec 2023 - Aug 2025 (1 Year 8 Months)",
      desc: [
        "Conducted detailed trend analysis to identify patterns and anomalies, supporting strategic planning and operational efficiency.",
        "Designed and implemented dashboards in PowerBI for the army, providing data-driven insights into key metrics and operational trends.",
        "Developed VBA scripts to streamline repetitive processes, reducing task completion time by up to 40% and improving team productivity.",
      ],
    },
    {
      tab: "DSTA",
      org: "DSTA",
      title: "Cybersecurity Intern",
      duration: "Mar 2022 - Aug 2022 (6 Months)",
      desc: [
        "Designed and deployed a robust DevSecOps pipeline for Android applications using Jenkins and GitLab, automating security testing and integrating seamless feedback loops into the development lifecycle.",
        "Engineered Python scripts and integrated tools to automate dynamic security analysis of Android applications, aligning with OWASP MASVS standards to ensure comprehensive threat detection and compliance.",
      ],
    },
  ];

  const handleTabClick = (index) => {
    setFade(true);
    setTimeout(() => {
      setActiveTab(index);
      setFade(false);
    }, 200); // Match this duration to the transition time
  };

  return (
    <div className="flex flex-col mb-12 mt-12 lg:flex-row items-start space-x-0 lg:space-x-4 space-y-4 lg:space-y-0 ">
      {/* Tabs */}
      <div className="flex flex-col tabs">
        {tabData.map((tab, index) => (
          <button
            key={index}
            className={`w-full lg:w-48 text-center lg:text-lg font-semibold rounded-lg mb-2 py-2 transition-all duration-200 ${
              activeTab === index
                ? "bg-primary text-primary-content border-2 border-primary scale-105 btn-disabled"
                : "bg-gray-400 text-gray-700 hover:bg-primary hover:text-black hover:border-primary border border-gray-400"
            }`}
            onClick={() => handleTabClick(index)}
            disabled={activeTab === index} // Disable the button for the active tab
          >
            {tab.tab}
          </button>
        ))}
      </div>

      {/* Tab Content with Fade Animation */}
      <div
        className={`min-h-80 mb-12 pl-4 rounded-lg w-full transition-opacity duration-200 ${
          fade ? "opacity-0" : "opacity-100"
        }`}
      >
        <h2 className="lg:text-2xl text-lg font-semibold">
          {tabData[activeTab].title} @{" "}
          <span className="text-primary font-semibold">
            {tabData[activeTab].org}
          </span>
        </h2>
        <p className="text-gray-400">{tabData[activeTab].duration}</p>
        <ul className="text-left list-disc list-inside lg:text-lg pt-4 space-y-4">
          {tabData[activeTab].desc.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VerticalTabs;
