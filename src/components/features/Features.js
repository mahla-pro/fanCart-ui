import React from 'react';
import {BsFillBookmarkStarFill} from 'react-icons/bs';
import {BsHexagon} from 'react-icons/bs';
import pcCart from '../../assets/pc-cart.png';
import  AOS  from 'aos';
import 'aos/dist/aos.css';
import './Features.css';
import {FeaturesList} from './data.js';

const Features = () => {
    return (
        <section  id="features">
            <div className='container features'>
                <div className='title'  data-aos ="fade-up">
                    <BsFillBookmarkStarFill color='orangered'  size="30" />
                    <h2>ویژگیهای اصلی</h2>
                    <p>با استفاده از  این کارت ها امکان تخفیف گروهی و اهدای هدیه وجود دارد</p>
                    
                </div>
                <div className='feature-content'>
                    <div className='features-right' data-aos="fade-right">
                        <img src={pcCart} clt="" />
                    </div>
                 <div className='features-left' data-aos="fade-left" >

                     {
                        FeaturesList.map( feature =>(
                            <div className='feature'  key={feature.id}>
                                <div className='feature-icon'>
                                <BsHexagon color='#fc5412' size={55} />
                                <div className='inner-icon'> {feature.icon}</div>
                                </div>
                                <div className='feature-text'>
                                    <h2>{feature.heading}</h2>
                                    <p>{feature.text}</p>
                                    </div>
                                </div>
                        ))


                     }

                </div>  

                </div>

            </div>

        </section>
    );
}

export default Features;
