import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../../imgs/PFP/PFP2.png'
import img2 from '../../imgs/PFP/PFP3.png'
import img3 from '../../imgs/PFP/PFP4.png'
import img4 from '../../imgs/PFP/PFP5.png'
import img5 from '../../imgs/PFP/PFP6.png'
import img6 from '../../imgs/PFP/PFP7.png'
import img7 from '../../imgs/PFP/PFP8.png'
import img8 from '../../imgs/PFP/PFP9.png'
import img9 from '../../imgs/PFP/PFP10.png'
import img10 from '../../imgs/PFP/PFP11.png'
import img11 from '../../imgs/PFP/PFP12.png'
import img12 from '../../imgs/PFP/PFP13.png'
import img13 from '../../imgs/PFP/PFP14.png'
import img14 from '../../imgs/PFP/PFP15.png'
import img15 from '../../imgs/PFP/PFP16.png'
import img16 from '../../imgs/PFP/PFP17.png'
import img17 from '../../imgs/PFP/PFP18.png'
import img18 from '../../imgs/PFP/PFP19.png'
import img19 from '../../imgs/PFP/PFP20.png'

const arrImg = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19];
var settings1 = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 0,
    speed: 8000,
    rtl: false,
    cssEase: 'linear'
};
var settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 0,
    speed: 8000,
    rtl: true,
    cssEase: 'linear'
};

const Stage3Index = (props) => {
    const randomImg = () => {
        let arrDom = [];
        for(let i = 0 ; i < 100 ; i++) {
            arrDom.push(
                <div>
                    <img src={arrImg[Math.floor(Math.random() * 19)]} className='carousel-each'/>
                </div>
            )
        }
        return arrDom;
    }
    return (
        <div className='phase'>
            <div className='phase-container'>
                <div className='phase-header'>
                    <h1 className='text-center'>Escapers PFP Collection</h1>
                </div>  
                <div className='phase-body'>    
                    <div>
                        <div className='position-relative'>
                            <Slider {...settings1}>
                                {randomImg()}
                            </Slider>
                            <div className='position-absolute side-dark left-0 top-0 w-100 h-100 side-dark'></div>
                        </div>
                        <div className='position-relative'>
                            <Slider {...settings2}>
                                {randomImg()}
                            </Slider>
                            <div className='position-absolute side-dark left-0 top-0 w-100 h-100 side-dark'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stage3Index;
