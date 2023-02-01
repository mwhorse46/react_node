import React, { useEffect, useState } from 'react';
import logo from '../imgs/Logo.png';
import { Fade } from 'react-reveal';

const APP = (props) => {
    const [timeCnt, setTimeCnt] = useState(0);
    const [points, setPoints] = useState([]);

    useEffect(() => {
        let tmpTimeCnt = timeCnt + 1;
        if (tmpTimeCnt < 120) {
            setTimeout(() => {
                let tmpTimeCnt = timeCnt + 1;
                setTimeCnt(tmpTimeCnt)
            }, 10);
        }
        if (tmpTimeCnt % 20 == 0) {
            let topPos = ((tmpTimeCnt / 20) * 12 + 18) + 'vh';
            let defaultPoint = <div className='stage-point' style={{top: topPos}} onClick={() => updateStage((tmpTimeCnt / 20 - 1))}/>;
            if (tmpTimeCnt / 20 == (props.stage + 1))
                defaultPoint = <div className='stage-main-point' style={{top: topPos}}/>;
            setPoints([...points, defaultPoint]);
        }
    }, [timeCnt]);

    useEffect(() => {
        if (timeCnt >= 119) {
            let tmpPoints = [];
            for(let i = 0 ; i < 6 ; i ++) {
                let topPos = ((i + 1) * 12 + 18) + 'vh'; 
                let defaultPoint = <div className='stage-point' style={{top: topPos}} onClick={() => updateStage(i)}/>;
                if (i == props.stage)
                    defaultPoint = <div className='stage-main-point' style={{top: topPos}}/>;
                tmpPoints.push(defaultPoint);
            }
            setPoints(tmpPoints);
        }        
    }, [props.stage]);

    const updateStage = (i) => {
        props.setStage(i)
    }

    let height = ((timeCnt + 1) * 60 / 100) + 'vh'
    let top = (((timeCnt + 1) * 60 / 100) + 18) + 'vh'

    return (
        <div className="time-line">
            <div className='position-absolute logo-img'>
                <img src={logo} className='w-100 h-100' alt='logo'/>
            </div>
            <>
                <Fade top when={props.isShowTimeline}>
                    <div className='position-absolute line-w-1' style={{height: height}}/>    
                    <div className='position-absolute line-point-animate' style={{top: top}}/>    
                    {points} 
                </Fade>
            </>
        </div>
    );
};

export default APP;
