import 'package:localstorage/localstorage.dart';
import 'package:sector/common/values/storage.dart';

/// 本地存储
/// 单例 StorageUtil().getItem()
class StorageUtil {
  static final StorageUtil _singleton = new StorageUtil._internal();

  LocalStorage _storage;

  factory StorageUtil() {
    return _singleton;
  }

  StorageUtil._internal() {
    _storage = new LocalStorage(STORAGE_MASTER_KEY);
  }

   String getItem(String key) {
    return _storage.getItem(key);
  }

  Future<void> setItem(String key, String val) async {
    await _storage.setItem(key, val);
  }

}
