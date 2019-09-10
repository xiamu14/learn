import development from "./development"; // 本地开发环境配置
import test from "./test"; // 测试环境配置
import production from "./production"; // 生产环境配置

const confEnv = process.env.REACT_APP_CONF_ENV;

console.log("环境变量值", confEnv);

const config =
  (confEnv === "development" && development) ||
  (confEnv === "test" && test) ||
  (confEnv === "production" && production);

export default config;
