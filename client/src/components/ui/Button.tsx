interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: string;
  startIcon: any;
  endIcon: any;
  onClick?: () => void;
}
const sizeStyles = {
  sm: "px-2 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};
const variantStyles = {
  primary: "bg-purple-600 text-white ",
  secondary: "bg-purple-300 text-purple-400 ",
};
const defaultStyles = "rounded-md flex items-center gap-2";
export const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${defaultStyles} ${sizeStyles[props.size]} ${
        variantStyles[props.variant]
      }`}
    >
      {props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null}
      <span>{props.text}</span>
      {props.endIcon}
    </button>
  );
};
