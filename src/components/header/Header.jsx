import { useState, useEffect } from "react";
import { SearchIcon } from "../svg/SearchIcon";
import Link from "next/link";

export const Header = () => {
  const [articles, setArticles] = useState([]);
  const [articlesForSearch, setArticlesForSearch] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [emptyValue, setEmptyValue] = useState("false");

  const filteredArticle = articlesForSearch.filter((article) =>
    article?.title?.toLowerCase().includes(searchValue)
  );

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const SearchDropDown = ({ filteredArticle, searchValue }) => {
    filteredArticle.length = 5;
    return (
      <div
        className={`${
          searchValue ? "h-[180px]" & "flex" : "h-0" & "hidden"
        } flex flex-col gap-2 transition-all duration-200 overflow-hidden absolute bg-gray-100 rounded-2xl`}
      >
        {searchValue &&
          filteredArticle.map((article) => {
            return (
              <Link href={`blogs/${article?.id}`}>
                <div>{article?.title}</div>
              </Link>
            );
          })}
      </div>
    );
  };
  const fetchSearchData = () => {
    fetch(`https://dev.to/api/articles?per_page=100`)
      .then((response) => response.json())
      .then((data) => setArticlesForSearch(data));
  };

  const fetchData = () => {
    fetch(`https://dev.to/api/articles/latest`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  useEffect(() => {
    fetchData();
    fetchSearchData();
    setSearchValue("");
  }, []);

  return (
    <main className="">
      <div className="w-full flex justify-around relative">
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
          <div className="flex rounded-md bg-[#E8E8EA]  ">
            <input
              placeholder="search"
              type="text"
              className="bg-[#E8E8EA]"
              onChange={handleInputChange}
            />
            <SearchDropDown
              searchValue={searchValue}
              filteredArticle={filteredArticle}
            />
          </div>
        </div>
      </div>
    </main>
  );
};
