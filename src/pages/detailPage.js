import React, { useEffect, useState } from 'react';
import TimeLine from '../components/timeLine'
import DetailStage from '../components/detailStage'

const APP = (props) => {

    return (
    <>
      <div className='position-relative bg-black'>
        <DetailStage pageState = {props}/>
      </div>      
    </>
  );
};

export default APP;
