import { ArticleCard } from "../blog-post/ArticleCard";

import { useState, useEffect } from "react";

export const BlogPosts = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = () => {
    fetch(`https://dev.to/api/articles?per_page=9&page=${page}`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  const handleMorePageClick = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className=" w-full flex justify-center items-center gap-5">
      <div className="container flex justify-center flex-wrap  gap-5 ">
        {articles.map((article) => {
          return <ArticleCard article={article} />;
        })}
      </div>
      <button
        className="border bg-gray-300 px-4 rounded-md"
        onClick={handleMorePageClick}
      >
        Load more
      </button>
    </div>
  );
};
