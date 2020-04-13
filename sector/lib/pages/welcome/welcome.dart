import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:sector/common/utils/utils.dart';
import 'package:sector/common/values/values.dart';

class Item {
  String intro;
  String imageName;
  double marginTop;
  Item({this.imageName, this.intro, this.marginTop});
}

// 这写法虽然多余，但如果数据是外部传入就有必要了
List<Item> featureList = [
  Item(
    imageName: "assets/images/feature-1.png",
    intro: "Compelling photography and typography provide a beautiful reading",
    marginTop: 86,
  ),
  Item(
    imageName: "assets/images/feature-2.png",
    intro:
        "Sector news never shares your personal data with advertisers or publishers",
    marginTop: 40,
  ),
  Item(
    imageName: 'assets/images/feature-3.png',
    intro: "You can get Premium to unlock hundreds of publications",
    marginTop: 40,
  )
];

class WelcomePage extends StatelessWidget {
  /// 页头标题
  Widget _buildPageHeadTitle() {
    return Container(
      margin: EdgeInsets.only(top: duSetHeight(60)),
      child: Text(
        "Feature",
        style: TextStyle(
            fontFamily: "Avenir",
            fontSize: duSetFontSize(24),
            color: AppColors.primaryText),
      ),
    );
  }

  /// 页头说明
  Widget _buildPageHeadDetail() {
    return Container(
      width: duSetWidth(242),
      margin: EdgeInsets.only(top: duSetHeight(14)),
      child: Text(
        "The best of news channels all in one place. Trusted sources and personalized news for you.",
        textAlign: TextAlign.center,
        style: TextStyle(
            fontFamily: "Avenir",
            fontSize: duSetFontSize(16.0),
            color: AppColors.primaryText),
      ),
    );
  }

  Widget _buildFeatureItem(Item item) {
    return Container(
      width: duSetWidth(295),
      margin: EdgeInsets.only(
        top: duSetHeight(item.marginTop),
      ),
      child: Row(
        children: <Widget>[
          Image.asset(item.imageName),
          Spacer(),
          Container(
            width: duSetWidth(195),
            child: Text(
              item.intro,
              style: TextStyle(fontSize: 16.0, fontFamily: "Avenir"),
            ),
          )
        ],
      ),
    );
  }

  /// 开始按钮
  Widget _buildStartButton(BuildContext context) {
    return Container(
      width: duSetWidth(295),
      height: duSetHeight(44),
      margin: EdgeInsets.only(bottom: duSetHeight(20)),
      child: FlatButton(
        color: AppColors.primaryElement,
        textColor: AppColors.primaryElementText,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.all(
            Radius.circular(duSetWidth(6)),
          ),
        ),
        child: Text('Get Started'),
        onPressed: () {
          Navigator.pushNamed(context, "/sign-in");
        },
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    // 高度 去掉顶部、底部、导航
    ScreenUtil.init(context,
        width: 375, height: 812 - 44 - 34, allowFontScaling: true);

    return Scaffold(
      body: SafeArea(
        child: Center(
          child: Column(
            children: <Widget>[
              _buildPageHeadTitle(),
              _buildPageHeadDetail(),
              _buildFeatureItem(featureList[0]),
              _buildFeatureItem(featureList[1]),
              _buildFeatureItem(featureList[2]),
              Spacer(),
              _buildStartButton(context),
            ],
          ),
        ),
      ),
    );
  }
}
