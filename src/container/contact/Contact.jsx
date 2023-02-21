import React,{useState} from 'react'
import './contact.css'
import steam from '../../assets/image/steam.png'
import steam_blue from '../../assets/image/steam_blue.png'
import instagram_blue from '../../assets/image/instagram_blue.png'
import instagram from '../../assets/image/instagram.png'
import linkedin_blue from '../../assets/image/linkedin_blue.png'
import linkedin from '../../assets/image/linkedin.png'
import youtube_blue from '../../assets/image/youtube_blue.png'
import youtube from '../../assets/image/youtube.png'
function Contact() {
  const [Steam, setSteam] = useState(false);
  const [Instagram, setInstagram] = useState(false);
  const [LinkedIn, setLinkedIn] = useState(false);
  const [Youtube, setYoutube] = useState(false);
 
    
  return (
    <div className="Contact_container section__padding" id='Contact'>
        <div className='ContactHeading'>
       <h1>{'<'}<span className="colorB">Contact</span>{'/>'}</h1>
        </div>
        <div className="contact_content">
            <h1 className='colorB'>Let's Connect</h1>
            <p className='contact_para'>
                I am currently seeking a job opportunity as a web developer,
                and I would love to hear from you if you have a project 
                you'd like to discuss. 
                Please feel free to contact me</p>
               <button className='Connect_button'><a href="mailto:muadpn434@gmail.com" ><h3 className='colorB'>@Connect</h3></a>
               </button>
        </div>
        <div className="contact_logo">
            <span>
              <a href="https://www.youtube.com/channel/UCdZ3yzkuTCCofcyKLLJMCJQ"
              target="_blank" rel="noopener noreferrer"
               onMouseEnter={()=> setYoutube(true)} onMouseLeave={()=> setYoutube(false)} >
                <img src={!Youtube ? youtube : youtube_blue} alt="youtube" />
              </a>
              
              <a href="https://steamcommunity.com/id/gh0_st/" 
              target="_blank" rel="noopener noreferrer"
              onMouseEnter={()=> setSteam(true)} onMouseLeave={()=> setSteam(false)}>
                <img src={!Steam ? steam : steam_blue} alt="steam"/>
              </a>

              <a href="https://www.instagram.com/gh0._.st/"
              target="_blank" rel="noopener noreferrer"
              onMouseEnter={()=> setInstagram(true)} onMouseLeave={()=> setInstagram(false)}>
                <img src={!Instagram ? instagram : instagram_blue} alt="Instagram"/>
              </a>
              <a href="https://www.linkedin.com/in/mouad-pn/"
              target="_blank" rel="noopener noreferrer"
              onMouseEnter={()=> setLinkedIn(true)} onMouseLeave={()=> setLinkedIn(false)}>
                <img src={!LinkedIn ? linkedin : linkedin_blue} alt="LinkedIn"/>
                </a>
            </span>
        </div>
      </div>
  )
}

export default Contact
