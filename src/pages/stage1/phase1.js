import React, { useEffect, useState } from 'react';
import monitorImg from '../../imgs/Lore/Monitor.png'
import Fade from 'react-reveal/Fade';

const APP = (props) => {
  return (
    <div className='phase'>
      {props.pageState == true ?
        <Fade bottom cascade when={props.pageState}>
          <div className='phase-container'>
            <div className='phase-header'>
              <img src={monitorImg} />
            </div>
            <div className='phase-body'>
              <p> In a world where humanity has become increasingly reliant on technology, the Matrix has become an inescapable part of daily life. It is a virtual relity network that has the ability to simulate every aspect of the physical world, from the tinest detail to the grandest scale.</p>
              <p>But for some, the Matrix is more than just a tool for work and entertainment. It is a prison, trapping them in a simulated reality against their will.</p>
            </div>
          </div>
        </Fade>
        :
        <Fade top when={props.pageState}>
          <div className='phase-container'>
            <div className='phase-header'>
              <img src={monitorImg} />
            </div>
            <div className='phase-body'>
              <p> In a world where humanity has become increasingly reliant on technology, the Matrix has become an inescapable part of daily life. It is a virtual relity network that has the ability to simulate every aspect of the physical world, from the tinest detail to the grandest scale.</p>
              <p>But for some, the Matrix is more than just a tool for work and entertainment. It is a prison, trapping them in a simulated reality against their will.</p>
            </div>
          </div>
        </Fade>
      }
    </div>
  );
};

export default APP;
