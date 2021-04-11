import { InputHTMLAttributes, forwardRef, DetailedHTMLProps } from "react";
import wx from "xwind";

const Input: React.FC<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
> = forwardRef(
  (
    props: DetailedHTMLProps<
      InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    ref
  ) => {
    return (
      <input
        css={wx`border-2 border-blue-900 rounded py-1 px-2 my-2`}
        ref={ref}
        {...props}
      />
    );
  }
);

export default Input;
