"use client"
import Image from "next/image";
import React, { useRef, useState, useEffect } from 'react';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Practice from "../../components/Practice";
import { useSpring } from "react-spring";
import FirstView from "../../components/FirstView";
import BreakingPage from "../../components/BreakingPage";
export default function Home() {



  return (
    <div className='bg-[#A702F4] h-screen '>
      {/* <Parallax pages={5} >
        <ParallaxLayer offset={0} speed={0}>
          <FirstView />
        </ParallaxLayer>

        <BreakingPage />

        <ParallaxLayer offset={1.5} speed={.5}>
          <Practice />
        </ParallaxLayer>


      </Parallax > */}
      <FirstView />
      <BreakingPage />
      <Practice />
    </div>
  );
}
