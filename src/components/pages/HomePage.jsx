import { ArticleCard } from "../blog-post/ArticleCard";
import { BlogPosts } from "../blog-post/BlogPosts";
import { Carousel } from "../carousel/Carousel";
import { Header } from "../header/Header";
import { useState, useEffect } from "react";

const HomePage = () => {
  return (
    <div className="">
      <Header />
      <Carousel />
      <BlogPosts />
    </div>
  );
};

export default HomePage;
