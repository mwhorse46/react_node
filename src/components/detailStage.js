import React, { useEffect, useState } from 'react';
import Stage1Page from '../pages/stage1';
import Stage2Page from '../pages/stage2';
import Stage3Page from '../pages/stage3';
import Stage4Page from '../pages/stage4';
import Stage5Page from '../pages/stage5';
import LoginPage from '../pages/login'

const APP = (props) => {
    return (
        <div className='stage-detail-page'>
            <Stage1Page pageState = {props.pageState} />
            <Stage3Page pageState={props.pageState.isStage3}/>
            <Stage4Page pageState={props.pageState.isStage4}/>
            <Stage5Page pageState={props.pageState.isStage5}/>
            <LoginPage pageState={props.pageState.isStage6}/>
        </div>
    );
};

export default APP;
