interface PageInfo {
  title: string;
}

type Page = "home" | "about" | "contact";
type Tt = Page extends string ? string : number;
const x: Record<Page, PageInfo> = {
  about: { title: "about" },
  contact: { title: "contact" },
  home: { title: "home" }
};

type Rule = { handle: RegExp | string, msg: string };
const rule: Rule = {
  handle: /\w/g,
  msg: ""
}
