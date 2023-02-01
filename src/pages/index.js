import React, { useEffect, useState } from 'react';
import logo from '../imgs/Logo.png';
import fixed_back from '../imgs/DystopiaLayers/first/5.png'
import fixed_wave from '../imgs/DystopiaLayers/first/6.png'
import Fade from 'react-reveal/Fade'

const APP = (props) => {
    return (
    <Fade when={props.isFirstPage}>
      <div className='position-relative'>        
        <div className='header'>
            <ul className='mb-2'>
                <li className='px-4'>
                    HOME
                </li>
                <li className='px-4'>
                    STAKING
                </li>
                <li className='px-4'>
                    MARKETPLACE
                </li>
            </ul>
        </div>        
        <div className='position-relative w-100 parent'>
            <div className='position-absolute back-first w-100 h-100'/>
            <div className='position-absolute back-second w-100 h-100'/>
            <img 
            src={fixed_back}
            className='position-absolute back-third w-100 h-100' 
            />
            <div className='position-absolute wave-animation w-100 h-100' />
            
            <img 
            src={fixed_wave}
            className='position-absolute back-sixth w-100 h-100' 
            />
            <div className='position-absolute back-seventh w-100 h-100' />
            <div className='position-absolute person-animation w-100 h-100' />
        </div>
      </div>      
    </Fade>
  );
};

export default APP;
