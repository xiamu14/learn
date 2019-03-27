import User from '../../model/user';
import userResolver from './resolver';
import CrudController from '../../common/crud-controller';

export default class UserController extends CrudController<User> {
    constructor() {
        super(userResolver);
    }
}
