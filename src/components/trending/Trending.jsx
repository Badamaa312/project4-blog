import Image from "next/image";
import { ArticleCard } from "../blog-post/ArticleCard";
import { useState, useEffect } from "react";
import { TrendingArticleCard } from "./TrendingArticleCard";

export const Trending = () => {
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
      <div className="w-full flex flex-col gap-[30px] items-center ">
        <div className="flex text-2xl bg-[181A2A]">Trending</div>
        <div className=" container flex flex-wrap justify-between gap-5 max-w-[1280px]">
          {articles.map((article) => {
            return <TrendingArticleCard article={article} />;
          })}
        </div>
      </div>
    </main>
  );
};
