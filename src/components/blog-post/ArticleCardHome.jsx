import { generatMonth } from "../util/generateMonth";

export const ArticleCardHome = ({ article }) => {
  const publishedDate = new Date(article.published_at);

  return (
    <main className="w-full flex items-center">
      <div className="w-[498px] h-[475px] border-[#E8E8EA] rounded-xl border p-4 flex flex-col justify-between">
        <div className="flex flex-col gap-4 container">
          <div
            style={{
              backgroundImage: `url(${article?.cover_image})`,
              width: "100%",
              height: "240px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "6px",
            }}
          ></div>
          <div className="w-[100px] h-[30px] bg-[#4B6BFB0D] flex justify-center items-center rounded-md text-[#4B6BFB]">
            {article?.tag_list[0]}
          </div>
          <div className="overflow-hidden h-[100px]">
            <p className="text-2xl font-semibold text-ellipsis line-clamp-3 ">
              {article?.description}
            </p>
          </div>
        </div>

        <p className=" text-[#97989F]">
          {publishedDate?.getFullYear()}-
          {generatMonth(publishedDate?.getMonth())}-
          {publishedDate?.getDay() + 1}
        </p>
      </div>
    </main>
  );
};
