import React , {useState} from 'react';
import './auth.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Register = () => {
     const [name,setName] = useState("");
     const [lastName,setLastName] = useState("");
     const [email,setEmail] = useState("");
     const [password,setPassword] = useState("");
     const [phoneNameber,setPhoneNameber] = useState("");
     const [Adress,setAdress] = useState("");



    return (
        <div className='auth register'>
            <div className='container'>
                <div className='row alight-item-center min-vh-100 auth-res' >
                  <div className='col-lg-4 col-md-6 bg-dark py-4 rounded'>
                      <div className='text-center text-white'>
                          <h2 className='fw-bold mb-5 auth-title'>
                              ثبت نام کنید
                          </h2>
                      </div>
                      <form>
                          <div className='form-group mt-3'>
                              <label htmlFor='' className='text-white mb-2'>نام شما</label>
                              <input
                              type="text"
                              className='form-control mb-1'
                              name='name'
                              />
                              


                          </div>
                          <div className='form-group mt-3'>
                              <label htmlFor='' className='text-white mb-2'>نام خانوادگی</label>
                              <input
                              type="text"
                              className='form-control mb-1'
                              name='lastName'
                              />
                              
                          </div>
                          <div className='form-group mt-3'>
                              <label htmlFor='' className='text-white mb-2'>ایمیل </label>
                              <input
                              type="text"
                              className='form-control mb-1'
                              name='email'
                              />

                              
                          </div>
                          <div className='form-group mt-3'>
                              <label htmlFor='' className='text-white mb-2'>رمز عبور </label>
                              <input
                              type="text"
                              className='form-control mb-1'
                              name='password'
                              />

                              
                          </div>

                          <div className='form-group mt-3'>
                              <label htmlFor='' className='text-white mb-2'>شماره تماس </label>
                              <input
                              type="text"
                              className='form-control mb-1'
                              name='phoneNameber'
                              />
                              
                              
                          </div>
                  
                          <div className='form-group mt-3'>
                              <label htmlFor='' className='text-white mb-2'>آدرس  </label>
                              <input
                              type="text"
                              className='form-control mb-1'
                              name='Adress'
                              />
                              
                              
                          </div>


                          <div className='form-group mt-3'>
                              {/* <label htmlFor='' className='text-white mb-2'>آدرس  </label> */}
                              <input type="radio" value="owner" name="userType"/> صاحب کسب و کار
                              <input type="radio" value="user" name="userType"/> کاربر استفاده کننده
                              
                          </div>

                          <div className='form-group mt-4'>
                              <button type='submit' className='btn btn-success w-100' >ثبت نام</button>

                          </div>
                      </form>

                  </div>
                </div>

            </div>
            
        </div>
    );
}

export default Register;
