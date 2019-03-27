import * as Hapi from "hapi";
import * as Boom from "boom";

import Utils from '../../helper/utils';
import Logger from '../../helper/logger';
import PostModel from "../../models/post";
import CrudController from "../../common/crud-controller";

export default  class PostController extends CrudController {
  constructor() {
    super(PostModel);
  }

}
