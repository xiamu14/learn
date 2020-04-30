import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

/// 本地存储
/// 单例 StorageUtil().getItem()
class StorageUtil {
  static final StorageUtil _singleton = new StorageUtil._();
  static SharedPreferences _prefs;

  StorageUtil._();

  factory StorageUtil() {
    return _singleton;
  }

  static Future<void> init() async {
    if (_prefs == null) {
      _prefs = await SharedPreferences.getInstance();
    }
  }

  /// 设置 json 对象
  Future<bool> setJSON(String key, dynamic jsonVal) {
    String jsonString = jsonEncode(jsonVal);
    return _prefs.setString(key, jsonString);
  }
  /// 获取 json 对象
  dynamic getJSON(String key) {
    String jsonString = _prefs.getString(key);
    return jsonString == null ? null : jsonDecode(jsonString);
  }
}
