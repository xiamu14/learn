import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

// Logger
app.use(async (ctx:any, next:any) => {
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

// Timing
app.use(async (ctx:any, next:any) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
});

// Hello World!
app.use((ctx:any) => {
  ctx.response.body = "Hello World!";
});

await app.listen({ port: 8000 });
