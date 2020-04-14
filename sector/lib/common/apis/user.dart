import 'package:sector/common/entity/user.dart';
import 'package:sector/common/utils/http.dart';

class UserAPI {
  static Future<UserResponseEntity> login({UserRequestSigInEntity params}) async {
    var response = await HttpUtil().post('/user/login', params: params);
    return UserResponseEntity.fromJson(response);
  }
}
