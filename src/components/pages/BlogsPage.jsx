import { useEffect, useState } from "react";
import { ArticleCard } from "../blog-post/ArticleCard";
import Link from "next/link";

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
    <div className=" w-full flex justify-center items-center gap-5">
      <div className="container flex justify-center flex-wrap  gap-5 ">
        {articles.map((article) => {
          return (
            <Link href={`/blogs/${article.id} `} key={article?.id}>
              <ArticleCard article={article} />
            </Link>
          );
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

export default BlogsPage;
