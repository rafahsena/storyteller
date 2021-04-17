import React from "react";
import wx from "xwind";

const Card: React.FC = ({ children }) => {
  return (
    <div
      css={wx`bg-gray-50 py-10 px-5 w-80 items-center justify-center rounded`}
    >
      {children}
    </div>
  );
};

export default Card;
