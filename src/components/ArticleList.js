import React,{useState,useEffect} from 'react'
import Article from './Article';
import ArticleListSkeleton from './ArticleListSkeleton';


const ArticleList = (props) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        setIsLoaded(false);
        fetch("https://www.boredapi.com/api/activity").then(res => {return [{"headline":"UK Freezes Putin, Russian Foreign Minister's Assets Over Ukraine Invasion","link":" https://www.ndtv.com/"},
        {"headline":"What Putin's End-Game May Be With Appeal To Ukraine Army, Call For Peace","link":"https://www.google.com/"},{"headline":"What Putin's End-Game May Be With Appeal To Ukraine Army, Call For Peace","link":"https://www.google.com/"},]} ).then(res => setArticles(res)).then(res =>{setIsLoaded(true)})
      }, [props.news.name])
  return (
    <div className='flex flex-col m-5 gap-y-10 max-w-[864px]'>
    {/* <ArticleListSkeleton />  */}
    {isLoaded ? articles.map((article, index) => { return <Article key={index} headline={article.headline} link={article.link}/> }) : <ArticleListSkeleton />}
    </div>
  )
}

export default ArticleList