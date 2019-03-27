import * as Hapi from "hapi";

import Config from "../config";
import Logger from "../helper/logger";

export default class Plugins {
  // 实时监控服务器运行状况插件
  public static async status(server: Hapi.Server): Promise<Error | any> {
    try {
      Logger.info("Plugins - Registering status-monitor");

      await Plugins.register(server, {
        options: Config.status.options,
        plugin: require("hapijs-status-monitor")
      });
    } catch (error) {
      Logger.info(
        `Plugins - Ups, something went wrong when registering status plugin: ${error}`
      );
    }
  }
// api 网页可视化插件
  public static async swagger(server: Hapi.Server): Promise<Error | any> {
    try {
      Logger.info("Plugins - Registering swagger-ui");

      await Plugins.register(server, [
        require("vision"), // 渲染模板引擎
        require("inert"), // 处理静态文件和路径
        {
          options: Config.swagger.options,
          plugin: require("hapi-swagger")
        }
      ]);
    } catch (error) {
      Logger.info(
        `Plugins - Ups, something went wrong when registering swagger-ui plugin: ${error}`
      );
    }
  }

  public static async boom(server: Hapi.Server): Promise<Error | any> {
    try {
      Logger.info("Plugins - Registering hapi-boom-decorators");

      await Plugins.register(server, {
        plugin: require("hapi-boom-decorators") // 返回友好的错误提示
      });
    } catch (error) {
      Logger.info(
        `Plugins - Ups, something went wrong when registering hapi-boom-decorators plugin: ${error}`
      );
    }
  }

  public static async registerAll(server: Hapi.Server): Promise<Error | any> {
    if (process.env.NODE_ENV === "development") {
      await Plugins.status(server);
      await Plugins.swagger(server);
    }

    await Plugins.boom(server);
  }

  private static register(server: Hapi.Server, plugin: any): Promise<void> {
    Logger.debug("registering: " + JSON.stringify(plugin));
    return new Promise((resolve, reject) => {
      server.register(plugin);
      resolve();
    });
  }
}
