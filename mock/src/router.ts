import * as Hapi from "hapi";
import UserRoutes from "./api/users/routes";
import PostRoutes from "./api/post/routes";
import UploadRoutes from "./api/upload/routes";
import Logger from "./helper/logger";

export default class Router {
  public static async loadRoutes(server: Hapi.Server): Promise<any> {
    Logger.info("Router - Start adding routes.");

    await new UserRoutes().register(server);
    await new PostRoutes().register(server);
    await new UploadRoutes().register(server);

    Logger.info("Router - Finish adding routes.");
  }
}
