import { development } from "./development";
import { production } from "./production";
import { Config } from "./type";

const config: Record<string, Config> = {
  development,
  production,
};

const env = (process.env.NODE_ENV || "production") as keyof typeof config;
// env 是 webpack 注入的环境参数 ，见 /config/index 中defineConstants 的配置
// 尽量少使用
const res = config[env];

export default res;
