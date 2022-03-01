import { useState } from 'react';
import ArticleList from './ArticleList';
import About from './About';
import  DarkMode from './DarkMode';
import Option from './Option'
import ArticleListSkeleton from './ArticleListSkeleton';



function App() {
  const news_channels = [
    { name: 'NDTV' },
    { name: 'The Hindu' },
    { name: 'The Times of India' },
  ]
  const [selected, setSelected] = useState(news_channels[0])
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div id='App'>
      <div className="transition-colors delay-200 min-h-screen flex items-center flex-col bg-primary text-center dark:bg-accent-2">
          <h1 className='transition-colors delay-200 text-6xl sm:m-4 m-2 mb-0 font-pop font-bold text-accent-2 dark:text-primary py-3 '>NEWSIFY</h1>
          <div className='sm:m-5 m-3 sm:gap-x-10 gap-x-5 gap-y-5 transition-colors delay-200 flex flex-wrap sm:flex-nowrap  text-center items-center justify-center sm:w-max gap-2 flex-row'>
            <DarkMode/>
            <Option news_channels={news_channels} selected={selected} setSelected={setSelected} />    
           <About/>
          </div>
          <ArticleListSkeleton isLoaded={isLoaded}  /> 
          <ArticleList news={selected} isLoaded={isLoaded} setIsLoaded={setIsLoaded} /> 
      </div>
    </div>
    
  );
}

export default App;
