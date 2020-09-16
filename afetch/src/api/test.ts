import { createFetch } from ".";

export const testApi = {
  key: "testApi",
  fetch: createFetch({
    option: {
      url: "/rest/v1/user/register",
      method: "POST",
      data: { name: "12", email: "21", password: "123123" },
      headers: {
        "Content-Type": "multipart/form-data"
      }
      // headers: {
      //   "Content-Type": undefined,
      // },
    },
  }),
};
