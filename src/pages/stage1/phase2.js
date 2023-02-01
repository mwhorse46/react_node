import React, { useEffect, useState } from 'react';
import handcuffsImg from '../../imgs/Lore/Handcuffs.png'
import Fade from 'react-reveal/Fade';

const APP = (props) => {
  return (
    <div className='phase'>
      {props.pageState == true ?
        <Fade bottom cascade when={props.pageState}>
          <div className='phase-container'>
            <div className='phase-header'>
              <img src={handcuffsImg} />
            </div>
            <div className='phase-body'>
              <p> These individuals are known as "Matrix Escapers." and they will stop at nothing to break free from their digital chains. Matrix Escapers come from all walks of life. Some were born into the Matrix and have never known the outside world.</p>
              <p>Others were once free but were captured and forced into the virtual reality against their will. Regardless of their origin, they all share a burning desire to escape and reclaim their freedom.</p>
            </div>
          </div>
        </Fade>
        :
        <Fade top when={props.pageState}>
          <div className='phase-container'>
            <div className='phase-header'>
              <img src={handcuffsImg} />
            </div>
            <div className='phase-body'>
              <p> These individuals are known as "Matrix Escapers." and they will stop at nothing to break free from their digital chains. Matrix Escapers come from all walks of life. Some were born into the Matrix and have never known the outside world.</p>
              <p>Others were once free but were captured and forced into the virtual reality against their will. Regardless of their origin, they all share a burning desire to escape and reclaim their freedom.</p>
            </div>
          </div>
        </Fade>
      }
    </div>
  );
};

export default APP;
