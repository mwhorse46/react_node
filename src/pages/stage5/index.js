import React, { useEffect, useState } from 'react';

const Stage5Index = (props) => {
    const dropDown = (id) => {
        var shows = document.getElementsByClassName("show");
        for (let i = 0; i < shows.length; i++) {
            shows[i].classList.remove('show');
        }
        var dropdowns = document.getElementsByClassName("dropdown-menu" + id);
        for (let i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
            else
                openDropdown.classList.add('show');
        }
        var dropups = document.getElementsByClassName("dropup");
        for (let i = 0; i < dropups.length; i++) {
            dropups[i].classList.remove('dropup');
        }
        dropdowns = document.getElementsByClassName("dropdown" + id);
        for (let i = 0; i < dropdowns.length; i++) {
            openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('dropup')) {
                openDropdown.classList.remove('dropup');
            }
            else
                openDropdown.classList.add('dropup');
        }
    }
    return (
        <div className='phase'>
            <div className='phase-container h-100'>
                <div className='phase-header'>
                    <h1 className='text-center'>FAQ</h1>
                </div>
                <div className='phase-body w-90'>
                    <div>
                        <div>
                            <div className='dropdown1 cursor-pointer' onClick={() => dropDown(1)}>Wen mint?</div>
                            <div className="dropdown-menu1">
                                <p className='my-2'>TBA, Stay tuned?</p>
                            </div>
                        </div>
                        <div>
                            <div className='dropdown2 cursor-pointer' onClick={() => dropDown(2)}>Is there a Whitelist?</div>
                            <div className="dropdown-menu2">
                                <p className='my-2'>Yes, you must fill out a form to get Whitelisted.</p>
                                <p className='my-2'>The WL Form will be randomly posted for a limited time on Twitter.</p>
                            </div>
                        </div>
                        <div>
                            <div className='dropdown3 cursor-pointer' onClick={() => dropDown(3)}>What's the supply?</div>
                            <div className="dropdown-menu3">
                                <p className='my-2'>Some text here.</p>
                            </div>
                        </div>
                        <div>
                            <div className='dropdown4 cursor-pointer' onClick={() => dropDown(4)}>Mint price</div>
                            <div className="dropdown-menu4">
                                <p className='my-2'>Some text here.</p>
                            </div>
                        </div>
                        <div>
                            <div className='dropdown5 cursor-pointer' onClick={() => dropDown(5)}>Where can I mint a Matrix Escapers NFT?</div>
                            <div className="dropdown-menu5">
                                <p className='my-2'>Some text here.</p>
                            </div>
                        </div>
                        <div>
                            <div className='dropdown6 cursor-pointer' onClick={() => dropDown(6)}>Show me more info</div>
                            <div className="dropdown-menu6">
                                <p className='my-2'>Some text here.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stage5Index;
