import React, { useEffect, useState } from 'react';
import ImageFramePlayer from '../../components/imageFramePlayer'

const Stage2Index = (props) => {
    return (
    <div className='phase-container'>
        <div className='phase-header'>
            <h1 className='text-center'>Genesis Pill Utility</h1>
        </div>  
        <div className='phase-body'>    
            <div className='d-flex justify-content-center align-items-center m-auto w-75'>
                <div className='stage2-player m-auto'>
                    <ImageFramePlayer />
                </div>
                <div>
                    <ul>
                        <li>
                            Life Time access to The Secret Room(Weekly utility)
                        </li>
                        <li>
                            Free Escapers NFT airdrops.
                        </li>
                        <li>
                            Access to the private community.
                        </li>
                        <li>
                            Royalty distribution.
                        </li>
                        <li>
                            Staking reward multiplier
                        </li>
                        <li>
                            Lifetime WL in future Mints
                        </li>
                        <li>
                            Access to special Genesis Pill-only giveaways and raffles
                        </li>
                        <li>
                            Booster
                        </li>
                        <li>
                            Exclusive benefits in 
                        </li>
                        <li>
                            More TBA!
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Stage2Index;
