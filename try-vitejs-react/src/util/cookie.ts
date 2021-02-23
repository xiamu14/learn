export function setCookie(
  name: string,
  value: any,
  exdays: number,
  domain?: string,
  path?: string
) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);

  const expires = "expires=" + d.toUTCString();
  const domains = domain || ".leiting.com"; // domain 应该用原来的 domain ，但是好像无法获取到啊
  const paths = path || "/";
  document.cookie =
    name +
    "=" +
    value +
    ";" +
    expires +
    ";Domain=" +
    domains +
    ";path=" +
    paths;
}

export const getCookie = function (name: string) {
  const ca = document.cookie.split(";");

  for (var i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (name === c.split("=")[0]) {
      return c.split("=")[1];
    }
  }
  return null;
};

export const clearCookie = function (name: string) {
  setCookie(name, "", -1);
};
