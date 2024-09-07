import { useState, useEffect } from "react";
import { TrendingArticleCard } from "../trending/TrendingArticleCard";
import { BackIcon } from "../svg/BackIcon";
import { ForwardIcon } from "../svg/ForwardIcon";

export const Carousel = () => {
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
    <main className="">
      <div className="w-full flex justify-between items-center flex-col">
        <div className="container flex justify-between items-center">
          <div className="max-w-[1400px] h-[780px] w-full m-auto  py-16 relative ">
            <div
              style={{
                backgroundImage: `url(${articles[currentIndex]?.cover_image})`,
              }}
              className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
            >
              <div className="">
                <span className=" flex items-center text-white rounded-md bg-[#4B6BFB] pl-4 pr-4">
                  {articles[currentIndex]?.tag_list}
                </span>
                <div className="overflow-hidden h-[100px]">
                  <p className="text-xl text-pink-700 font-semibold text-ellipsis ">
                    {articles[currentIndex]?.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container flex justify-end gap-[9px] pr-16">
          <button onClick={changeBackImage}>
            <BackIcon />
          </button>
          <button onClick={changeNextImage}>
            <ForwardIcon />
          </button>
        </div>
      </div>
    </main>
  );
};
