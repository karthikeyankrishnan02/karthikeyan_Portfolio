import React from 'react'
import { Link } from 'react-scroll'
import "./Topcontent.css"

const Topcontent = () => {
  return (
    <div className='topContent'>
        <div className='topContent_container'>
        <h1>K.KARTHIKEYAN</h1>
        <p>FRONT END DEVELOPER</p>
        <a href='www.google.comnpx'>
            <button className='topContent_downloadButton'href="C:\Users\karth\OneDrive\uniqjobstask\react applicatio">Download Cv</button>
        </a>
        <Link to="projects" smooth={true} duration={500}>
            <button className='topContent_workButton'>My Work</button>
        </Link>
        </div>
       
    </div>
  )
}

export default Topcontent
