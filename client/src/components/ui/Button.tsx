import type { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement | string;
  onClick?: () => void;
}
const sizeStyles = {
  sm: "px-2 py-1 text-sm rounded-sm",
  md: "px-4 py-2 text-base rounded-md",
  lg: "px-6 py-3 text-lg rounded-lg",
};
const variantStyles = {
  primary: "bg-purple-600 text-white  ",
  secondary: "bg-purple-300 text-purple-400 ",
};
export const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${sizeStyles[props.size]} ${variantStyles[props.variant]}`}
    >
      <div className="flex items-center gap-2">
        {props.startIcon}
        {props.text}
        {props.endIcon}
      </div>
    </button>
  );
};
