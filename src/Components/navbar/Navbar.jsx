import React,{useState} from 'react'
import Logo from '../../assets/image/Logo.svg'
import './navbar.css'
import { RiMenu3Line ,RiCloseLine} from 'react-icons/ri'
function Navbar() {
 const [toggleMenu,setToggleMenu]= useState(false)
  const Menu = ()=> {
    return(
    <>
          
          <ul>
          <li>
            <p><span className='colorA'>{'<'}</span><a href="#about">About</a><span className='colorA'>{'/>'}</span></p>
          </li>
          <li>
            <p><span className='colorA'>{'<'}</span><a href="#Experience">Experience</a><span className='colorA'>{'/>'}</span></p>
          </li>
          <li>
            <p><span className='colorA' >{'<'}</span><a href="#Skills">Skills</a><span className='colorA'>{'/>'}</span></p>
          </li>
          <li>
            <p><span className='colorA' >{'<'}</span><a href="#Projects">Projects</a><span className='colorA'>{'/>'}</span></p>
          </li>
          <li>
            <p><span className='colorA' >{'<'}</span><a href="#Contact">Contact</a><span className='colorA'>{'/>'}</span></p>
          </li>
          
        </ul>
        
    </>
  )}
  return (
    <>
    <div className="navbar_Container">
        <img src={Logo} alt='hello' />
        <div className='navbarList'>
            <Menu/>
        </div>
        <div className="mobmenu">
        {
          toggleMenu && <div className='navslider slide-bottom'>
          <aside className='navAside'>
            <Menu />
        </aside>
        </div> 
        }
        {toggleMenu ? <RiCloseLine  color='#fff' size={27} onClick={()=>setToggleMenu(false)}/> 
        : <RiMenu3Line color='#fff'  size={27} onClick={()=>setToggleMenu(true)}/> }
        
        </div>
    </div>
    </>
    )
}

export default Navbar