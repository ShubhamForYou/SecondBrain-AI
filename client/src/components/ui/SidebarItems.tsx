import type { ReactElement } from "react";

interface SidebarItemsProps {
  title: string;
  icon: ReactElement;
}
export function SidebarItems(props: SidebarItemsProps) {
  return (
    <div className="flex items-center gap-6 text-gray-500 font-semibold hover:bg-gray-200 cursor-pointer min-w-40 p-2 rounded-md">
      {props.icon}
      {props.title}
    </div>
  );
}
