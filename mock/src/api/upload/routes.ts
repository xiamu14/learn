import * as Hapi from "hapi";

import IRoute from "../../helper/route";
import Logger from "../../helper/logger";
import uploadController from "./controller";

export default class UploadRoutes implements IRoute {
  public async register(server: Hapi.Server): Promise<any> {
    return new Promise(resolve => {
      Logger.info("PostRoutes - Start adding upload routes.");
      server.route([
        {
          method: "POST",
          path: "/api/uploadFile",
          options: {
            handler: uploadController.uploadFile,
            description: "Method that upload a picture.",
            tags: ["api", "upload"],
            auth: false
          }
        }
      ]);
      Logger.info("UserRoutes - Finish adding upload routes.");

      resolve();
    });
  }
}
