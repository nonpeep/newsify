import React, { useState, useEffect } from "react";
import Article from "./Article";

const ArticleList = (props) => {
  const [articles, setArticles] = useState([]);
  const { category, setIsLoaded } = props;
  useEffect(() => {
    setIsLoaded(false);
    fetch(`${process.env.REACT_APP_BACKEND}/headlines`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ category: props.category.name }),
    })
      .then((response) => {
        return response.json();
      })
      .then((res) => setArticles(res.articles))
      .then((res) => {
        setIsLoaded(true);
      })
      .catch((err) => {
        alert("Error getting articles");
      });
  }, [category.name, setIsLoaded]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="flex flex-col sm:m-5 m-1 max-w-[864px]">
      {props.isLoaded
        ? articles.map((article, index) => {
            return (
              <Article
                key={index}
                headline={article.title}
                link={article.url}
              />
            );
          })
        : null}
    </div>
  );
};

export default ArticleList;
