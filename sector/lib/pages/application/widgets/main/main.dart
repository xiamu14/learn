import 'package:flutter/material.dart';
import 'package:sector/common/apis/news.dart';
import 'package:sector/common/entity/categories.dart';
import 'package:sector/common/entity/news.dart';
import 'package:sector/common/values/values.dart';
import 'package:sector/pages/application/widgets/main/categories_widget.dart';
import 'package:sector/pages/application/widgets/main/recommend_widget.dart';

class MainPage extends StatefulWidget {
  @override
  _MainPageState createState() => _MainPageState();
}

/// ad 广告条
/// 邮件订阅
Widget _buildEmailSubscribe() {
  return Container();
}

class _MainPageState extends State<MainPage> {
  List<CategoryResponseEntity> _categories; // 分类
  NewsRecommendResponseEntity _newsRecommend; // 新闻推荐
  String _selCategoryCode; // 选中的分类 code

  @override
  void initState() {
    super.initState();
    _loadAllData();
  }

  _loadAllData() async {
    _categories = await NewsAPI.categories(cacheDisk: true);
    _selCategoryCode = _categories.first.code;

    _newsRecommend = await NewsAPI.newsRecommend(
      cacheDisk: true,
    );

    // print(_categories.first.title);
    /// 触发渲染页面
    if (mounted) {
      setState(() {});
    }
  }

  /// 分类菜单
  Widget _buildCategories() {
    return newsCategoriesWidget(
        categories: _categories,
        selCategoryCode: _selCategoryCode,
        onTap: (CategoryResponseEntity item) {
          setState(() {
            _selCategoryCode = item.code;
          });
        });
  }

  /// 推荐阅读
  Widget _buildCommand() {
    // 使用骨架图展示
    return _newsRecommend == null
        ? Container()
        : recommendWidget(_newsRecommend);
  }

  /// 频道
  Widget _buildChannels() {
    return Container();
  }

  /// 新闻列表
  Widget _buildNewsList() {
    return Container();
  }

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Column(
        children: <Widget>[
          _buildCategories(),
          Divider(
            height: 1,
            color: AppColors.tabBarElement,
          ),
          _buildCommand(),
          _buildChannels(),
          _buildNewsList(),
          _buildEmailSubscribe(),
        ],
      ),
    );
  }
}
