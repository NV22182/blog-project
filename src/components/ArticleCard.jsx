import React from 'react'

import { images } from '../constants'

const ArticleCard = ({className}) => {
  return (
    <div className={`rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] `}
    >
        <img 
        src={images.PostImage} 
        alt='title' 
        className='w-full object-cover object-center h-auto' 
        />
        <div className='p-5'>
            <h2 className='font-roboto font-bold text-xl text-dark-soft '>
              Future of Work
              </h2>
              <p className='text-dark-light mt-3 text-sm'>Majority of people will work in jobs that don't exist today</p>
              <div className='flex justify-between flex-nowrap items-center mt-6'>
                <div className='flex items-center gap-x-2'>
                  <img src={images.PostProfileImage} alt="post profile" />
                  <div className='flex flex-col'>
                      <h4 className='font-bold italic text-dark-soft text-sm'>
                        Viola Mansia
                      </h4>
                  </div>
                </div>
                <span>02 May</span>
              </div>
        </div>
    </div>
  )
}

export default ArticleCard