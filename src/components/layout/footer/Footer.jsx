import { MetaIcon } from "@/components/svg/MetaIcon";
import { SearchIcon } from "../../svg/SearchIcon";
import Link from "next/link";
import { TwitterIcon } from "@/components/svg/TwittwerIcon";
import { InstaIcon } from "@/components/svg/InstaIcon";
import { LinkedIcon } from "@/components/svg/LinkedIcon";
import { Logo } from "@/components/svg/Logo";

export const Footer = () => {
  return (
    <main className="">
      <div className="w-full h-[495px] flex justify-around bg-gray-100">
        <div className="container flex justify-between items-center pt-8 pb-[25px]">
          <div>
            <Logo />
          </div>
          <div>
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
          </div>
          <div className="flex">
            <MetaIcon />
            <TwitterIcon />
            <InstaIcon />
            <LinkedIcon />
          </div>
        </div>
        <div className="container flex justify-between items-center "></div>
      </div>
    </main>
  );
};
