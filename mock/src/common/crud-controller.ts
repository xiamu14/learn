import * as Hapi from "hapi";
import * as Boom from "boom";
import Utils from "../helper/utils";
import Logger from "../helper/logger";
import { request } from "https";

export default class CrudController {
  // FIXME:这里model 不知道应该使用什么类型，先搁置
  protected model: any;
  constructor(model: any) {
    this.model = model;
  }

  // base handler
  public create = async (
    request: Hapi.Request,
    h: Hapi.ResponseToolkit
  ): Promise<any> => {
    try {
      Logger.info(`POST - ${Utils.getUrl(request)}`);
      const res = this.model.create(request.payload);
      return h.response({
        statusCode: 200,
        data: res
      });
    } catch (error) {
      return Boom.badImplementation(error);
    }
  };

  public getAll = async (
    request: Hapi.Request,
    h: Hapi.ResponseToolkit
  ):Promise<any> => {
    try {
      Logger.info(`GET - ${Utils.getUrl(request)}`);
      const res = await this.model.find({});
      return h.response({ statusCode: 200, data: res });
    } catch (error) {
      return Boom.badImplementation(error);
    }
  }
}
