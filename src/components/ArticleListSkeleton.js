import React from 'react'
import QASkeleton from './QASkeleton'

const ArticleListSkeleton = (props) => {
  if(!props.isLoaded){
    return (
      <div className=' animate-pulse flex flex-col max-w-[864px] m-5 gap-y-10'>
          <div className='transition-colors delay-200 w-full bg-secondary-shade dark:bg-accent-shade rounded-3xl'>
            <div className='transition-colors delay-200 lg:w-[816px] w-[80vw] h-[100px] bg-secondary hover:underline  dark:bg-accent-1 rounded-t-3xl font-mono text-3xl text-left p-5 font-bold text-accent-1 dark:text-primary leading-relaxed'></div>
            <div className='transition-colors delay-200 bg-transparent rounded-b-3xl p-3'>
              <QASkeleton />
            </div>
        </div>
        <div className='transition-colors delay-200 w-full bg-secondary-shade dark:bg-accent-shade rounded-3xl'>
            <div className='transition-colors delay-200 lg:w-[816px] w-[80vw] h-[100px] bg-secondary hover:underline  dark:bg-accent-1 rounded-t-3xl font-mono text-3xl text-left p-5 font-bold text-accent-1 dark:text-primary leading-relaxed'></div>
            <div className='transition-colors delay-200 bg-transparent rounded-b-3xl p-3'>
              <QASkeleton />
            </div>
        </div>
      </div>
  )} else{
    return null
  }
}

export default ArticleListSkeleton
