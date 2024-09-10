import { useState, useEffect } from "react";
import { TrendingArticleCard } from "./TrendingArticleCard";
import Link from "next/link";

export const Trending = () => {
  const [articles, setArticles] = useState([]);

  const fetchData = () => {
    fetch(`https://dev.to/api/articles/latest?per_page=4`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

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
            return (
              <Link href={`/blogs/${article.id} `} key={article?.id}>
                <TrendingArticleCard article={article} />
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
};
