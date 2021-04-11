import { ButtonHTMLAttributes, ReactNode } from "react";

import wx from "xwind";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }: ButtonProps) => {
  return (
    <button {...props} css={wx`bg-blue-700 py-1.5 px-8 text-white rounded-sm`}>
      {children}
    </button>
  );
};

export default Button;
