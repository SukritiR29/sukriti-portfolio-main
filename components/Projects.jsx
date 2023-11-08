import React from 'react'

const Projects = () => {
  return (
    <div>
    <div className='stick lg:ml-20 lg:mr-20 ml-2 mb-5'>
     <h2 className='text-3xl font-semibold text-base-100 uppercase underline'>Projects</h2> 
      </div>
      <div className='lg:m-10 lg:ml-20 ml-2 mr-2'>
        <div className='bg-base-100 rounded-xl lg:flex mb-10 pb-3'>
          <img src="/assets/images/projects/Curenimal.png" alt="" className='h-40 w-40' />
          <div>
          <h2 className='ml-10 mt-3 text-slate-300'>Curenimal - Full Stack</h2>
          <p className='ml-10 text-sm'>Tech Stack:: NextJS, Firebase, NextAuth, DaisyUI, TypeScript</p>
          <p className='ml-10 text-xs font-justify mt-2 mr-1'> A project for the ’Google Solution Challenge 2022’. The website helps stray ands pet animals by giving a certified treatment and allows users to report a missing or found pet.</p>
          <a href="https://github.com/SukritiR29/curenimal-app">
           <button className='btn btn-primary btn-sm ml-10 mt-4'>Project</button>
          </a>
          </div>
        </div>
        <div className='bg-base-100 rounded-xl lg:flex mb-10 pb-3'>
          <img src="/assets/images/projects/Sumedha.png" alt="" className='h-40 w-40' />
          <div>
          <h2 className='ml-10 mt-3 text-slate-300'>Sumedha - Full Stack</h2>
          <p className='ml-10 text-sm'>Tech Stack:: ReactJS, JavaScript, JWT, Figma, HTML, CSS</p>
          <p className='ml-10 text-xs font-justify mt-2 w-3/4'> A PWA app that unites with parents to provide proper holistic development to their children and push them to their maximum potential</p>
          <a href="https://github.com/ishubham21/sih-backend">
          <button className='btn btn-primary btn-sm ml-10 mt-4'>Project</button>
          </a>
          </div>
        </div>
        <div className='bg-base-100 rounded-xl lg:flex mb-10 pb-3'>
          <img src="/assets/images/projects/AroundYou.png" alt="" className='h-40 w-40' />
          <div>
          <h2 className='ml-10 mt-3 text-slate-300'>Around You - Frontend Project</h2>
          <p className='ml-10 text-sm'>Tech Stack:: Vue.js, VueX, OpenWeather API, TailwindCSS</p>
          <p className='ml-10 text-xs font-justify mt-2 mr-1'> Around You is a weather application that provides current weather data of any city, followed up with the hourly data. Users can add cities to favorites for an easy track keeping.</p>
         <a href="https://github.com/SukritiR29/weather_app">
         <button className='btn btn-primary btn-sm ml-10 mt-4'>Project</button>
         </a>
          </div>
        </div>
        <div className='bg-base-100 rounded-xl lg:flex mb-10 pb-3'>
          <img src="/assets/images/projects/QAre.png" alt="" className='h-40 w-40' />
          <div>
          <h2 className='ml-10 mt-3 text-slate-300'>QAre - Full Stack</h2>
          <p className='ml-10 text-sm'>Tech Stack:: NextJS, MongoDB, NextAuth, DaisyUI, ShadecnUI</p>
          <p className='ml-10 text-xs font-justify mt-2 w-3/4'> A pioneering project that revolutionized marketing strategies by transforming traditional QR codes into dynamic, trackable entities.</p>
          <a href="https://github.com/AniruddhaSoni/qare">
          <button className='btn btn-primary btn-sm ml-10 mt-4'>Project</button>
          </a>
          </div>
        </div>
        <div className='bg-base-100 rounded-xl lg:flex mb-10 pb-3'>
          <img src="/assets/images/projects/TEDxRTU.png" alt="" className='h-40 w-40' />
          <div>
          <h2 className='ml-10 mt-3 text-slate-300'>TEDxRTU - Frontend Project</h2>
          <p className='ml-10 text-sm'>Tech Stack:: ReactJS, JavaScript, JWT, Figma, HTML, CSS</p>
          <p className='ml-10 text-xs font-justify mt-2 w-3/4'> Developed an informational website for the TED Talk conducted in Raasthan Technical University</p>
          <a href="https://github.com/SukritiR29/tedx-rtu">
          <button className='btn btn-primary btn-sm ml-10 mt-4'>Project</button>
          </a>         
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Projects