import React,{useState,useEffect} from 'react'
import Article from './Article';

const ArticleList = (props) => {
    
    const [articles, setArticles] = useState([]);
    const { news, setIsLoaded } = props;
    useEffect(() => {
        setIsLoaded(false);
        fetch(`${process.env.REACT_APP_BACKEND}/headlines`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({site: news.name})
        })
          .then(response => {
            return response.json()
          })
          .then(res => {
            return res
          })
          .then(res => setArticles(res.headlines)).then(res =>{setIsLoaded(true)})
      }, [news.name, setIsLoaded])
  return (
    <div className='flex flex-col sm:m-5 m-1 max-w-[864px]'>
     {props.isLoaded ? articles.map((article, index) => { 
       return <Article key={index} headline={article[0]} link={article[1]}/> 
       }) : null}
    </div>
  )
}

export default ArticleList