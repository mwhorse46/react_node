import React, { useEffect, useState } from 'react';
import aberraImg from '../../imgs/Team/Aberration.png'
import alluImg from '../../imgs/Team/Allu.png'
import asdImg from '../../imgs/Team/Asd.png'
import xenoImg from '../../imgs/Team/Xeno.png'

const Stage4Index = (props) => {
    return (
        <div className='phase'>
            <div className='phase-container h-100'>
                <div className='phase-header'>
                    <h1 className='text-center'>Meet The Team</h1>
                </div>
                <div className='phase-body w-90'>
                    <div className='row'>
                        <div className='col-3 img-card position-relative cursor-pointer'>
                            <div>
                                <div>
                                    <img src={xenoImg} className='w-100' />
                                </div>
                                <h3 className='text-center'>XENO</h3>
                                <p className='text-center'>founder</p>
                            </div>
                            <div className='detail position-absolute left-0 top-0 d-flex justify-content-center flex-column w-100'>
                                <h4 className='text-center'>XENO</h4>
                                <p className='text-center'>founder</p>
                                <p className='text-center'>Some text here</p>
                                <p className='text-center'>about XENO</p>
                            </div>
                        </div>
                        <div className='col-3 img-card position-relative cursor-pointer'>
                            <div>
                                <div>
                                    <img src={alluImg} className='w-100' />
                                </div>
                                <h3 className='text-center'>Alluebin</h3>
                                <p className='text-center'>3D&Pixel Artist</p>
                            </div>
                            <div className='detail position-absolute left-0 top-0 d-flex justify-content-center flex-column w-100'>
                                <h4 className='text-center'>Alluebin</h4>
                                <p className='text-center'>3D&Pixel Artist</p>
                                <p className='text-center'>Some text here</p>
                                <p className='text-center'>about Alluebin</p>
                            </div>
                        </div>
                        <div className='col-3 img-card position-relative cursor-pointer'>
                            <div>
                                <div>
                                    <img src={aberraImg} className='w-100' />
                                </div>
                                <h3 className='text-center'>AberratiOn</h3>
                                <p className='text-center'>PFP Artist</p>
                            </div>
                            <div className='detail position-absolute left-0 top-0 d-flex justify-content-center flex-column w-100'>
                                <h4 className='text-center'>AberratiOn</h4>
                                <p className='text-center'>PFP Artist</p>
                                <p className='text-center'>Some text here</p>
                                <p className='text-center'>about AberratiOn</p>
                            </div>
                        </div>
                        <div className='col-3 img-card position-relative cursor-pointer'>
                            <div>
                                <div>
                                    <img src={asdImg} className='w-100' />
                                </div>
                                <h3 className='text-center'>Asd</h3>
                                <p className='text-center'>Researcher</p>
                            </div>
                            <div className='detail position-absolute left-0 top-0 d-flex justify-content-center flex-column w-100'>
                                <h4 className='text-center'>Asd</h4>
                                <p className='text-center'>Researcher</p>
                                <p className='text-center'>Some text here</p>
                                <p className='text-center'>about Asd</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stage4Index;
