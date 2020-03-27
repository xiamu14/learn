import 'package:flutter/material.dart';

class Splash extends StatefulWidget {
  @override
  _SplashState createState() => _SplashState();
}

class _SplashState extends State<Splash> {
  bool isStartPage = false;

  // 页面初始化状态的方法
  @override
  void initState() {
    super.initState();
    // 开启倒计时
    var duration = Duration(seconds: 3);
    Future.delayed(duration, goToPage);
  }

  void goToPage() {
    if (!isStartPage) {
      // TODO: 根据登录状况判断跳转到登录还是首页
      Navigator.pushNamed(context, "login");
      isStartPage = true;
    }
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: goToPage,
      child: Image.asset('assets/imgs/splash-screen@2x.png', fit: BoxFit.cover),
    );
  }
}
