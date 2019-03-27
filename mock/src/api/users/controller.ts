import UserModel from "../../model/user";
import CrudController from '../../common/crud-controller';

export default class UserController extends CrudController {
    constructor() {
      super(UserModel);
    }
}
