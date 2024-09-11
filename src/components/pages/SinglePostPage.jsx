import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Header } from "../header/Header";

const SinglePostPage = () => {
  const router = useRouter();
  const idUpdate = router.query.id;

  const [article, setArticles] = useState({});

  const fetchData = () => {
    fetch(`https://dev.to/api/articles/${idUpdate}`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  useEffect(() => {
    fetchData();
  }, [idUpdate]);

  console.log(router.query.id);
  return (
    <main>
      <div className="w-full flex items-center ">
        <div className="container flex flex-col items-center">
          <h1 className="h-[80px]">{article?.title}</h1>
          <img src={article?.cover_image} alt="" />
          <p>{article?.description}</p>
        </div>
      </div>
    </main>
  );
};

export default SinglePostPage;
