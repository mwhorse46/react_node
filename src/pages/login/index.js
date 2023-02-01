import React, { useEffect, useState } from 'react';

const LoginPage = (props) => {    
    return (
    <div className='phase-container'>
        <div className='phase-header'>
            <h1 className='text-center'>Secret Raffle</h1>
        </div>  
        <div className='phase-body w-90'>    
            <div className='text-center mb-4'>
                Subscribe our newsletter to enter a secret raffle!
            </div>
            <div>
                <input className='form-control text-control' placeholder='Enter e-mail address'/>
            </div>
            <div>
                <input className='form-control text-control' placeholder='Enter e-mail address'/>
            </div>
            <div>
                <input className='form-control text-control' placeholder='Enter e-mail address'/>
            </div>
            <div className='text-center'>
                <button className='btn btn-control'>SUBSCRIBE</button>
            </div>
        </div>
    </div>
  );
};

export default LoginPage;
