import { useEffect, useState } from "react";
import { ArticleCard } from "../blog-post/ArticleCard";
import Link from "next/link";
import { LoadMoreButton } from "../buttons/LoadMore";

const BlogsPage = () => {
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
    <div className="w-full flex justify-center items-center gap-5">
      <div className="container flex flex-col">
        <div className="pt-12 pb-12">
          <p className="flex text-2xl bg-[181A2A] font-bold">All Blog Post</p>
        </div>
        <div className=" flex justify-center flex-wrap  gap-5 ">
          {articles.map((article) => {
            return (
              <Link href={`blogs/${article.id} `} key={article?.id}>
                <ArticleCard article={article} />
              </Link>
            );
          })}
        </div>
        <button
          className="border bg-gray-300 px-4 rounded-md"
          onClick={handleMorePageClick}
        >
          Load More
          {/* <LoadMoreButton /> */}
        </button>
      </div>
    </div>
  );
};

export default BlogsPage;
