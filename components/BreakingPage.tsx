import { ParallaxLayer } from '@react-spring/parallax';
import React from 'react'
import { useRef, useState, useEffect } from 'react';
import { motion, useAnimation, useSpring } from "framer-motion";
function BreakingPage() {


  return (
    <div className='bg-[#A702F4]'>

        <div className="flex items-start justify-center h-[500px] w-full">
          <img src='assets/design1/BTU_Website_Illus001_LogoBG.png' className='w-[600px] absolute' />
          <img src="assets/design1/BTU_Website_Illus001_Hiroko.png" className="w-[600px] absolute" />
          <img src="assets/design1/BTU_Website_Illus001_Yosuke.png" className="w-[600px] absolute" />
        </div>

    </div>
  )
}

export default BreakingPage