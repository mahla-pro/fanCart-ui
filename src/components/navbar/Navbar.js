import React , {useState} from 'react';
import { BsCardHeading } from "react-icons/bs";
import {AiOutlineBars} from "react-icons/ai";
import {RiCloseLine} from "react-icons/ri";
import './Navbar.css';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    const [showIcon,setShowIcon] =useState(false);

    const toggleMenu = () =>{
        setShowIcon(!showIcon);
    }

    return (
       <nav className='navbar container'>
           <div className='menuu'>
               <ul className='nav-link' id={showIcon ? "show-linkes-mobile" : "show-linkes-mobile-hide"} >
                   <li className="nav-item">
                       {/* <a href="" className='btn btn-dark'>خانه</a> */}
                      <NavLink className='nav-link'  to="/">خانه</NavLink>
                       </li>
                   <li className="nav-item">
                       <NavLink className='nav-link'  to="/">آموزش</NavLink>
                    </li>
                   <li className="nav-item">
                       <NavLink className='nav-link'  to="/">امکانات</NavLink>
                       </li>
                   <li className="nav-item">
                       <NavLink className='nav-link'  to="/">دانلود</NavLink>
                       </li>
                   
                   <li className="nav-item">
                
                       <NavLink  className="nav-link" to="/register" >مشترک شوید</NavLink>
                       </li>
                   <li className="nav-item">
                       <NavLink  className="nav-link" to="/register"> ورود</NavLink>
                       </li>
               </ul>

           </div>
           <div className='logo'>
               <BsCardHeading color='#fff' size={30} />
               
               <p className='logo-text'>
                    Fan
                   <span>Cart </span>
               </p>

           </div>
           <div className='menu-icon' onClick={toggleMenu}>
               {
                   showIcon?
                   <RiCloseLine size={35} color={"#fff"} cursor={'pointer'} /> :
                   <AiOutlineBars size={35} color={"#fff"} cursor={"pointer"}  />
               }

           </div>

       </nav>
    );
}

export default Navbar;
