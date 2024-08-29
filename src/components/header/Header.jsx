import { SearchIcon } from "../svg/SearchIcon";

export const Header = () => {
    return (
      <main className="">
        <div className="w-full flex justify-around bg-Secondary-100  ">
          <div className="container flex justify-between items-center px-8">
            <img src="./metablog.png" alt="" width={100} height={36} />
            <div className="flex items-center justify-end ">  
               <button className="px-2">Home</button>
       <button className="px-2">Blog</button>
       <button className="px-2">Contact</button>
       <div className="pl-4 pb-2 pt-2 pr-2 flex items-center justify-center rounded-md bg-[#F4F4F5] gap-[12px] ">
       <input placeholder="search" type="text" className="bg-[#F4F4F5]" />
       <SearchIcon/>
       </div>
      
          </div>
          </div>
        </div>
      </main>
    );
  };
  