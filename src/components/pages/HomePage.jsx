import { ArticleCard } from "../blog-post/ArticleCard";
import { Carousel } from "../carousel/Carousel";
import { Header } from "../header/Header";
import { useState, useEffect } from "react";

const HomePage = () => {
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
    <div className="">
      <Header />
      {/* <Carousel /> */}
      <div className="container flex flex-wrap justify-between gap-5 max-w-[1280px]">
        {articles.map((article) => {
          return <ArticleCard article={article} />;
        })}
      </div>
    </div>
  );
};

export default HomePage;
