import { useState, useEffect } from "react";
import { TrendingArticleCard } from "./TrendingArticleCard";

export const Trending = () => {
  const [articles, setArticles] = useState([]);

  const fetchData = () => {
    fetch(`https://dev.to/api/articles?per_page=4`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  console.log(articles);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="">
      <div className="w-full flex flex-col gap-[30px] items-center justify-between ">
        <div className="container flex ">
          <p className="flex text-2xl bg-[181A2A] font-bold">Trending</p>
        </div>
        <div className=" container flex flex-wrap justify-between gap-5">
          {articles.map((article) => {
            return <TrendingArticleCard article={article} />;
          })}
        </div>
      </div>
    </main>
  );
};
