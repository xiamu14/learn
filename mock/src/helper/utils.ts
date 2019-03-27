import * as Hapi from "hapi";
import * as mongoose from "mongoose";
import Logger from '../helper/logger';
export default class Utils {
  public static getUrl(request: Hapi.Request): string {
    return `${request.server.info.protocol}://${process.env.HOST}:${
      process.env.PORT
    }${request.url.path}`;
  }

  public static dbConnect(dbConfig: any) {
    // 重点在这一句，赋值一个全局Promise
    // mongoose.Promise = Promise
    const db = mongoose.connect(
      `mongodb://${dbConfig.user}:${dbConfig.pwd}@${dbConfig.host}:${
        dbConfig.port
      }/${dbConfig.name}`,
      dbConfig.mongoose
    );
    mongoose.connection.once("open", () => {
      Logger.info("connected to database");
    });
    return db;
  }
}
