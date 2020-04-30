import 'package:flutter/material.dart';
import 'package:sector/common/utils/iconfont.dart';
import 'package:sector/common/utils/screen.dart';
import 'package:sector/common/values/values.dart';
import 'package:sector/common/widgets/app_bar.dart';
import 'package:sector/pages/application/widgets/account/account.dart';
import 'package:sector/pages/application/widgets/bookmarks/bookmarks.dart';
import 'package:sector/pages/application/widgets/category/catefory.dart';
import 'package:sector/pages/application/widgets/main/main.dart';

class ApplicationPage extends StatefulWidget {
  @override
  _ApplicationPageState createState() => _ApplicationPageState();
}

final List<Map<String, dynamic>> bottomTabs = [
  {
    "icon": Iconfont.home,
    "title": "main",
  },
  {
    "icon": Iconfont.grid,
    "title": "category",
  },
  {
    "icon": Iconfont.tag,
    "title": "tag",
  },
  {
    "icon": Iconfont.me,
    "title": "my",
  },
];

class _ApplicationPageState extends State<ApplicationPage> {
  // 当前 tab 页
  int _page = 0;
  // 页控制器
  PageController _pageController;

  @override
  void initState() {
    super.initState();
    _pageController = PageController(initialPage: this._page);
  }

  @override
  void dispose() {
    _pageController.dispose();
    super.dispose();
  }

  // tab 页标题
  final List<String> _tabTitles = [
    'Welcome',
    'Cagegory',
    'Bookmarks',
    'Account'
  ];

  /// 顶部导航
  Widget _buildAppBar() {
    return transparentAppbar(
      context: context,
      title: Text(
        _tabTitles[_page],
        style: TextStyle(
          color: AppColors.primaryText,
          fontFamily: 'Montserrat',
          fontSize: duSetFontSize(18.0),
          fontWeight: FontWeight.w600,
        ),
      ),
      actions: <Widget>[
        IconButton(
          icon: Icon(
            Icons.search,
            color: AppColors.primaryText,
          ),
          onPressed: () {},
        )
      ],
    );
  }

  /// 切换 tab 栏页码
  void _handlePageChange(int page) {
    setState(() {
      this._page = page;
    });
  }

  /// 内容页
  Widget _buildPageView() {
    return PageView(
      physics: NeverScrollableScrollPhysics(),
      children: <Widget>[
        MainPage(),
        CategoryPage(),
        BookmarksPage(),
        AccountPage(),
      ],
      controller: _pageController,
      onPageChanged: _handlePageChange,
    );
  }

  // tab 栏动画
  void _handleNavBarTap(int index) {
    _pageController.animateToPage(index,
        duration: Duration(milliseconds: 300), curve: Curves.bounceIn);
    // setState(() {
    //   this._page = index;
    // });
  }

  /// 底部导航项目定义
  List<BottomNavigationBarItem> _buildBottomTabs() {
    List<BottomNavigationBarItem> _bottomsTabls = [];
    for (var item in bottomTabs) {
      _bottomsTabls.add(
        BottomNavigationBarItem(
          icon: Icon(
            item["icon"],
            color: AppColors.tabBarElement,
          ),
          activeIcon: Icon(
            item["icon"],
            color: AppColors.secondaryElementText,
          ),
          title: Text(item["title"]),
          backgroundColor: AppColors.primaryBackground,
        ),
      );
    }
    return _bottomsTabls;
  }

  /// 底部导航
  Widget _buildBottomNavigationBart() {
    return BottomNavigationBar(
      items: _buildBottomTabs(),
      currentIndex: _page,
      type: BottomNavigationBarType.fixed,
      onTap: _handleNavBarTap,
      showSelectedLabels: false,
      showUnselectedLabels: false,
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: _buildAppBar(),
      body: _buildPageView(),
      bottomNavigationBar: _buildBottomNavigationBart(),
    );
  }
}
