import React from 'react'

const QASkeleton = () => {
  return (
    <div className='justify-center flex flex-col gap-3'>
         <div className= ' transition-colors delay-200 m-5 animate-pulse  h-[100px] rounded-3xl bg-secondary dark:bg-accent-1 '></div>
    </div>
  )
}

export default QASkeleton
