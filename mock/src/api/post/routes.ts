import * as Hapi from "hapi";

import validate from "./validate"; // 校验传参类型
import IRoute from "../../helper/route";
import Logger from "../../helper/logger";
import PostController  from "./controller";

export default class PostRoutes implements IRoute {
  public async register(server: Hapi.Server): Promise<any> {
    return new Promise(resolve => {
      Logger.info("PostRoutes - Start adding post routes.");
      // 控制器：用于处理 user 数据的 curd 等
      const controller = new PostController();
      server.route([
        {
          method: "POST",
          path: "/api/post",
          options: {
            handler: controller.create,
            validate: validate.create,
            description: "Method that creates a new post.",
            tags: ["api", "post"],
            auth: false
          }
        },
        // {
        //   method: "GET",
        //   path: "/api/post/{id}",
        //   options: {
        //     handler: controller.getPostInfo,
        //     validate: validate.getById,
        //     description: "Method that get a post info by its id.",
        //     tags: ["api", "post"],
        //     auth: false
        //   }
        // },
        // {
        //   method: 'GET',
        //   path: '/api/posts',
        //   options: {
        //     handler: controller.getAllPostInfo,
        //     description: 'Method that gets all post info.',
        //     tags: ['api', 'post'],
        //     auth: false,
        //   },
        // },
      ]);

      Logger.info("PostRoutes - Finish adding post routes.");

      resolve();
    });
  }
}
