import React from 'react';
import Phase1Page from './phase1';
import Phase2Page from './phase2';
import Phase3Page from './phase3';
import Phase4Page from './phase4';
import Phase5Page from './phase5';
import Phase6Page from './phase6';

const APP = (props) => {

    return (
        <>
            <div className='position-relative'>
                <Phase1Page pageState={props.pageState.isPhase1}/>
                <Phase2Page pageState={props.pageState.isPhase2}/>
                <Phase3Page pageState={props.pageState.isPhase3}/>
                <Phase4Page pageState={props.pageState.isPhase4}/>
                <Phase5Page pageState={props.pageState.isPhase5}/>
                <Phase6Page pageState={props.pageState.isPhase6} pageHideState={props.pageState.isPhase6HideFirstStep} pageSecondState={props.pageState.isPhase6SecondStep} stageState={props.pageState.isStage2}/>
            </div>
        </>
    );
};

export default APP;
