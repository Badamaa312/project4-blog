export const TrendingArticleCard = ({ article }) => {
  return (
    <div className="w-[289px]  flex flex-col justify-between">
      <div className="flex flex-col ">
        <div
          className="flex items-end pl-4 pr-4 h-[320px]"
          style={{
            backgroundImage: `url(${article.cover_image})`,
            width: "100%",
            height: "320px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "6px",
          }}
        >
          <div className="">
            <span className=" flex items-center text-white rounded-md bg-[#4B6BFB] pl-4 pr-4">
              {article.tag_list[0]}
            </span>
            <div className="overflow-hidden h-[100px]">
              <p className="text-xl text-pink-700 font-semibold text-ellipsis ">
                {article.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
