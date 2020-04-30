import 'package:sector/common/entity/categories.dart';
import 'package:sector/common/entity/news.dart';
import 'package:sector/common/utils/http.dart';

class NewsAPI {
  /// 分类
  static Future<List<CategoryResponseEntity>> categories({
    bool refresh = false,
    bool cacheDisk = false,
  }) async {
    var response = await HttpUtil().get(
      '/categories',
      refresh: refresh,
      cacheDisk: cacheDisk,
    );
    return response
        .map<CategoryResponseEntity>(
            (item) => CategoryResponseEntity.fromJson(item))
        .toList();
  }

  /// 推荐 ------------------
  static Future<NewsRecommendResponseEntity> newsRecommend({
    NewsRecommendRequestEntity params,
    bool refresh = false,
    bool cacheDisk = false,
  }) async {
    var response = await HttpUtil().get(
      '/news/recommend',
      params: params?.toJson(),
      refresh: refresh,
      cacheDisk: cacheDisk,
    );
    return NewsRecommendResponseEntity.fromJson(response);
  }
}
