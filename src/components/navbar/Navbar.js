import React , {useState} from 'react';
import { BsCardHeading } from "react-icons/bs";
import {AiOutlineBars} from "react-icons/ai";
import {RiCloseLine} from "react-icons/ri";
import './Navbar.css';


const Navbar = () => {
    const [showIcon,setShowIcon] =useState(false);

    const toggleMenu = () =>{
        setShowIcon(!showIcon);
    }

    return (
       <nav className='navbar container'>
           <div className='menuu'>
               <ul className='nav-link' id={showIcon ? "show-linkes-mobile" : "show-linkes-mobile-hide"} >
                   <li><a href="" className='btn btn-dark'>خانه</a></li>
                   <li><a href="">آموزش</a></li>
                   <li><a href="">امکانات</a></li>
                   <li><a href="">دانلود</a></li>
                   <li><a href="">مشترک شوید</a></li>
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
