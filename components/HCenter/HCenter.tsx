import { ReactNode } from "react";
import wx from "xwind";

interface CenteredContentProps {
  children: ReactNode;
}

const CenteredContent: React.FC<CenteredContentProps> = ({
  children,
}: CenteredContentProps) => {
  return <div css={wx`flex justify-center`}>{children}</div>;
};

export default CenteredContent;
