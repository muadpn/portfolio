import React from 'react'
import './header.css'
import gitHub from '../../assets/image/GitHub.svg'
import ProfilePic from '../../assets/image/ProfilePic.png'
function Header() {
  return (
    <div className='header_container section__padding' id="about">
        <div className='header_profilePic'>
            <img src={ProfilePic} alt="profile" />
        </div>
        <div className='header_content'>
            <p>My Name is...</p>
            <h1 className='colorB'>Muad Pn</h1>
            <h2>I am a <span className="colorB">Computer Science</span> Student From <span className="colorB">India.</span></h2>
            <p>I love <span className="colorB">developing</span> websites and applications, and I am passionate about <span className="colorB">studying </span>
            new frameworks and technologies to <span className="colorB">enhance</span> my <span className="colorB">skills</span> as a web developer.</p>
            <a href="https://github.com/muadpn?tab=repositories"><img src={gitHub} alt="" className='Git_logo'/></a>
        </div>
    </div>
  )
}

export default Header
