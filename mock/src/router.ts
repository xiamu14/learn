import * as Hapi from "hapi";

import UserRoutes from "./api/users/routes";
import PostRoutes from "./api/post/routes";
import Logger from "./helper/logger";

export default class Router {
  public static async loadRoutes(server: Hapi.Server): Promise<any> {
    Logger.info("Router - Start adding routes.");

    // await new UserRoutes().register(server);
    await new PostRoutes().register(server);

    Logger.info("Router - Finish adding routes.");
  }
}