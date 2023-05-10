import React from 'react';
import './footer.css';
import {FaMapMarkerAlt,
    FaPhoneAlt,
    FaFax,
    FaEnvelope,
    FaGlobe} from "react-icons/fa";
    import logo from '../../assets/logo.PNG';


const Footer = () => {
    return (
        <section id='footer'>
            <div className='container footer'>
                <div className='quick-acess'>
                    <h4>لینک های مفید</h4>
                    <div className='footer-links'>
                        <a href='#' >&bull; پشتیبانی</a>
                        <a href='#' >&bull; درباره ما</a>
                        <a href='#' >&bull; اموزش</a>
                        <a href='#' >&bull; خدمات</a>
                       

                    </div>

                </div>
                <div className='support'>
                    <h4>پشتیبانی</h4>
                    <div className='footer-links'>
                    <a href='#' >&bull; پشتیبانی</a>
                        <a href='#' >&bull; درباره ما</a>
                        <a href='#' >&bull; اموزش</a>
                        <a href='#' >&bull; خدمات</a>
                       

                    </div>

                </div>
                <div className='contact'>
                    <h4>راه های ارتباطی</h4>
                    <div className='footer-contact'>
                        <p>
                            <FaMapMarkerAlt /> &nbsp; آدرس : تهران 
                        </p>
                        <p>
                            <FaPhoneAlt/> &nbsp; تلفن :111111
                        </p>
                        <p>
                            <FaFax /> &nbsp; فکس : 1111111111
                        </p>

                        <p>
                            <FaEnvelope /> &nbsp; ایمیل : fancart.card@gmail.com
                        </p>
                        <p>
                            <FaGlobe />&nbsp; وبسایت : www.fancart.ir
                        </p>

                    </div>

                </div>
                <div className='footer-logo'>
                    <img src={logo} alt="" />
                    <p>&copy; copywrite 2021.  mahla-pro</p>

                </div>

            </div>

        </section>
    );
}

export default Footer;
