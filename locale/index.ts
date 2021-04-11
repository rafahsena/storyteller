import * as components from "./components";
import * as pages from "./pages";

const locales = {
  "pt-br": { ...components.ptBr, ...pages.ptBr },
};

export type IntlMessageID = keyof typeof locales["pt-br"];
export default locales;
