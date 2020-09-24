import { serialize } from "cookie";

type Options = {
  expires?: Date;
  maxAge?: number;
  httpOnly?: boolean;
  secure?: boolean;
};

export const serializeCookie = (
  name: string,
  value: string,
  options: Options = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 30 * 24 * 60 * 60 * 1000 // a month
  }
) => {
  if ("maxAge" in options) {
    options.expires = new Date(Date.now() + (options.maxAge as number));
    (options.maxAge as number) /= 1000;
  }

  return serialize(name, value, options);
};
