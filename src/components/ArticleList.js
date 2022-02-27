import React,{useState,useEffect} from 'react'
import Article from './Article';
import ArticleListSkeleton from './ArticleListSkeleton';


const ArticleList = (props) => {
    
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        props.setIsLoaded(false);
        fetch(`${process.env.REACT_APP_BACKEND}/headlines`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({site: props.news.name})
        })
          .then(response => {
            return response.json()
          })
          .then(res => {
            console.log(res)
            return res
          })
          .then(res => setArticles(res.headlines)).then(res =>{props.setIsLoaded(true)})
      }, [props.news.name])
  return (
    <div className='flex flex-col sm:m-5 m-1 max-w-[864px]'>
     {props.isLoaded ? articles.map((article, index) => { 
       return <Article key={index} headline={article[0]} link={article[1]}/> 
       }) : null}
    </div>
  )
}

export default ArticleList