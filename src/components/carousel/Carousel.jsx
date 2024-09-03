import Image from "next/image";
import { ArticleCard } from "../blog-post/ArticleCard";
import { useState, useEffect } from "react";

export const Carousel = () => {
  const [articles, setArticles] = useState([]);

  const fetchData = () => {
    fetch(`https://dev.to/api/articles`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="">
      <div className="w-full flex justify-around">
        <div className="container  h-screen w-screen bg-[url('https://news.clemson.edu/wp-content/uploads/2023/06/ocean.jpg')] bg-no-repeat ">
          <div className="flex flex-wrap justify-between gap-5 max-w-[1280px]">
            {articles.map((article) => {
              return <div>{article.slice[0]}</div>;
            })}
          </div>
        </div>
      </div>
    </main>
  );
};
