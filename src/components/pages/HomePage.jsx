import { BlogPosts } from "../blog-post/BlogPosts";
import { Carousel } from "../carousel/Carousel";
import { Header } from "../layout/header/Header";
import { Trending } from "../trending/Trending";
import { Footer } from "../layout/footer/Footer";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-[100px]">
      <Carousel />
      <Trending />
      <BlogPosts />
    </div>
  );
};

export default HomePage;
