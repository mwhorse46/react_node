import React, { useEffect, useState } from 'react';
import agentImg from '../../imgs/Lore/Agent.png'
import Fade from 'react-reveal/Fade';

const APP = (props) => {
  return (
    <div className='phase'>
      {props.pageState == true ?
        <Fade bottom cascade when={props.pageState}>
          <div className='phase-container'>
            <div className='phase-header'>
              <img src={agentImg} />
            </div>
            <div className='phase-body'>
              <p> But the Matrix is a formidable enemy, with a never-ending supply of Agent programs designed to hunt down and eliminate any threats to its stability. The Matrix Escapers must stay one step ahead at all times, using their cunning and resourcefulness to evade detection and outmaneuver their pursuers.</p>
            </div>
          </div>
        </Fade>
        :
        <Fade top when={props.pageState}>
          <div className='phase-container'>
            <div className='phase-header'>
              <img src={agentImg} />
            </div>
            <div className='phase-body'>
              <p> But the Matrix is a formidable enemy, with a never-ending supply of Agent programs designed to hunt down and eliminate any threats to its stability. The Matrix Escapers must stay one step ahead at all times, using their cunning and resourcefulness to evade detection and outmaneuver their pursuers.</p>
            </div>
          </div>
        </Fade>
      }
    </div>
  );
};

export default APP;
