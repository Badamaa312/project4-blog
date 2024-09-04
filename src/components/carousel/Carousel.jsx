import { useState, useEffect } from "react";
import { TrendingArticleCard } from "../trending/TrendingArticleCard";

export const Carousel = () => {
  const [articles, setArticles] = useState([]);

  const fetchData = () => {
    fetch(`https://dev.to/api/articles?per_page=4`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="">
      <div className="w-full flex ">
        <div className="container  h-screen w-screen  ">
          <div className="flex flex-wrap justify-between ">
            <div className="flex flex-col"></div>
            {articles.map((article) => {
              return <TrendingArticleCard article={article} />;
            })}
          </div>
        </div>
      </div>
    </main>
  );
};
