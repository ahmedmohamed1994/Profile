import React from 'react';
import { NavLink , Link} from 'react-router-dom'

import './Header.css';

const header = ()=>{
    return(

       
    <div className="navbar">
            
       <div className="container">
           
           <div className="logo">
               <h2 className="logo-text">
               <Link className="logo-link" exact to="/">My Profile</Link></h2>
           </div>
           
           
           <ul className="ul-list">
              <li className="list-item"> <NavLink exact to="/">Home</NavLink></li>
              <li className="list-item"> <NavLink to="/about">About</NavLink></li>
              <li className="list-item"> <NavLink to="/work">Work</NavLink></li>
              <li className="list-item"> <NavLink to="/portfolio">Portfolio</NavLink></li>
              <li className="list-item"> <NavLink to="/resume">Resume</NavLink></li>
              <li className="list-item"> <NavLink to="/blog">Blog</NavLink></li>
              <li className="list-item"> <NavLink to="/contact">Contact</NavLink></li>

           </ul>
           
       </div>
       
   </div>
       
    
    );
}
export default header;