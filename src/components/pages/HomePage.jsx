import { BlogPosts } from "../blog-post/BlogPosts";
import { Carousel } from "../carousel/Carousel";
import { Header } from "../header/Header";
import { Trending } from "../trending/Trending";
import { Footer } from "../footer/Footer";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-[100px]">
      {/* <Header /> */}
      <Carousel />
      <Trending />
      <BlogPosts />
      <Footer />
    </div>
  );
};

export default HomePage;
