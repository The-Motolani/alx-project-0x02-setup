import { ButtonProps } from "../../interfaces";

const sizeClasses = {
  small: "px-3 py-1 text-sm",
  medium: "px-4 py-2",
  large: "px-6 py-3 text-lg"
};

const Button = ({ size, shape, label }: ButtonProps) => {
  return (
    <button className={`bg-blue-600 text-white ${sizeClasses[size]} ${shape}`}>
      {label}
    </button>
  );
};

export default Button;
