
/// 新闻推荐
/// ------------ request ---------
class NewsRecommendRequestEntity {
  String categoryCode;
  String channelCode;
  String tag;
  String keyword;

  NewsRecommendRequestEntity({
    this.categoryCode,
    this.channelCode,
    this.tag,
    this.keyword,
  });

  Map<String, dynamic> toJson() => {
        "categoryCode": categoryCode,
        "channelCode": channelCode,
        "tag": tag,
        "keyword": keyword,
      };
}
/// ------------ response ---------
class NewsRecommendResponseEntity {
  String thumbnail;
  String title;
  String category;
  DateTime addtime;
  String author;
  String url;
  String id;

  NewsRecommendResponseEntity({
    this.thumbnail,
    this.title,
    this.category,
    this.addtime,
    this.author,
    this.url,
    this.id,
  });

  factory NewsRecommendResponseEntity.fromJson(Map<String, dynamic> json) =>
      NewsRecommendResponseEntity(
        thumbnail: json["thumbnail"],
        title: json["title"],
        category: json["category"],
        addtime: DateTime.parse(json["addtime"]),
        author: json["author"],
        url: json["url"],
        id: json["id"],
      );

  Map<String, dynamic> toJson() => {
        "thumbnail": thumbnail,
        "title": title,
        "category": category,
        "addtime": addtime.toIso8601String(),
        "author": author,
        "url": url,
        "id": id,
      };
}
// --------------------------------------------

