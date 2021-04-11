import React from "react";
import Header from "../Header";
import wx from "xwind";

const Layout: React.FC = ({ children }) => {
  return (
    <div css={wx`bg-gray-50 h-screen`}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
