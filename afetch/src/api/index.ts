import appendToFormData from "./append_to_form";

const base = "https://pokeapi.co";

export type ReqConfig = {
  option: {
    method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
    url: string;
    baseUrl?: string;
    headers?: any;
    data?: Record<string, any>;
    timeout?: number;
    withCredentials?: boolean;
  };
  middle?: Function;
  resFn?: Function;
};

export function createFetch(reqConfig: ReqConfig) {
  let apiUrl = `${base}${reqConfig.option.url}`;
  // TODO: 发送请求前拦截
  console.log("请求发送前");
  const config: any = {
    method: reqConfig.option.method,
  };
  // TODO: 处理 GET 请求参数
  if (reqConfig.option.method === "GET" && reqConfig.option.data) {
    const params = Object.keys(reqConfig.option.data)
      .map(
        (key) => `${key}=${(reqConfig.option.data as Record<string, any>)[key]}`
      )
      .join("&");
    apiUrl = `${apiUrl}?${params}`;
    console.log("检查看看啊", params);
  }

  if (reqConfig.option.method === "POST" && reqConfig.option.data) {
    if (
      reqConfig.option.headers &&
      Object.prototype.hasOwnProperty.bind(
        reqConfig.option.headers,
        "Content-Type"
      ) &&
      reqConfig.option?.headers["Content-Type"] === undefined
    ) {
      delete reqConfig.option?.headers["Content-Type"];
      config["body"] = appendToFormData(reqConfig.option.data);
    } else {
      config["body"] = JSON.stringify(reqConfig.option.data);
    }
  }

  if (reqConfig.option.headers) {
    config["headers"] = reqConfig.option.headers;
  }

  console.log("这里执行了吗", config);
  return () =>
    window.fetch(apiUrl, config).then((res) => {
      console.log("结果拦截");
      if (reqConfig.resFn) {
        return reqConfig.resFn(res);
      } else {
        return res.json();
      }
    });
}
