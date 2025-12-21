import { ShareIcon } from "../../icons/ShareIcon";

interface CardProps {
  title: string;
  link: string;
  type:
    | "twitter"
    | "article"
    | "youtube"
    | "video"
    | "canvas"
    | "notes"
    | "pdf";
}
export const Card = ({ type, title, link }: CardProps) => {
  return (
    <div className="bg-white rounded-md border border-[#f1f6f4] shadow-md w-72 min-h-48 max-h-92  ">
      <div className="flex justify-between ">
        <div className="flex items-center gap-4 ml-4 text-gray-500 mt-4">
          <ShareIcon size="md" />
          <span className="text-gray-700 font-semibold text-xl">{title}</span>
        </div>
        <div className="flex items-center gap-4 mr-4 mt-4 text-gray-500">
          <a href={link} target="_top">
            <ShareIcon size="md" />
          </a>
          <ShareIcon size="md" />
        </div>
      </div>
      <div className="p-4">
        {type === "youtube" && (
          <iframe
            className="w-full "
            src={link.replace("/watch?v=", "/embed/")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}

        {type === "twitter" && (
          <div className="h-56 overflow-y-scroll overflow-x-hidden">
            <blockquote className="twitter-tweet">
              <a href={link.replace("x.com", "twitter.com")}></a>
            </blockquote>
          </div>
        )}
      </div>
    </div>
  );
};
