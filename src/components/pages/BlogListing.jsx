import { BlogPosts } from "../blog-post/BlogPosts";
import { Header } from "../header/Header";

export default function BlogListing() {
  return (
    <main className="">
      <div className="w-full flex flex-col gap-[30px]">
        <span className=" container flex p-8 pl-12 font-bold">
          All Blog Post
        </span>
        <BlogPosts />
      </div>
    </main>
  );
}
