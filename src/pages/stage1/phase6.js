import React, { useEffect, useState } from 'react';
import ImageFramePlayer from '../../components/imageFramePlayer'
import Fade from 'react-reveal/Fade';

const APP = (props) => {
  const [showStagePage, setShowStagePage] = useState(false);

  const moveLeft = () => {
    if (props.stageState == true) {
      const elem = document.getElementById('img-frame');
      elem.style.left = '-300px';
      setTimeout(() => {
        setShowStagePage(true)
      }, 2000);
    }
  }

  // useEffect(() => {
  //   if (props.stageState == true)
  //     moveLeft();
  //   else {
  //     setShowStagePage(false)
  //   }
  // }, [props.stageState])

  return (
    <div className='phase phase6'>
      {
        console.log(props)
      } 
      <div className='phase-container phase-container-6'>
        <Fade bottom when={props.pageState | props.pageSecondState}>
          <div className='phase-header'>
            <h1 className='text-center'>You have two choices : </h1>
          </div>
        </Fade>
        {props.pageState &&
          <Fade when={!props.pageHideState}>
            <div className='phase-body'>
              <div className='position-relative text-center mt-20'>
                <p>1. You listen to your fear and take no action...</p>
                <p>They story ends, you keep living your usual unfufiling life...</p>
              </div>
            </div>
          </Fade>
        }
        {props.pageSecondState &&
          <Fade when={props.pageSecondState}>
            <div className='phase-body'>
              <div className='position-relative text-center mt-20'>
                <p>2. You take the Red Genesis Pill...</p>
                <p>You're ready to escape the Matrix <br /> and I'll show you how deep the rabbit hole goes.</p>
              </div>
            </div>
          </Fade>
        }

      </div>
    </div>
  );
};

export default APP;
