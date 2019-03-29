import * as Hapi from "hapi";
import * as Boom from "boom";
import * as fs from "fs";
import * as path from 'path';
import Utils from "../../helper/utils";
import Logger from "../../helper/logger";
import UserModel from "../../model/user";
import CrudController from "../../common/crud-controller";

export class UploadController extends CrudController {
  constructor() {
    super(UserModel);
  }

  public uploadFile = async (
    request: Hapi.Request,
    h: Hapi.ResponseToolkit
  ): Promise<any> => {
    try {
      Logger.info(`GET - ${Utils.getUrl(request)}`);

      const post:Buffer = (request.payload as any).post;

      fs.writeFile(path.resolve(__dirname, "../../img/test.png"), post, err => {
        if (!err) {
          console.log("Uploaded!");
        } else {
          console.log(err)
        }
      });
      return h.response({
        code: 200,
        data: {}
      });
    } catch (error) {
      return Boom.badImplementation(error);
    }
  };
}

const uploadController = new UploadController()

export default uploadController;
