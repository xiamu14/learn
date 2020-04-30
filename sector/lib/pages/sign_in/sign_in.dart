import 'package:flutter/material.dart';
import 'package:sector/common/apis/user.dart';
import 'package:sector/common/entity/user.dart';
import 'package:sector/common/utils/screen.dart';
import 'package:sector/common/utils/security.dart';
// import 'package:sector/common/utils/storage.dart';
import 'package:sector/common/utils/validator.dart';
import 'package:sector/common/values/shadows.dart';
// import 'package:sector/common/values/storage.dart';
import 'package:sector/common/values/values.dart';
import 'package:sector/common/widgets/button.dart';
import 'package:sector/common/widgets/input.dart';

import 'package:sector/global.dart';

class SignInPage extends StatefulWidget {
  @override
  _SignInPageState createState() => _SignInPageState();
}

class _SignInPageState extends State<SignInPage> {
  /// emial 控制器
  final TextEditingController _emailController = TextEditingController();

  /// 密码控制器
  final TextEditingController _passController = TextEditingController();

  // 跳转 注册页面
  _handleNavSignUp() {
    Navigator.pushNamed(context, "/sign-up");
  }

  /// 登录操作
  _handleSignIn() async {

    UserRequestSigInEntity params = UserRequestSigInEntity(
      email: _emailController.value.text,
      password: duSHA256(_passController.value.text),
    );
    UserResponseEntity res = await UserAPI.login(params: params);
    // print(res.displayName);
    // 写本地 access_token
    // StorageUtil().setJSON(STORAGE_USER_TOKEN_KEY, res.accessToken);
    Global.saveProfile(res);
    Navigator.pushNamed(context, "/app");

  }

  /// logo
  Widget _buildLogo() {
    return Container(
      width: duSetWidth(110),
      margin: EdgeInsets.only(
        top: duSetHeight(40),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: <Widget>[
          Container(
            height: duSetHeight(76),
            width: duSetWidth(76),
            margin: EdgeInsets.symmetric(
              horizontal: duSetWidth(15),
            ),
            child: Stack(
              alignment: Alignment.center,
              children: <Widget>[
                Positioned(
                  left: 0,
                  top: 0,
                  right: 0,
                  child: Container(
                    height: duSetWidth(76),
                    decoration: BoxDecoration(
                      color: AppColors.primaryBackground,
                      boxShadow: [Shadows.primaryShadow],
                      //                      border: Border.all(color: Colors.red),
                      borderRadius: BorderRadius.all(
                        Radius.circular(42), // 父容器的 50%
                      ),
                    ),
                  ),
                ),
                Positioned(
                  top: duSetHeight(13),
                  child: Image.asset(
                    "assets/images/Logo.png",
                    fit: BoxFit.none,
                  ),
                ),
              ],
            ),
          ),
          Container(
            margin: EdgeInsets.only(
              top: duSetHeight(15),
            ),
            child: Text(
              "SECTOR",
              textAlign: TextAlign.center,
              style: TextStyle(
                color: AppColors.primaryText,
                fontFamily: "Montserrat",
                fontWeight: FontWeight.w600,
                fontSize: duSetFontSize(24),
                height: 1.2,
              ),
            ),
          ),
          Text(
            "news",
            textAlign: TextAlign.center,
            style: TextStyle(
              color: AppColors.primaryText,
              fontFamily: "Avenir",
              fontWeight: FontWeight.w400,
              fontSize: duSetFontSize(16),
              height: 1,
            ),
          ),
        ],
      ),
    );
  }

  /// 登录表单
  Widget _buildInputForm() {
    return Container(
      width: duSetWidth(295),
      margin: EdgeInsets.only(
        top: duSetHeight(49),
      ),
      child: Column(
        children: <Widget>[
          // emial input
          InputTextFiled(
            controller: _emailController,
            keyboardType: TextInputType.emailAddress,
            hintText: "Email",
            warnMsg: "请输入真实邮箱地址！",
            validator: duIsEmail,
            marginTop: 0,
          ),
          // password input
          InputTextFiled(
            controller: _passController,
            keyboardType: TextInputType.visiblePassword,
            hintText: "Password",
            warnMsg: "密码不能小于 6 位！",
            validator: duIsPwd,
            marginTop: duSetHeight(5),
            isPassword: true,
          ),

          // 注册、登录按钮
          Container(
            height: duSetHeight(44),
            margin: EdgeInsets.only(
              top: duSetHeight(25),
            ),
            child: Row(
              children: <Widget>[
                btnFlatButtonWidget(
                  onPressed: _handleNavSignUp,
                  gbColor: AppColors.thirdElement,
                  title: "Sign up",
                ),
                Spacer(),
                btnFlatButtonWidget(
                  onPressed: () => _handleSignIn(),
                  gbColor: AppColors.primaryElement,
                  title: "Sign in",
                ),
              ],
            ),
          ),

          /// Fogot password
          Container(
            height: duSetHeight(22),
            margin: EdgeInsets.only(
              top: duSetHeight(20),
            ),
            child: FlatButton(
              onPressed: () => {},
              child: Text(
                "Fogot password?",
                style: TextStyle(
                  color: AppColors.secondaryElementText,
                  fontFamily: "Avenir",
                  fontWeight: FontWeight.w400,
                  fontSize: duSetFontSize(16),
                  height: 1, // 设置下行高，否则字体下沉
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }

  /// 第三方登录
  Widget _buildThirdPartyLogin() {
    return Container(
      width: duSetWidth(295),
      margin: EdgeInsets.only(
        bottom: duSetHeight(40),
      ),
      child: Column(
        children: <Widget>[
          Text(
            "Or sign in with social networks",
            textAlign: TextAlign.center,
            style: TextStyle(
              color: AppColors.primaryText,
              fontFamily: "Avenir",
              fontWeight: FontWeight.w400,
              fontSize: duSetFontSize(16),
            ),
          ),
          Padding(
            padding: EdgeInsets.only(
              top: duSetHeight(20),
            ),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: <Widget>[
                btnFlatButtonBorderOnlyWidget(
                  onPressed: () {},
                  width: 88,
                  iconFileName: "twitter",
                ),
                btnFlatButtonBorderOnlyWidget(
                  onPressed: () {},
                  width: 88,
                  iconFileName: "google",
                ),
                btnFlatButtonBorderOnlyWidget(
                  onPressed: () {},
                  width: 88,
                  iconFileName: "facebook",
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  /// 注册按钮
  Widget _buildSignupButton() {
    return Container();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      resizeToAvoidBottomPadding: false,
      body: SafeArea(
        child: Column(
          children: <Widget>[
            _buildLogo(),
            _buildInputForm(),
            Spacer(),
            _buildThirdPartyLogin(),
            _buildSignupButton(),
          ],
        ),
      ),
    );
  }
}
