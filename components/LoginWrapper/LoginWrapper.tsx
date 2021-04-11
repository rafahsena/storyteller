import { ReactNode } from "react";
import wx from "xwind";

interface LoginWrapperProps {
  children: ReactNode;
}

const classes =
  "bg-gradient-to-br from-indigo-700 via-purple-600 to-pink-500 h-screen flex flex-col items-center justify-center";

const LoginWrapper: React.FC<LoginWrapperProps> = ({
  children,
}: LoginWrapperProps) => {
  return <div css={wx`${classes}`}>{children}</div>;
};

export default LoginWrapper;
