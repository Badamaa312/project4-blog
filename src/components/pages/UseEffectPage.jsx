import { useEffect, useState } from "react";

const UseEffectPage = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = () => {
    fetch(`https://dev.to/api/articles?per_page=10&page=${page}`)
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
    <div className="flex flex-col items-center">
      {articles.map((article) => {
        return <div>{article.title}</div>;
      })}
      <button className="border border-red-400" onClick={handleMorePageClick}>
        Load more
      </button>
    </div>
  );
};

export default UseEffectPage;
