import React from 'react'
import splice from '../../assets/image/SplineOne.png'
import SkillTag from '../../Components/skill_tag/SkillTag'
import './skills.css'
function Skills() {
  return (
    <>
    <div className="skills_container section__padding2" id='Skills'>
    <div className="skills_heading"> 
    <h1>{'<'}<span className="colorB">Skills</span> {'/>'}</h1>
    </div>
    <div className="skills_splice">
    <img src={splice} alt="hg" />
    </div>
    <div className="skills_content">
    <SkillTag />
    </div>
    </div>
    </>
  )
}

export default Skills
