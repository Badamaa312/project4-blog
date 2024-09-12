import { useState, useEffect } from "react";
import { SearchIcon } from "../../svg/SearchIcon";
import Link from "next/link";
import { SearchDropDown } from "@/components/drop-down/DropDown";

export const Header = () => {
  const [articlesForSearch, setArticlesForSearch] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  if (typeof window !== "undefined") {
    document.addEventListener("mouseup", () => {
      handleCloseDropDown();
    });
  }
  const filteredArticle = articlesForSearch.filter((article) =>
    article?.title?.toLowerCase().includes(searchValue)
  );

  const handleCloseDropDown = () => {
    setIsOpen(false);
  };

  const handleInputChange = (event) => {
    setIsOpen(true);
    setSearchValue(event.target.value);
  };

  const fetchSearchData = () => {
    fetch(`https://dev.to/api/articles?per_page=100`)
      .then((response) => response.json())
      .then((data) => setArticlesForSearch(data));
  };

  useEffect(() => {
    fetchSearchData();
  }, []);

  return (
    <main className="">
      <div className="w-full flex justify-around relative">
        <div className="container flex justify-between items-center px-8">
          <LogoIcon />
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
          <div className="flex rounded-md bg-[#E8E8EA] text-wrap">
            <input
              placeholder="search"
              value={searchValue}
              type="text"
              className="bg-[#E8E8EA] outline-none"
              onChange={handleInputChange}
            />
            {
              <SearchDropDown
                setSearchValue={setSearchValue}
                setIsOpen={setIsOpen}
                isOpen={isOpen}
                filteredArticle={filteredArticle}
              />
            }
          </div>
        </div>
      </div>
    </main>
  );
};
