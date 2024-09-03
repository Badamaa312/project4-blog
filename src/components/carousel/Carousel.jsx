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
  const slicedArtcle = articles.slice(0, 4);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="">
      <div className="w-full flex justify-around">
        <div className="container  h-screen w-screen  ">
          <div className="flex flex-wrap justify-between gap-5 max-w-[1280px]">
            {articles.map((slicedArtcle) => {
              return (
                <div>
                  {slicedArtcle.}
                  {slicedArtcle.tag_list}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};
