import React from "react";
import wx from "xwind";

const Card: React.FC = ({ children }) => {
  return <div css={wx`hover:bg-gray-50 transition px-10 py-5`}>{children}</div>;
};

export default Card;
