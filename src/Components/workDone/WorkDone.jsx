import React,{useState} from 'react'
import './workDone.css'

function WorkDone(props) {

 const handleClick = ()=>{
   console.log("hi")
  }
  

  return (
    
    <div className='tab_container'>
      <div className="tab_head tab_active" onClick={handleClick}>
        <h2 className='colorA CompanyHead'>{props.Company}</h2>
       </div>
        <div className="tab_content content_active">
            <h2>{props.Designation} <a href={props.Link} className='colorB'>@{props.Company}</a>  -Kochi</h2>
            <p>{props.Joined}- {props.Expired}</p>
            <ul>
              {props.Discription.map((List)=> {
                return (
                  <li className='colorA'>{List}</li>
                  )
                }
                )}
                </ul>
        </div>
        
    </div>
  )
}

export default WorkDone
{/* Build Full Stack Web-Application using React.js 
              Node.js And Other tools, and Published in git</li> */}