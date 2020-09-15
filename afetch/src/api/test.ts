import { createFetch } from ".";

export const testApi = {
  key: "testApi",
  fetch: createFetch({
    option: {
      url: "/rest/v1/speech-to-text/news",
      method: "GET",
    },
  }),
};
