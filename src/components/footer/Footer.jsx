import { SearchIcon } from "../svg/SearchIcon";
import Link from "next/link";

export const Footer = () => {
  return (
    <main className="">
      <div className="w-full flex justify-around">
        <div className="container flex justify-between items-center px-8">
          <img src="./metablog.png" alt="" width={100} height={36} />
          <div className="flex items-center justify-center ">
            <Link href="/">
              <button className="px-2">Home</button>
            </Link>
            <Link href="/blogs">
              <button className="px-2">Blog</button>
            </Link>
            <Link href="/contact-us">
              <button className="px-2">Contact</button>
            </Link>
          </div>
          <div className="pl-4 pb-2 pt-2 pr-2 flex items-center justify-center rounded-md bg-[#E8E8EA] gap-[40px] ">
            <input placeholder="search" type="text" className="bg-[#E8E8EA]" />
            <SearchIcon />
          </div>
        </div>
      </div>
      <script src="src\components\util\generateMonth.js"></script>
    </main>
  );
};
