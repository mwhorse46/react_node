import React from "react"
import ImageFramePlayer from 'image-frame-player';
import { useEffect } from 'react';

const imgArr = [
  "/assets/imgs/GenesisPill/Frames/0001.png",
  "/assets/imgs/GenesisPill/Frames/0002.png",
  "/assets/imgs/GenesisPill/Frames/0003.png",
  "/assets/imgs/GenesisPill/Frames/0004.png",
  "/assets/imgs/GenesisPill/Frames/0005.png",
  "/assets/imgs/GenesisPill/Frames/0006.png",
  "/assets/imgs/GenesisPill/Frames/0007.png",
  "/assets/imgs/GenesisPill/Frames/0008.png",
  "/assets/imgs/GenesisPill/Frames/0009.png",
  "/assets/imgs/GenesisPill/Frames/0010.png",
  "/assets/imgs/GenesisPill/Frames/0011.png",
  "/assets/imgs/GenesisPill/Frames/0012.png",
  "/assets/imgs/GenesisPill/Frames/0013.png",
  "/assets/imgs/GenesisPill/Frames/0014.png",
  "/assets/imgs/GenesisPill/Frames/0015.png",
  "/assets/imgs/GenesisPill/Frames/0016.png",
  "/assets/imgs/GenesisPill/Frames/0017.png",
  "/assets/imgs/GenesisPill/Frames/0018.png",
  "/assets/imgs/GenesisPill/Frames/0019.png",
  "/assets/imgs/GenesisPill/Frames/0020.png",
  "/assets/imgs/GenesisPill/Frames/0021.png",
  "/assets/imgs/GenesisPill/Frames/0022.png",
  "/assets/imgs/GenesisPill/Frames/0023.png",
  "/assets/imgs/GenesisPill/Frames/0024.png",
  "/assets/imgs/GenesisPill/Frames/0025.png",
  "/assets/imgs/GenesisPill/Frames/0026.png",
  "/assets/imgs/GenesisPill/Frames/0027.png",
  "/assets/imgs/GenesisPill/Frames/0028.png",
  "/assets/imgs/GenesisPill/Frames/0029.png",
  "/assets/imgs/GenesisPill/Frames/0030.png",
  "/assets/imgs/GenesisPill/Frames/0031.png",
  "/assets/imgs/GenesisPill/Frames/0032.png",
  "/assets/imgs/GenesisPill/Frames/0033.png",
  "/assets/imgs/GenesisPill/Frames/0034.png",
  "/assets/imgs/GenesisPill/Frames/0035.png",
  "/assets/imgs/GenesisPill/Frames/0036.png",
  "/assets/imgs/GenesisPill/Frames/0037.png",
  "/assets/imgs/GenesisPill/Frames/0038.png",
  "/assets/imgs/GenesisPill/Frames/0039.png",
  "/assets/imgs/GenesisPill/Frames/0040.png",
  "/assets/imgs/GenesisPill/Frames/0041.png",
  "/assets/imgs/GenesisPill/Frames/0042.png",
  "/assets/imgs/GenesisPill/Frames/0043.png",
  "/assets/imgs/GenesisPill/Frames/0044.png",
  "/assets/imgs/GenesisPill/Frames/0045.png",
  "/assets/imgs/GenesisPill/Frames/0046.png",
  "/assets/imgs/GenesisPill/Frames/0047.png",
  "/assets/imgs/GenesisPill/Frames/0048.png",
  "/assets/imgs/GenesisPill/Frames/0049.png",
  "/assets/imgs/GenesisPill/Frames/0050.png",
  "/assets/imgs/GenesisPill/Frames/0051.png",
  "/assets/imgs/GenesisPill/Frames/0052.png",
  "/assets/imgs/GenesisPill/Frames/0053.png",
  "/assets/imgs/GenesisPill/Frames/0054.png",
  "/assets/imgs/GenesisPill/Frames/0055.png",
  "/assets/imgs/GenesisPill/Frames/0056.png",
  "/assets/imgs/GenesisPill/Frames/0057.png",
  "/assets/imgs/GenesisPill/Frames/0058.png",
  "/assets/imgs/GenesisPill/Frames/0059.png",
  "/assets/imgs/GenesisPill/Frames/0060.png",
];

const APP = (props) => {
    useEffect(() => {
        var imageFramePlayer = new ImageFramePlayer({
            dom : document.getElementById("framePlayer"),
            imgArr : imgArr,
            fps : 25,
            useCanvas : false,
            loop : -1,
            yoyo : true
          });
        imageFramePlayer.play();
    }, []);

    return (
        <div className='framePlayer position-relative w-100 h-100' id="framePlayer" />
    );
  };
  
  export default APP;