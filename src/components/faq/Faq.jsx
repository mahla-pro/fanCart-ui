import React  , {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css' ;
import {MdOutlineLibraryBooks} from "react-icons/md";
import {questions} from "./data.js";
import Question from './Question';
import './faq.css';

const Faq = () => {

    useEffect(() => {
       AOS.init({
           duration:1000
       });
       
    }, []);

    return (
        <section id="faq">
          <div className='container faq'>
              <div className='faq-title' data-aos="fade-up" >
                <MdOutlineLibraryBooks color='orangered' size={30}/>
                <h2>سوالات متداول</h2>
                <p>نمونه سوالاتی که احتمال پرسیده شدنشان زیاد است</p>
              </div>
              <div className='questions'>
                {
                  questions && questions.map((question) =>
                  <Question
                    key ={question.key}
                    title = {question.title}
                    answer= {question.answer}
                     />

                  )
                }


              </div>

          </div>

        </section>
    );
}

export default Faq;
