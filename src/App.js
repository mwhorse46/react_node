import './App.css';
import React, { useState } from 'react';
import FirstPage from './pages'
import DetailPage from './pages/detailPage'
import TimeLine from './components/timeLine'

const APP = () => {
  const [isFirstPage, setFirstPage] = useState(true);
  const [isShowTimeline, setShowTimeline] = useState(false);

  const [isPhase1, setPhase1] = useState(false);
  const [isPhase2, setPhase2] = useState(false);
  const [isPhase3, setPhase3] = useState(false);
  const [isPhase4, setPhase4] = useState(false);
  const [isPhase5, setPhase5] = useState(false);
  const [isPhase6, setPhase6] = useState(false);
  const [isPhase6HideFirstStep, setPhase6HideFirstStep] = useState(false);
  const [isPhase6SecondStep, setPhase6SecondStep] = useState(false);

  const [isStage2, setStage2] = useState(false);
  const [isStage3, setStage3] = useState(false);
  const [isStage4, setStage4] = useState(false);
  const [isStage5, setStage5] = useState(false);
  const [isStage6, setStage6] = useState(false);

  const setPhase = (index) => {
    switch (index) {
      case 1:
        setPhase1(true);
        setPhase2(false);
        setPhase3(false);
        setPhase4(false);
        setPhase5(false);
        setPhase6(false);
        break;
      case 2:
        setPhase2(true);
        setPhase1(false);
        setPhase3(false);
        setPhase4(false);
        setPhase5(false);
        setPhase6(false);
        break;
      case 3:
        setPhase3(true);
        setPhase1(false);
        setPhase2(false);
        setPhase4(false);
        setPhase5(false);
        setPhase6(false);
        break;
      case 4:
        setPhase4(true);
        setPhase1(false);
        setPhase2(false);
        setPhase3(false);
        setPhase5(false);
        setPhase6(false);
        break;
      case 5:
        setPhase5(true);
        setPhase1(false);
        setPhase2(false);
        setPhase3(false);
        setPhase4(false);
        setPhase6(false);
        break;
      case 6:
        setPhase6(true);
        setPhase1(false);
        setPhase2(false);
        setPhase3(false);
        setPhase4(false);
        setPhase5(false);
        break;
      case 0:
        setPhase1(false);
        setPhase2(false);
        setPhase3(false);
        setPhase4(false);
        setPhase5(false);
        setPhase6(false);
        break;
      default:
        setPhase1(false);
        setPhase2(false);
        setPhase3(false);
        setPhase4(false);
        setPhase5(false);
        setPhase6(false);
        break;
    }
  }

  const setStage = (index) => {
    switch (index) {
      case 2:
        setStage2(true);
        setStage3(false);
        setStage4(false);
        setStage5(false);
        setStage6(false);
        break;
      case 3:
        setStage2(false);
        setStage3(true);
        setStage4(false);
        setStage5(false);
        setStage6(false);
        break;
      case 4:
        setStage2(false);
        setStage3(false);
        setStage4(true);
        setStage5(false);
        setStage6(false);
        break;
      case 5:
        setStage2(false);
        setStage3(false);
        setStage4(false);
        setStage5(true);
        setStage6(false);
        break;
      case 6:
        setStage2(false);
        setStage3(false);
        setStage4(false);
        setStage5(false);
        setStage6(true);
        break;
      case 0:
        setStage2(false);
        setStage3(false);
        setStage4(false);
        setStage5(false);
        setStage6(false);
        break;
      default:
        setStage2(false);
        setStage3(false);
        setStage4(false);
        setStage5(false);
        setStage6(false);
        break;
    }
  }

  window.onscroll = () => {
    if (document.documentElement.scrollTop > window.screen.height / 2) {
      setShowTimeline(true);
    } else {
      setShowTimeline(false);
    }

    let index = Math.floor((document.documentElement.scrollTop) / (window.innerHeight * 0.5)) - 2;
    if (index === -2) setFirstPage(true);
    else setFirstPage(false);

    if (index < 0) setPhase(0);
    else if (index / 6 < 6) {
      if (index % 6 === 0) setPhase(0);
      else if (index % 6 === 2) setPhase(Math.floor(index / 6) + 1);
      else if (index % 6 === 4) setPhase(0);
    } else {
      if (index / 6 === 6) {
        if (index % 6 === 0) { setPhase6SecondStep(false); }
        else if (index % 6 === 2) { setPhase6SecondStep(true); }
        else if (index % 6 === 4) { setPhase6SecondStep(false); }
      } else {
        if (index % 6 === 0) setStage(Math.floor(index / 6) - 6 + 1)
        else if (index % 6 === 4) setStage(0)
      }
    }
  }

  return (
    <>
      <FirstPage isFirstPage={isFirstPage} />
      <DetailPage
        isPhase1={isPhase1}
        isPhase2={isPhase2}
        isPhase3={isPhase3}
        isPhase4={isPhase4}
        isPhase5={isPhase5}
        isPhase6={isPhase6}
        isPhase6HideFirstStep={isPhase6HideFirstStep}
        isPhase6SecondStep={isPhase6SecondStep}

        isStage2={isStage2}
        isStage3={isStage3}
        isStage4={isStage4}
        isStage5={isStage5}
        isStage6={isStage6}
      />

      <TimeLine isShowTimeline={isShowTimeline} />
    </>
  );
};

export default APP;
