import { GetServerSidePropsContext } from "next";
import router from "next/router";
import { ParsedUrlQuery } from "node:querystring";

export default (ctx: GetServerSidePropsContext<ParsedUrlQuery>, target: string) => {
  if (ctx.res) {
    // server
    ctx.res.writeHead(303, { Location: target });
    ctx.res.end();
  } else {
    // client
    router.push(target);
  }
};
