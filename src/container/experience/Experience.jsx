import React from 'react'
import './experience.css'
import splineDown from '../../assets/image/SplineTwo.png'
import WorkDone from '../../Components/workDone/WorkDone.jsx'

function Experience() {
    const experiences= [
        {
            id: 1,
            Company: "Learnyn",
            Designation : "Intern",
            Link:"https://learnyn.io/",
            Joined:"December 2022",
            Expired:"March 2023",
            Discription: ["Build Full Stack Web-Application using React.js Node.js And Other tools, and Published in git",
             "Learned React.js, Node.js with the help of professional more than 10 years of experience in IT.",
             " Learned Basics of Authentication Using Node.js and Basic Security feature.",
             "Advanced react Best Practices and more about State Management Tools.",
            ]
        },
        {
            id: 2,
            Company: "LCC",
            Designation : "Intern",
            Link:"http://www.lcccochin.com/",
            Joined:"June 2022",
            Expired:"November 2022",
            Discription: ["Worked And Enhanced Skills In Php, JavaScript, HTML, CSS with Professional Engineers",
             "Build and Worked With Solo Full Stack Project With the Help of Professional And experienced Developers.",
             "Studied More About System Analysis And Design And Prepared Documents.",
        ]
        },
    
    ]
       return (
    <>
    
    <div className="Experience_container section__padding" id='Experience'>
    <div className="experience_heading"> 
    <h1>{'<'}<span className="colorB">Experience</span> {'/>'}</h1>
    </div>
    <div className="experience_content section__padding">
        {experiences.map((experience)=>(
            <WorkDone 
            key={experience.id}
            Company={experience.Company}
            Designation={experience.Designation}
            Link={experience.Link}
            Joined={experience.Joined}
            Expired={experience.Expired}
            Discription={experience.Discription}
            />
        ))}
    </div>
    <div className="experience_splice ">
       
            <img src={splineDown} alt=""  className='spline_one slide-top'/>
             {/* <img src={splineUp} alt="" className='spline_two at-item2' /> */}
          
           
           </div>
    </div>
    </>

  )
}

export default Experience
{/* <div class="container">
  <div class="Experience"></div>
  <div class="Experience_content"></div>
  <div class="Experience_splice"></div>
</div> */}