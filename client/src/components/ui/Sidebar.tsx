import { BrainIcon } from "../../icons/BrainIcon";
import { TwitterIcon } from "../../icons/TwitterIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { SidebarItems } from "./SidebarItems";

export function Sidebar() {
  return (
    <div className="h-screen bg-white  border-r-2 border-r-slate-200 w-60 fixed">
      <div className="flex justify-around  p-2 border-b-slate-200 border-b-2">
        <BrainIcon size="lg" />
        <span className="text-2xl font-semibold text-gray-500 ">
          SecondBrain.<span className="text-purple-600">AI</span>
        </span>
      </div>
      <div
        className="flex flex-col items-start gap-6  mt-15 ml-5
      "
      >
        <SidebarItems title="Twitter" icon={<TwitterIcon size="md" />} />
        <SidebarItems title="Youtube" icon={<YoutubeIcon size="md" />} />
        <SidebarItems title="Twitter" icon={<TwitterIcon size="md" />} />
        <SidebarItems title="Twitter" icon={<TwitterIcon size="md" />} />
      </div>
    </div>
  );
}
