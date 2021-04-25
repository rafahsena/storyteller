import React from "react";
import redirect from "../../utils/redirect";
import { GetServerSidePropsContext } from "next";
import { ParsedUrlQuery } from "node:querystring";
import { SIGN_IN } from "../../constants/routes";

export const PrivateRoute: React.FC<any> = ({ isAuthenticated, children }) => {
  return isAuthenticated ?? children;
};

export const handleRedirect = (
  context: GetServerSidePropsContext<ParsedUrlQuery>
) => {

  if (!context.req.cookies.Token) {
    redirect(context, SIGN_IN);
  }

  return { props: { isAuthenticated: Boolean(context.req.cookies) } };
};
