import 'dart:collection';

import 'package:dio/dio.dart';
import 'package:sector/common/utils/storage.dart';
import 'package:sector/common/values/cache.dart';

class CacheObject {
  Response response;
  int timeStamp;
  CacheObject(this.response) : timeStamp = DateTime.now().millisecondsSinceEpoch;

  @override
  bool operator == (other) {
    return response.hashCode == other.hashCode;
  }

  @override
  int get hashCode => response.realUri.hashCode;
}

class NetCache extends Interceptor {
  // 为了确保迭代器顺序和对象插入时间顺序一致，使用 LinkedHashMap
  var cache = LinkedHashMap<String, CacheObject>();

  @override
  onRequest(RequestOptions options) async {
    if (!CACHE_ENABLE) return options;

    // refresh 标记是否刷新缓存
    bool refresh = options.extra["refresh"] == true;
    // 是否磁盘缓存
    bool cacheDisk = options.extra["cacheDisk"] == true;

    // 如果是刷新，则先删除相关缓存
    if(refresh) {
      if (options.extra["list"] == true) {
        // 若是列表，则只要 url 中包含当前 path 的缓存全部删除
        cache.removeWhere((key, v) => key.contains(options.path));

      } else {
        // 如果不是，则只删除 uri 相同的缓存
        delete(options.uri.toString());
      }
    }

  }

  @override
  onError(DioError err) async {

  }

  @override
  onResponse(Response response) async {
    // 如果
    if (CACHE_ENABLE) {
      await _saveCache(response);
    }
  }

  Future<void> _saveCache(Response object) async {
    RequestOptions options = object.request;

    // 只缓存 get 的请求
    if (options.extra["noCache"] != true && options.method.toLowerCase() == "get") {
      // 策略： 内存、磁盘都写缓存

      // 缓存 key
      String key = options.extra["cacheKey"] ?? options.uri.toString();

      // 磁盘缓存
      if (options.extra["cacheDisk"] == true) {
        await StorageUtil().setJSON(key, object.data);
      }

      // 内存缓存
      // 如果缓存数量超过最大数量限制，则先移除最早的一条记录
      if (cache.length == CACHE_MAXCOUNT) {
        cache.remove(cache[cache.keys.first]);
      }
      cache[key] = CacheObject(object);
    }
  }

  void delete(String key) {
    cache.remove(key);
  }

}
