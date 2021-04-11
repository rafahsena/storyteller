import React from "react";
import wx from "xwind";
import Link from "next/link";
import { useIntl } from "react-intl";

// import { Container } from './styles';

const Header: React.FC = () => {
  const intl = useIntl();
  return (
    <header css={wx`bg-indigo-500 h-20 flex items-center px-10`}>
      <h1 css={wx`text-gray-50 font-bold font-sans text-3xl`}>Storyteller</h1>
      <Link href="/">{intl.formatMessage({id: "header.home"})}</Link>
      <Link href="/rooms">{intl.formatMessage({id: "header.rooms"})}</Link>
    </header>
  );
};

export default Header;
