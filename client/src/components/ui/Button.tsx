import type { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg" | "full";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement | string;
  onClick?: () => void;
}
const sizeStyles = {
  sm: "px-2 py-1 text-sm  rounded-sm",
  md: "px-4 py-2 text-base rounded-md",
  lg: "px-6 py-3 text-lg rounded-lg ",
  full: "w-full p-1 text-lg",
};
const variantStyles = {
  primary: "bg-purple-600 text-white hover:bg-purple-700 ",
  secondary: "bg-purple-300 text-purple-400 hover:bg-gray-300 ",
};
export const Button = (props: ButtonProps) => {
  return (
    <button
      className={`w-fit cursor-pointer ${sizeStyles[props.size]} ${
        variantStyles[props.variant]
      }`}
      onClick={props.onClick}
    >
      <div className="flex items-center gap-2 justify-center ">
        {props.startIcon}
        {props.text}
        {props.endIcon}
      </div>
    </button>
  );
};
