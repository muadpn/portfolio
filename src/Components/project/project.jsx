import React from 'react'
import gitlogo from '../../assets/image/GitHub.svg'
// import gpt3 from '../../assets/image/GPT-3.png'
// import portfolio from '../../assets/image/Project_portfolio.png'
// import digiVehicle from '../../assets/image/Project_2.png'
import './project.css'
function project(props) {
  return (
    <div className={props.Count % 2 ? 'project_Content' : 'project_Content' } >
      <div className="project_image">
        <img src={props.imageUri} alt="portfolio" className='Projects_imageTag' />
      </div>
        <div className={props.Count % 2 ? 'project_details' : 'project_details_even' }>
            <div className='details_bg'>
              <div className='project_Name'>
                <a href={props.giturl}><img src={gitlogo} alt="hi" className='Git_logo_project'/></a>
                <h3>{props.projectHeading}</h3>
              </div>
              <div className='Project_description'>
                <p>{props.projectDescription}</p>
              </div>
              <div className='Project_Features'>
                <ul>
              {props.projectFeatures.map((projectFeature, index)=>(
                <li key={index}> <p>{projectFeature} </p></li>
                ))}
                </ul>
              </div>
            </div>
            
        </div>
    </div>
  )
}

export default project
