import Link from "next/link";
export const ErrorPage = () => {
  return (
    <main>
      <div className="w-full flex items-center justify-center">
        <div className="container flex items-center justify-center gap-10">
          <p>404</p>
          <p className="w-0 h-[156px] border"></p>
          <div className="flex flex-col gap-2">
            <p>Page Not Found</p>
            <p>
              We're sorry, This page is unknown or does not exist the page you
              are looking for.
            </p>
            <span>
              <Link href="/">
                <button className="bg-blue-500 text-white rounded-md pl-2 pr-2 pb-1 pt-1">
                  Back to Home
                </button>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};
