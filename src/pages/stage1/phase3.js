import React, { useEffect, useState } from 'react';
import keyboardImg from '../../imgs/Lore/Keyboard.png'
import Fade from 'react-reveal/Fade';

const APP = (props) => {
  return (
    <div className='phase'>
      {props.pageState == true ?
        <Fade bottom cascade when={props.pageState}>
          <div className='phase-container'>
            <div className='phase-header'>
              <img src={keyboardImg} />
            </div>
            <div className='phase-body'>
              <p> The journey to escape the Matrix is a difficult and dangerous one. Many Matrix Escapers have spent years, if not decades, searching for a way out. They have scoured the virtual world for clues, hacked into the Matrix's code, and even formed underground networks to share information and resources.</p>
            </div>
          </div>
        </Fade>
        :
        <Fade top when={props.pageState}>
          <div className='phase-container'>
            <div className='phase-header'>
              <img src={keyboardImg} />
            </div>
            <div className='phase-body'>
              <p> The journey to escape the Matrix is a difficult and dangerous one. Many Matrix Escapers have spent years, if not decades, searching for a way out. They have scoured the virtual world for clues, hacked into the Matrix's code, and even formed underground networks to share information and resources.</p>
            </div>
          </div>
        </Fade>
      }
    </div>
  );
};

export default APP;
