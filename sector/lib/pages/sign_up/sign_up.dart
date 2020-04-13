import 'package:flutter/material.dart';
import 'package:sector/common/utils/screen.dart';
import 'package:sector/common/utils/validator.dart';
import 'package:sector/common/values/values.dart';
import 'package:sector/common/widgets/app_bar.dart';
import 'package:sector/common/widgets/button.dart';
import 'package:sector/common/widgets/input.dart';
import 'package:sector/common/widgets/toast.dart';

class SignUpPage extends StatefulWidget {
  SignUpPage({Key key}) : super(key: key);

  @override
  _SignUpPageState createState() => _SignUpPageState();
}

class _SignUpPageState extends State<SignUpPage> {
  /// logo
  Widget _buildLogo() {
    return Container(
      margin: EdgeInsets.only(top: duSetHeight(50)),
      child: Text(
        'Sign Up',
        style: TextStyle(
          fontFamily: "Montserat",
          fontSize: duSetFontSize(24),
        ),
      ),
    );
  }

  final TextEditingController _fullNameController = TextEditingController();

  /// emial 控制器
  final TextEditingController _emailController = TextEditingController();

  /// 密码控制器
  final TextEditingController _passController = TextEditingController();

  _handleSignUp() {}

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
            controller: _fullNameController,
            keyboardType: TextInputType.text,
            hintText: "Full name",
            warnMsg: "用户姓名不能小于5位！",
            validator: duIsFullName,
            marginTop: 0,
          ),
          // emial input
          InputTextFiled(
            controller: _emailController,
            keyboardType: TextInputType.emailAddress,
            hintText: "Email",
            warnMsg: "请输入真实邮箱地址！",
            validator: duIsEmail,
            marginTop: duSetHeight(5),
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
            width: duSetWidth(294),
            margin: EdgeInsets.only(
              top: duSetHeight(15),
            ),
            child: btnFlatButtonWidget(
              onPressed: _handleSignUp,
              gbColor: AppColors.primaryElement,
              title: "Create an account",
            ),
          ),
          Container(
            width: duSetWidth(240),
            margin: EdgeInsets.only(
              top: duSetHeight(20),
            ),
            child: RichText(
              textAlign: TextAlign.center,
              text: TextSpan(
                  text: "By signing up you agree to our",
                  style: TextStyle(
                    fontSize: duSetFontSize(16),
                    fontFamily: 'Avenir',
                    color: AppColors.primaryText,
                  ),
                  children: <TextSpan>[
                    TextSpan(
                      text: " Terms ",
                      style: TextStyle(
                        fontSize: duSetFontSize(16),
                        fontFamily: 'Avenir',
                        color: AppColors.primaryElement,
                      ),
                    ),
                    TextSpan(
                      text: "and",
                      style: TextStyle(
                        fontSize: duSetFontSize(16),
                        fontFamily: 'Avenir',
                        color: AppColors.primaryText,
                      ),
                    ),
                    TextSpan(
                      text: " Conditions of Use",
                      style: TextStyle(
                        fontSize: duSetFontSize(16),
                        fontFamily: 'Avenir',
                        color: AppColors.primaryElement,
                      ),
                    ),
                  ]),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildThirdPartyLogin() {
    return Container(
      width: duSetWidth(295),
      margin: EdgeInsets.only(bottom: duSetHeight(20)),
      child: Column(
        children: <Widget>[
          // title
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
          // 按钮
          Padding(
            padding: EdgeInsets.only(top: duSetHeight(20)),
            child: Row(
              children: <Widget>[
                btnFlatButtonBorderOnlyWidget(
                  onPressed: () {},
                  width: 88,
                  iconFileName: "twitter",
                ),
                Spacer(),
                btnFlatButtonBorderOnlyWidget(
                  onPressed: () {},
                  width: 88,
                  iconFileName: "google",
                ),
                Spacer(),
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

  _handleNavPop() {
    Navigator.pop(context);
  }

  Widget _buildHavaAccountButton() {
    return Container(
      margin: EdgeInsets.only(bottom: duSetHeight(20)),
      // decoration: BoxDecoration(
      //   border: Border.all(color: Colors.red),
      // ),
      child: btnFlatButtonWidget(
        onPressed: _handleNavPop,
        width: duSetWidth(294),
        height: duSetHeight(44),
        gbColor: AppColors.secondaryElement,
        fontColor: AppColors.primaryText,
        title: "I have an account",
        fontWeight: FontWeight.w500,
        fontSize: 16,
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      resizeToAvoidBottomInset: false,
      appBar: transparentAppbar(
        context: context,
        actions: <Widget>[
          IconButton(
            icon: Icon(Icons.info_outline, color: AppColors.primaryText),
            onPressed: () {
              toastInfo(msg: '这是注册页面');
            },
          )
        ],
      ),
      body: Center(
        child: Column(
          children: <Widget>[
            Divider(
              height: 1,
            ),
            _buildLogo(),
            _buildInputForm(),
            Spacer(),
            _buildThirdPartyLogin(),
            _buildHavaAccountButton(),
          ],
        ),
      ),
    );
  }
}
