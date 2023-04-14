import React, { useState } from "react";
import "./skills.scss";

const Skills = () => {
  const [openTab, setOpenTab] = useState(null);

  const handleTab = (tab) => {
    setOpenTab(tab);
  };

  return (
    <div className="skills">
      <div className="skills-tabs">
          <div className="tab" onClick={() => handleTab("Front-end")}>
            <h3 className="tab-title">Front-end</h3>
            <div></div>
          </div>
          <div className="tab" onClick={() => handleTab("Back-end")}>
            <div></div>
            <h3 className="tab-title">Back-end</h3>
          </div>
          <div className="tab" onClick={() => handleTab("Databases")}>
            <h3 className="tab-title">Databases</h3>
            <div></div>
          </div>
          <div className="tab" onClick={() => handleTab("Toolkit")}>
            <div></div>
            <h3 className="tab-title">Toolkit</h3>
          </div>
      </div>
    </div>
  );
};

export default Skills;
