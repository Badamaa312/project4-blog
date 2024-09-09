import { useState, useEffect } from "react";
import { BackIcon } from "../svg/BackIcon";
import { ForwardIcon } from "../svg/ForwardIcon";
import { generatMonth } from "../util/generateMonth";
import Link from "next/link";

export const Carousel = (article) => {
  const [articles, setArticles] = useState([]);

  // Casousel deerh slide page-r soligdoh
  // Page udaan bsan tul index-r ni duudav
  // const [page, setPage] = useState(1);
  // const changeBackImage = () => {
  //   setPage(page - 1);
  // };
  // const changeNextImage = () => {
  //   setPage(page + 1);
  // };

  const [currentIndex, setCurrentIndex] = useState(0);
  const publishedDate = new Date(article.published_at);
  const fetchCarouselData = () => {
    fetch(`https://dev.to/api/articles?top=1`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  useEffect(() => {
    fetchCarouselData();
  }, [currentIndex]);

  const changeBackImage = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === 0 ? articles.length - 1 : currentIndex - 1
    );
  };

  const changeNextImage = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === articles.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <div className="w-full flex justify-between items-center flex-col">
      <div className="container flex justify-between items-end">
        {/* <Link href={`/blogs/${articles[currentIndex]?.id}`}> */}
        <div className=" flex h-[780px] w-full m-auto  py-16 relative">
          <div
            style={{
              backgroundImage: `url(${articles[currentIndex]?.cover_image})`,
            }}
            className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
          >
            <div className="w-[598px] h-[252px] absolute bottom-20 rounded-xl bg-white ml-[11px] p-10">
              <div>
                <span className="  text-white rounded-md bg-[#4B6BFB] pl-4 pr-4">
                  {articles[currentIndex]?.tag_list}
                </span>
              </div>
              <div className="overflow-hidden h-[100px]">
                <p className="text-xl font-semibold text-ellipsis mt-[16px] mb-[24px] ">
                  {articles[currentIndex]?.description}
                </p>
              </div>
              <div>
                <p className=" text-[#97989F]">
                  {publishedDate.getFullYear()}-
                  {generatMonth(publishedDate.getMonth())}-
                  {publishedDate.getDay() + 1}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* </Link> */}
      </div>

      <div className="container flex justify-end gap-[9px] ">
        <button onClick={changeBackImage}>
          <BackIcon />
        </button>
        <button onClick={changeNextImage}>
          <ForwardIcon />
        </button>
      </div>
    </div>
  );
};
