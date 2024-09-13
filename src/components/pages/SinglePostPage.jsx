import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { generatMonth } from "../util/generateMonth";

const SinglePostPage = () => {
  const router = useRouter();
  const idUpdate = router.query.id;

  const [article, setArticles] = useState({});
  const publishedDate = new Date(article.published_at);

  const fetchData = () => {
    fetch(`https://dev.to/api/articles/${idUpdate}`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  useEffect(() => {
    fetchData();
  }, [idUpdate]);

  return (
    <main>
      <div className="w-full flex items-center justify-center">
        <div className="container flex flex-col items-center justify-center">
          <h1 className="h-[80px] font-bold">{article?.title}</h1>
          <div className="flex gap-[12px] items-center ">
            <div className="flex items-center justify-start gap-8">
              <div className="flex items-center gap-2">
                <img
                  src={article?.user?.profile_image}
                  alt=""
                  className="rounded-full w-[36px] h-[36px]"
                />
                <p>{article?.user?.name}</p>
              </div>
              <p className=" text-[#97989F]">
                {publishedDate?.getFullYear()}-
                {generatMonth(publishedDate?.getMonth())}-
                {publishedDate?.getDay() + 1}
              </p>
            </div>
          </div>
          <img src={article?.cover_image} alt="" className="pt-8 pb-8" />
          <p className="pb-8">{article?.description}</p>
          <p className="pb-8">{article?.description}</p>
          <p className="pb-8">{article?.description}</p>
        </div>
      </div>
    </main>
  );
};

export default SinglePostPage;
