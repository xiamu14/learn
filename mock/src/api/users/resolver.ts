import User from '../../model/user';
import Resolver from '../../common/base-resolver';
import Repository from '../../common/base-repository';
import * as path from "path";

class UserResolver extends Resolver<User> {
    constructor() {
        super(new Repository({
          filename: path.resolve(__dirname, "../../data/user.json"),
          autoload: true
        }));
    }
}

const userResolver = new UserResolver()

export default userResolver;
