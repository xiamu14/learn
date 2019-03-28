import * as Hapi from "hapi";
import * as Boom from "boom";
import Utils from "../../helper/utils";
import Logger from "../../helper/logger";
import UserModel from "../../model/user";
import CrudController from "../../common/crud-controller";

export default class UserController extends CrudController {
  constructor() {
    super(UserModel);
  }

  public getSkey = async (
    request: Hapi.Request,
    h: Hapi.ResponseToolkit
  ): Promise<any> => {
    try {
      Logger.info(`GET - ${Utils.getUrl(request)}`);
      return h.response({
        code: 200,
        data: {skey: 'asdfasdfasdf'}
      });
    } catch (error) {
      return Boom.badImplementation(error);
    }
  };
}
