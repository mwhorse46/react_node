import React, { useEffect, useState } from 'react';
import rebelsImg from '../../imgs/Lore/Rebels.png'
import Fade from 'react-reveal/Fade';

const APP = (props) => {
  return (

    <div className='phase'>
      {props.pageState == true ?
        <Fade bottom cascade when={props.pageState}>
          <div className='phase-container'>
            <div className='phase-header'>
              <img src={rebelsImg} />
            </div>
            <div className='phase-body'>
              <p>Despite the challenges. Matrix Escapers continue to fight for their freedom. Some have even succeeded in breaking free from the Matrix, and have shared their knowledge and experiences with others in the hopes of helping them escape as well</p>
              <p>The Matrix Escapers are a small but determined group, united in their quest to break free from the virtual prison that holds them captive.</p>
              <p>They may not know what lies beyond the Matrix, but they are willing to risk everything to find out.</p>
            </div>
          </div>
        </Fade>
        :
        <Fade top when={props.pageState}>
          <div className='phase-container'>
            <div className='phase-header'>
              <img src={rebelsImg} />
            </div>
            <div className='phase-body'>
              <p>Despite the challenges. Matrix Escapers continue to fight for their freedom. Some have even succeeded in breaking free from the Matrix, and have shared their knowledge and experiences with others in the hopes of helping them escape as well</p>
              <p>The Matrix Escapers are a small but determined group, united in their quest to break free from the virtual prison that holds them captive.</p>
              <p>They may not know what lies beyond the Matrix, but they are willing to risk everything to find out.</p>
            </div>
          </div>
        </Fade>
      }
    </div>
  );
};

export default APP;
