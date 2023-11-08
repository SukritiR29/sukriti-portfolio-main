import React from 'react'

const Card = () => {
  return (
<div className='flex col-1 max-w-full col-1 overflow-x-auto pb-40 hide-scrollbar'>
  <div className='card max-w-sm bg-primary  shadow-xl ml-10'>
  <figure className="px-2 pt-5 pb-0">
            <img src="/assets/images/projects/Sumedha.png" alt="dog" className="rounded-xl" />
          </figure>

        <div className="card-body items-center text-center">
          <button className='btn btn-secondary '>Sumedha</button>
        </div>
  </div>
  <div className='card max-w-sm bg-primary  shadow-xl ml-10'>
  <figure className="px-2 pt-5 pb-0">
            <img src="/assets/images/projects/Curenimal.png" alt="dog" className="rounded-xl" />
          </figure>

        <div className="card-body items-center text-center">
          <button className='btn btn-secondary '>Curenimal</button>
        </div>
  </div>
  <div className='card max-w-sm bg-primary  shadow-xl ml-10'>
  <figure className="px-2 pt-5 pb-0">
            <img src="/assets/images/projects/AroundYou.png" alt="dog" className="rounded-xl" />
          </figure>

        <div className="card-body items-center text-center">
          <button className='btn btn-secondary '>AroundYou</button>
        </div>
  </div>
  <div className='card max-w-sm bg-primary  shadow-xl ml-10'>
  <figure className="px-2 pt-5 pb-0">
            <img src="/assets/images/projects/TEDxRTU.png" alt="dog" className="rounded-xl" />
          </figure>

        <div className="card-body items-center text-center">
          <button className='btn btn-secondary '>TEDxRTU</button>
        </div>
  </div>
  <div className='card max-w-sm bg-primary  shadow-xl ml-10'>
  <figure className="px-2 pt-5 pb-0">
            <img src="/assets/images/projects/QAre.png" alt="dog" className="rounded-xl" />
          </figure>

        <div className="card-body items-center text-center">
          <button className='btn btn-secondary '>QAre</button>
        </div>
  </div>
</div>
  )
}

export default Card