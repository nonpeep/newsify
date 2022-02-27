import React,{useState,useEffect} from 'react'
import Article from './Article';
import ArticleListSkeleton from './ArticleListSkeleton';


const ArticleList = (props) => {
    
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        props.setIsLoaded(false);
        fetch("https://www.boredapi.com/api/activity").then(res => {return [{"headline":"UK Freezes Putin, Russian Foreign Minister's Assets Over Ukraine Invasion","link":" https://www.ndtv.com/"},
        {"headline":"What Putin's End-Game May Be With Appeal To Ukraine Army, Call For Peace","link":"https://www.google.com/"},{"headline":"What Putin's End-Game May Be With Appeal To Ukraine Army, Call For Peace","link":"https://www.google.com/"},]} ).then(res => setArticles(res)).then(res =>{props.setIsLoaded(true)})
      }, [props.news.name])
  return (
    <div className='flex flex-col sm:m-5 m-1 gap-y-8 max-w-[864px]'>
     {props.isLoaded ? articles.map((article, index) => { return <Article key={index} headline={article.headline} link={article.link}/> }) : null}
    </div>
  )
}

export default ArticleList