import React from 'react'
import './workDone.css'

function WorkDone(props) {
  return (
    
    <div className='tab_container'>
      <div className="tab_head tab_active"  >
        <h2 className='colorA CompanyHead'>{props.Company}</h2>
       </div>
        <div className="tab_content content_active">
            <h2>{props.Designation} <a href={props.Link} className='colorB' target="_blank" rel="noopener noreferrer">@{props.Company}</a>  -Kochi</h2>
            <p>{props.Joined}- {props.Expired}</p>
            <ul>
              {props.Discription.map((List, index)=> {
                return (
                  <li className='colorA' key={index}> <p>{List}</p></li>
                  )
                }
                )}
                </ul>
        </div>
        
    </div>
  )
}

export default WorkDone
