import React from 'react'

const ArticleListSkeleton = () => {
  return (
    <div className='justify-center flex flex-col gap-3'>
         <div className='m-5 animate-pulse  h-[270px] rounded-3xl bg-secondary dark:bg-accent-1 '></div>
          <div className='m-5 animate-pulse  h-[270px] rounded-3xl bg-secondary dark:bg-accent-1 '></div>
          <div className='m-5 animate-pulse  h-[270px] rounded-3xl bg-secondary dark:bg-accent-1 '></div>
          {/* <div className='m-6 animate-pulse  h-[500px] rounded-2xl bg-accent-shade dark:bg-secondary-shade opacity-80'></div> */}
    </div>
  )
}

export default ArticleListSkeleton
