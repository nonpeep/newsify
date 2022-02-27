import React from 'react'
import QASkeleton from './QASkeleton'

const ArticleListSkeleton = () => {
  return (
    <div className=' animate-pulse flex flex-col m-5 gap-y-10 max-w-full'>
        <div className='transition-colors delay-200 w-[816px] bg-secondary-shade dark:bg-accent-shade rounded-3xl'>
          <h1 className='transition-colors delay-200 h-[150px] bg-secondary hover:underline  dark:bg-accent-1 rounded-t-3xl font-mono text-3xl text-left p-5 font-bold text-accent-1 dark:text-primary leading-relaxed'></h1>
          <div className='transition-colors delay-200 bg-transparent rounded-b-3xl p-3'>
            <QASkeleton />
          </div>
      </div>
      <div className='transition-colors delay-200 w-[816px] bg-secondary-shade dark:bg-accent-shade rounded-3xl'>
          <h1 className='transition-colors delay-200 h-[150px] bg-secondary hover:underline  dark:bg-accent-1 rounded-t-3xl font-mono text-3xl text-left p-5 font-bold text-accent-1 dark:text-primary leading-relaxed'></h1>
          <div className='transition-colors delay-200 bg-transparent rounded-b-3xl p-3'>
            <QASkeleton />
          </div>
      </div>
    </div>
  )
}

export default ArticleListSkeleton
