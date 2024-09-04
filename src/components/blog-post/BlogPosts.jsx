import { ArticleCard } from "../blog-post/ArticleCard";
import { Carousel } from "../carousel/Carousel";
import { Header } from "../header/Header";
import { useState, useEffect } from "react";

export const BlogPosts = () => {
  const [articles, setArticles] = useState([]);

  const fetchData = () => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className=" w-full flex justify-center items-center">
      <div className="container flex justify-center flex-wrap  gap-5 ">
        {articles.map((article) => {
          return <ArticleCard article={article} />;
        })}
      </div>
    </div>
  );
};
