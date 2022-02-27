import './App.css';
import { useEffect, useState } from 'react';
import ArticleList from './ArticleList';
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

  return (
    <div id='App'>
      <div className="transition-colors delay-200 min-h-screen flex items-center flex-col bg-primary text-center dark:bg-accent-2">
          <h1 className='transition-colors delay-200 text-6xl m-4 font-pop font-bold text-accent-2 dark:text-primary py-3 '>NEWSIFY</h1>
          <div className='m-5 gap-x-10 transition-colors delay-200 flex items-center justify-center w-max gap-2 flex-row'>
            <DarkMode/>
            <Option news_channels={news_channels} selected={selected} setSelected={setSelected} />    
          </div>
          
          <ArticleList news={selected}/> 
      </div>
    </div>
    
  );
}

export default App;
