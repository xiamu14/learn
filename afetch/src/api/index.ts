const base = "https://api.jsonapi.co/";

export type ReqConfig = {
  option: {
    method: string;
    url: string;
    baseUrl?: string;
    headers?: any;
    data?: any;
    timeout?: number;
    withCredentials?: boolean;
  };
  middle?: Function;
  resFn?: Function;
};

export function createFetch(reqConfig: ReqConfig) {
  const apiUrl = `${base}${reqConfig.option.url}`;

  return () =>
    window.fetch(apiUrl).then((res) => {
      if (reqConfig.resFn) {
        return reqConfig.resFn(res);
      } else {
        return res.json();
      }
    });
}
