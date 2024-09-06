import { Header } from "@/components/header/Header";
import BlogsPage from "@/components/pages/BlogsPage";
import BlogListing from "@/components/pages/BlogsPage";

export default function BlogList() {
  return (
    <main className="flex flex-col gap-[30px]">
      <Header />
      <BlogsPage />
    </main>
  );
}
