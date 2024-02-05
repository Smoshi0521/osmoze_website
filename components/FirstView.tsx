"use client"
import { ParallaxLayer } from '@react-spring/parallax'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import React from 'react'

function FirstView() {
  const [show, setShow] = useState(false)

  setTimeout(() => {
    setShow(true)
  }, 2500)

  return (
    <div className='flex items-center justify-center bg-[#A702F4] h-screen w-full'>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className='flex flex-col items-end gap-5'>
          <h1 className='text-white text-xl text-center'>{`“Stay true to yourself kiddo! Feel the vibe and unleash your Bea(s)t!”`}</h1>
          <h2 className={`text-white ${show ? "opacity-100" : "opacity-0"} transition duration-300`}>Randy Cole aka OG三</h2>
        </motion.div>
      </AnimatePresence>

    </div>
  )
}

export default FirstView