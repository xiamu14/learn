import * as Hapi from "hapi";
import * as DotEnv from "dotenv";
import * as config from "config";

import Utils from "./helper/utils";
import Logger from "./helper/logger";
import Plugin from "./plugin";
import Router from "./router";

export default class Server {
  private static _instance: Hapi.Server;

  public static async start(): Promise<Hapi.Server> {
    try {
      DotEnv.config({
        // 将 .env 内的配置属性传入 process.env
        path: `${process.cwd()}/.env`
      });

      Logger.info("Mongodb - Up and Link!")
      const dbConfig = config.get("db");
      Utils.dbConnect(dbConfig);

      Server._instance = new Hapi.Server({
        port: process.env.PORT
      });

      // 注册插件
      await Plugin.registerAll(Server._instance);
      // 加载路由
      await Router.loadRoutes(Server._instance);

      await Server._instance.start();

      Logger.info("Server - Up and running!");
      Logger.info(
        `Visit: http://${process.env.HOST}:${
          process.env.PORT
        }/status for Realtime Monitor`
      );
      Logger.info(
        `Visit: http://${process.env.HOST}:${
          process.env.PORT
        }/api/users for REST API`
      );
      Logger.info(
        `Visit: http://${process.env.HOST}:${
          process.env.PORT
        }/documentation for Swagger docs`
      );

      return Server._instance;
    } catch (error) {
      Logger.info(`Server - There was something wrong: ${error}`);

      throw error;
    }
  }

  // 停止服务
  public static stop(): Promise<Error | void> {
    Logger.info(`Server - Stopping!`);

    return Server._instance.stop();
  }
  // 重启服务
  public static async recycle(): Promise<Hapi.Server> {
    await Server.stop();

    return await Server.start();
  }
  // hapi 实例
  public static instance(): Hapi.Server {
    return Server._instance;
  }
  // ？
  public static async inject(
    options: string | Hapi.ServerInjectOptions
  ): Promise<Hapi.ServerInjectResponse> {
    return await Server._instance.inject(options);
  }
}
