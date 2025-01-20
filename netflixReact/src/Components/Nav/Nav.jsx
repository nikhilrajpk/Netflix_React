import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
    const [show, handleShow] = useState(false)
    useEffect(()=>{
        const scrollFunc = ()=>{
            if(window.scrollY > 300){
                handleShow(true)
            }else{
                handleShow(false)
            }
        }
        window.addEventListener('scroll',scrollFunc)
        
        return ()=>{
            window.removeEventListener('scroll', scrollFunc)
        }
    },[])

  return (
    <div className={`nav ${show && 'nav_black'}`}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" 
        alt="Netflix"
        className="nav_logo" />

        <div className="nav_righttop">

            <button className='search'>Search</button>

            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
            alt="Profile"
            className="nav_avatar" />
        </div>
    </div>
  )
}

export default Nav