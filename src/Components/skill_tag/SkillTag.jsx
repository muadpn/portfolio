import React, { useEffect } from "react";
import "./skillTag.css";

// Importing TagCloud package
import TagCloud from "TagCloud";

const SkillTag = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      let text
      function texts(){
        if (window.screen.width <= 778) {
             text = [
                "HTML",
                "Css",
                "C++",
                "JavaScript",
                "ES6+",
                "Php",
                "Linux",
                "Java",
                "Node.js",
                "Express.js",
                "Git",
                "React.js"
               ];
        } else {
             text = [
                "HTML - Proficient",
                "Css - Proficient",
                "C++ - Intermediate",
                "JavaScript - Intermediate",
                "ES6+ - Intermediate",
                "Php - Beginner",
                "Linux - Intermediate",
                "Java - Beginner",
                "Node.js - Beginner",
                "Express.js - Beginner",
                "Git - Beginner",
                "React.js - Proficient"
               ];
        }
        return text;
      }
      let radii;
      function radiusValue() {
        if (window.screen.width <= 778) {
          radii = 150;
        } else {
          radii = 290;
        }
        return radii;
      }
  
      const options = {
        radius: radiusValue(),
        maxSpeed: 'normal',
        initSpeed: 'normal',
        keep: true,
      };
      TagCloud(container, texts(), options);
    };
  }, []);

  return (
    <>
      <div className="text-shpere">
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud" ></span>
     </div>
    </>
  );
};

export default SkillTag;