import React from 'react';

const Register = () => {
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
                      </form>

                  </div>
                </div>

            </div>
            
        </div>
    );
}

export default Register;
