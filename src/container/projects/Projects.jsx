import React from 'react'
import Project from '../../Components/project/project'
import gpt3 from '../../assets/image/GPT-3.png'
import portfolio from '../../assets/image/Project_portfolio.png'
import digiVehicle from '../../assets/image/Project_2.png'
function Projects() {
  const projectDatas = [
   { 
    id:1,
    gitUrl:'https://github.com/muadpn?tab=repositories',
    imageUri:portfolio,
    projectHeading:"PortFolio - (current)",
    projectDescription:"Welcome to my developer portfolio website, created using React.js and CSS! I focused on creating a visually engaging experience with a good UI design and included various animations to enhance the user experience. The website is also fully responsive, meaning it looks great on desktop, tablet, and mobile devices.",
    projectFeatures:["CloudTag","New UI Design","Responsive Design","React Project"]
  },{ 
    id:2,
    gitUrl:'https://github.com/muadpn?tab=repositories',
    imageUri:gpt3,
    projectHeading:"GPT-3 Demo UI Website",
    projectDescription:"We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he.Friendly bachelor entrance to on by.",
    projectFeatures:["Modern UX Design","React Based Project","Responsive Design","Covered Basic React States"]
  },{ 
    id:3,
    gitUrl:'https://github.com/muadpn?tab=repositories',
    imageUri:digiVehicle,
    projectHeading:"Digital Vehicle - Web",
    projectDescription:"Motor Vehicle Departments (MVD) Web-application that allows Verifying data such as Licence, RC book, and  Manage complaints and file Report  of Accidents and Complaints related to Vehicle to File FIR.",
    projectFeatures:["Basic Crud Application","HTML-CSS-Js-PHP project","Validation And Authentication"]
  },
  ]
  return (
    <div className="project_container section__padding" id='Projects'>
      <div className="project_heading">
      <h1>{'<'}<span className="colorB">Project</span> {'/>'}</h1>
      </div>
      <div>
      {projectDatas.map((projectData)=>(
          <Project 
            key={projectData.id}
            Count={projectData.id}
            giturl={projectData.gitUrl}
            imageUri={projectData.imageUri}
            projectHeading={projectData.projectHeading}
            projectDescription={projectData.projectDescription}
            projectFeatures={projectData.projectFeatures}
            />
        ))}
      </div>
    </div>

  )
}

export default Projects
