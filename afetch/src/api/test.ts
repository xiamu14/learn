import { createFetch } from ".";

export const testApi = {
  key: "testApi",
  fetch: createFetch({
    option: {
      url: "/api/v2/pokemon",
      method: "GET",
      // headers: {
      //   "Content-Type": "multipart/form-data"
      // }
      headers: {
        "Content-Type": "application/json",
      },
    },
  }),
};
