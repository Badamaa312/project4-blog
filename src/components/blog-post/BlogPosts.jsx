import { useState, useEffect } from "react";
import Link from "next/link";
import { ArticleCardHome } from "./ArticleCardHome";

export const BlogPosts = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = () => {
    fetch(`https://dev.to/api/articles?per_page=9&page=${page}`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  const handleMorePageClick = () => {
    setPage(page + 3);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className=" w-full flex flex-col justify-center items-center gap-5 pb-[80px]">
      <div className="container flex flex-col gap-[32px]">
        <div>
          <p className="flex text-2xl bg-[181A2A] font-bold">All Blog Post</p>
        </div>
        <div className="flex gap-[32px]">
          <span>All</span>
          <span>Devchallenge</span>
          <span>Feeling</span>
          <span>Beginners</span>
          <span>Test2</span>
          <span>Test3</span>
        </div>
      </div>
      <div className="container flex justify-center flex-wrap  gap-5 ">
        {articles.map((article) => {
          return (
            <Link href={`blogs/${article.id}`} key={article?.user.name}>
              <ArticleCardHome article={article} />
            </Link>
          );
        })}
      </div>
      <div className="">
        <button
          className=" pr-[20px] pl-[20px] pt-[12px] pb-[12px]  border rounded-md"
          onClick={handleMorePageClick}
        >
          Load More
        </button>
      </div>
    </div>
  );
};
