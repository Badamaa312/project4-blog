import Trending from "@/pages/trending";
import { ArticleCard } from "../blog-post/ArticleCard";
import { BlogPosts } from "../blog-post/BlogPosts";
import { Carousel } from "../carousel/Carousel";
import { Header } from "../header/Header";
import { useState, useEffect } from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-[100px]">
      <Header />
      <Carousel />
      <Trending />
      <BlogPosts />
    </div>
  );
};

export default HomePage;
