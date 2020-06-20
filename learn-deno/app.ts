import { serve } from "https://deno.land/std/http/server.ts";

const server = serve({ port: 8000 });

const greeting:string = "I'm a Deno server, you found me!";
for await (const req of server) {
    req.respond({ body: greeting});
}
