import { auth } from "nexus-plugin-jwt-auth";
import app, { server, use, settings } from "nexus";
import cookieParser from "cookie-parser";
import "../../graphql/schema"; // we'll create this file in a second!
import { protectedPaths } from "./permissions";
import { APP_SECRET } from "./utils";

settings.change({
  server: {
    playground: {
      settings: {
        "request.credentials": "include",
      },
    },
  },
});

// Add the cookie-parser middleware to Express
server.express.use(cookieParser());

use(
  auth({
    appSecret: APP_SECRET,
    protectedPaths,
    useCookie: true,
    cookieName: "token",
  })
);

app.assemble();

export const config = {
  formatError: (err: any) => {
    return {
      message: err.message,
      code: err.originalError && err.originalError.code,
      locations: err.locations,
      path: err.path,
    };
  },
};

export default server.handlers.graphql;
