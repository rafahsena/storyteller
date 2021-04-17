import { InputHTMLAttributes, forwardRef, DetailedHTMLProps } from "react";
import wx from "xwind";

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  errorMsg?: string;
  isInvalid: boolean;
}

const Input: React.FC<InputProps> = forwardRef(
  ({ errorMsg, isInvalid, ...props }: InputProps, ref) => {
    return (
      <div css={wx`flex flex-col my-2 w-full`}>
        <input
          css={wx`border-2 border-blue-900 rounded py-1 px-2 mb-2 w-full`}
          ref={ref}
          {...props}
        />
        {isInvalid && errorMsg && (
          <span css={wx`text-red-500 text-xs`}>{errorMsg}</span>
        )}
      </div>
    );
  }
);

export default Input;
