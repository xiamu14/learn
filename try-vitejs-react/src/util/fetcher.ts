import fetch from "unfetch";
import config from "../config";

type Options = {
  method?: string;
  headers?: Record<string, string>;
  credentials?: "include" | "omit";
  body?: Parameters<XMLHttpRequest["send"]>[0];
};

export const fetcher = (url: string, options?: Options) =>
  fetch(`${config.apiUrl}${url}`, options).then((r) => r.json());
