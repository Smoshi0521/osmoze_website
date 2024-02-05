import React, { useRef, useState, useEffect } from 'react';

function Practice() {
  return (

    <div className='w-full bg-design1 bg-cover bg-no-repeat h-screen flex items-center justify-center' style={{transform: `translateY(${scrollY * 0.5}px)`}}>
      <img src='assets/design1/BTU_Website_Illus003_Hiroko_option.png' className='absolute w-[1000px]' />
      <img src='assets/design1/BTU_Website_Illus003_FXTop.png' className='animate-pulse w-[1200px]' />
    </div>

  );
}

export default Practice;
