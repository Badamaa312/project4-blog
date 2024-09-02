import Image from "next/image";
import { ArticleCard } from "../blog-post/ArticleCard";

export const Carousel = () => {
  return (
    <main className="">
      <div className="w-full flex justify-around">
        <div className="container  h-screen w-screen bg-[url('https://news.clemson.edu/wp-content/uploads/2023/06/ocean.jpg')] bg-no-repeat ">
          <div className="flex flex-wrap justify-between gap-5 max-w-[1280px]"></div>
        </div>
      </div>
    </main>
  );
};
