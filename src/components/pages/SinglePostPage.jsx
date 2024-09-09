import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const SinglePostPage = () => {
  const router = useRouter();

  const [article, setArticles] = useState({});

  const fetchData = () => {
    fetch(`https://dev.to/api/articles/${router.query.id}`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(router.query.id);
  return (
    <div className="flex flex-col items-center">
      <h1>{article?.title}</h1>
      <p>{article?.description}</p>
    </div>
  );
};

export default SinglePostPage;
