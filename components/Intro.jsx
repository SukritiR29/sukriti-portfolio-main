import React from 'react'
import { FiFigma, FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone, FiMenu} from "react-icons/fi";
import { useState } from 'react';

const Intro = () => {

    const [showContact, setShowContact] = useState(false);


  return (
    <div className=' sticky bg-primary w-80 sm:m-10 lg:ml-20 lg:mt-20 sm:max-w-full mb-10 rounded-md p-1'>
        <div className='bg-base-100 ml-10 mr-10 mt-5 mb-5  rounded-full'>
            <img src="/assets/images/Profile.png" alt="profile" className='w-30 h-30' />
        </div>
        <div className=' flex flex-col items-center justify-center gap-2 pb-5'>
            <h2 className='text-xl text-neutral uppercase font-bold'>Sukriti Rajora</h2>
            <p className='bg-secondary pl-4 pr-4 pt-1 pb-1 rounded-full text-slate-300 text-sm'>Full Stack Developer</p>
        </div>
        <div className="border-t-2 ml-3 mr-3 border-secondary pb-5 flex justify--center items-center"></div>
        <div className='pb-5'>

        <div className='lg:hidden flex justify-center'>
        <FiMenu
          className='text-neutral cursor-pointer ml-3 text-secondary'
          onClick={() => setShowContact(!showContact)}
        />
      </div>
        <div className={`contact pb-5 ${showContact ? 'block' : 'hidden'} lg:block`}>
            <div className='mb-5'>
        <a href="mailto:sukritirajora@gmail.com" className="hover:scale-125 transition-transform text-neutral flex flex-rows gap-2 justify-center">
              <FiMail className='mt-1' />
              <p className='text-sm pt-0'>sukritirajora@gmail.com</p>
            </a>
            </div>
            <div className='mb-5'>
        <a href="https://www.linkedin.com/in/sukriti-rajora-48b4aa218" className="hover:scale-125 transition-transform text-neutral flex flex-rows gap-2 justify-center">
              <FiLinkedin className='mt-1' />
              <p className='text-sm pt-0'>LinkedIn: Sukriti Rajora</p>
            </a>
            </div>
            <div className='mb-5'>
        <a href="https://github.com/SukritiR29" className="hover:scale-125 transition-transform text-neutral flex flex-rows gap-2 justify-center">
              <FiGithub className='mt-1' />
              <p className='text-sm pt-0'>GitHub: SukritiR29</p>
            </a>
            </div>
            <div className='mb-5'>
        <a href="http://figma.com/@sukritiRajora" className="hover:scale-125 transition-transform text-neutral flex flex-rows gap-2 justify-center">
              <FiFigma className='mt-1' />
              <p className='text-sm pt-0'>Figma: @sukritiRajora</p>
            </a>
            </div>
            <div className='mb-5'>
        <a href="8003836200" className="hover:scale-125 transition-transform text-neutral flex flex-rows gap-2 justify-center">
              <FiPhone className='mt-1' />
              <p className='text-sm pt-0'>+91 8003836200</p>
            </a>
            </div>
            <div className='mb-5'>
            <a href="https://www.google.com/maps/place/Kota,+Rajasthan/@25.1734028,75.846965,12z/data=!3m1!4b1!4m6!3m5!1s0x396f9b30c41bb44d:0x5f5c103200045588!8m2!3d25.2138156!4d75.8647527!16zL20vMDRzdzh6?entry=ttu" className="hover:scale-125 transition-transform text-neutral flex flex-rows gap-2 justify-center">
              <FiMapPin className='mt-1' />
              <p className='text-sm pt-0'>Kota, Rajasthan</p>
            </a>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Intro
