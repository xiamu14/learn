import Koa from "koa";
import Router from "koa-Router";
import cors from "@koa/cors";
// 创建一个Koa对象表示web app本身:
const app = new Koa();

const router = new Router();

router.options("/api", (ctx) => {
  ctx.set("Access-Control-Allow-Origin", "*");
  ctx.set("Access-Control-Allow-Headers", "accessToken");
  ctx.status = 204;
});

router.get("/api", (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "*");
  ctx.set("Access-Control-Allow-Headers", "accessToken");
  // ctx.router available
  ctx.response.body = { testOption: "testOption" };
});

// app.use(
//   cors({
//     "Access-Control-Allow-Origin": (ctx) => {
//       console.log("看看请求头", ctx.request);
//       return "";
//     },
//     "Access-Control-Allow-Headers": "*",
//   })
// );
app.use(router.routes()).use(router.allowedMethods());
// 在端口3000监听:
app.listen(7700);
console.log("app started at port 7700...");
