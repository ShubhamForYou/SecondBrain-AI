import { BrainIcon } from "../../icons/BrainIcon";

export function Sidebar() {
  return (
    <div className="h-screen bg-white border-r-2 border-r-slate-200 w-60 fixed">
      <div className="flex justify-around mt-1.5 p-1.5 border-b-slate-200 border-b-2">
        <BrainIcon size="lg" />
        <div className="text-2xl font-semibold">
          SecondBrain.<span className="text-purple-600">AI</span>
        </div>
      </div>
    </div>
  );
}
