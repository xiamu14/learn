import 'dart:async';
import 'package:dio/dio.dart';
import 'package:cookie_jar/cookie_jar.dart';
import 'package:dio_cookie_manager/dio_cookie_manager.dart';
import 'package:sector/common/utils/storage.dart';
import 'package:sector/common/values/server.dart';
import 'package:sector/common/values/storage.dart';

class HttpUtil {
  static HttpUtil _instance = HttpUtil._internal();
  factory HttpUtil() => _instance;

  Dio dio;
  CancelToken cancelToken = new CancelToken();

  HttpUtil._internal() {
    // BaseOptions、Options、RequestOptions 都可以配置参数，优先级别依次递增，且可以根据优先级别覆盖参数
    BaseOptions options = new BaseOptions(
      // 请求基地址,可以包含子路径
      baseUrl: SERVER_API_URL,

      // baseUrl: storage.read(key: STORAGE_KEY_APIURL) ?? SERVICE_API_BASEURL,
      //连接服务器超时时间，单位是毫秒.
      connectTimeout: 10000,

      // 响应流上前后两次接受到数据的间隔，单位为毫秒。
      receiveTimeout: 5000,

      // Http请求头.
      headers: {},

      /// 请求的Content-Type，默认值是"application/json; charset=utf-8".
      /// 如果您想以"application/x-www-form-urlencoded"格式编码请求数据,
      /// 可以设置此选项为 `Headers.formUrlEncodedContentType`,  这样[Dio]
      /// 就会自动编码请求体.
      contentType: 'application/json; charset=utf-8',

      /// [responseType] 表示期望以那种格式(方式)接受响应数据。
      /// 目前 [ResponseType] 接受三种类型 `JSON`, `STREAM`, `PLAIN`.
      ///
      /// 默认值是 `JSON`, 当响应头中content-type为"application/json"时，dio 会自动将响应内容转化为json对象。
      /// 如果想以二进制方式接受响应数据，如下载一个二进制文件，那么可以使用 `STREAM`.
      ///
      /// 如果想以文本(字符串)格式接收响应数据，请使用 `PLAIN`.
      responseType: ResponseType.json,
    );

    dio = new Dio(options);

    // Cookie管理
    CookieJar cookieJar = CookieJar();
    dio.interceptors.add(CookieManager(cookieJar));

    // 添加拦截器
    dio.interceptors
        .add(InterceptorsWrapper(onRequest: (RequestOptions options) {
      // print("请求之前");
      // Loading.before(options.uri, '正在通讯...');
      return options; //continue
    }, onResponse: (Response response) {
      // print("响应之前");
      // Loading.complete(response.request.uri);
      return response; // continue
    }, onError: (DioError e) {
      // print("错误之前");
      // Loading.complete(e.request.uri);
      return e; //continue
    }));
  }

  /// error 统一处理
  ErrorEntity createErrorEntity(DioError error) {
    switch (error.type) {
      case DioErrorType.CANCEL:
        {
          return ErrorEntity(code: -1, message: "请求取消");
        }
        break;
      case DioErrorType.CONNECT_TIMEOUT:
        {
          return ErrorEntity(code: -1, message: "连接超时");
        }
        break;
      case DioErrorType.SEND_TIMEOUT:
        {
          return ErrorEntity(code: -1, message: "请求超时");
        }
        break;
      case DioErrorType.RECEIVE_TIMEOUT:
        {
          return ErrorEntity(code: -1, message: "响应超时");
        }
        break;
      case DioErrorType.RESPONSE:
        {
          try {
            int errCode = error.response.statusCode;
            var msg = "";
            switch (errCode) {
              case 400:
                msg = "请求语法错误";
                break;
              case 401:
                msg = "没有权限";
                break;
              case 403:
                msg = "服务器拒绝执行";
                break;
              case 404:
                msg = "无法连接服务器";
                break;
              case 405:
                msg = "请求方法被禁止";
                break;
              case 500:
                msg = "服务器内部错误";
                break;
              case 502:
                msg = "无效的请求";
                break;
              case 503:
                msg = "服务器挂了";
                break;
              case 505:
                msg = "不支持 HTTP 协议请求";
                break;
              default:
                msg = error.response.statusMessage;
            }
            return ErrorEntity(code: errCode, message: msg);
          } on Exception catch (_) {
            return ErrorEntity(code: -1, message: "未知错误");
          }
        }
        break;
      default:
        return ErrorEntity(code: -1, message: error.message);
    }
  }

  /// 取消请求
  void cancelRequests(CancelToken token) {
    token.cancel("cancelled");
  }

  /// 读取本地配置
  Options getLocalOptions() {
    Options options;
    String token = StorageUtil().getItem(STORAGE_USER_TOKEN_KEY);
    if (token != null) {
      options = Options(headers: {'Authorization': "Bearer $token"});
    }
    return options;
  }

  /// restful get 操作
  Future get(String path,
      {dynamic params, Options options, CancelToken cancelToken}) async {
    try {
      var tokenOptions = options ?? getLocalOptions();
      var response = await dio.get(path,
          queryParameters: params,
          options: tokenOptions,
          cancelToken: cancelToken);
      return response;
    } on DioError catch (e) {
      throw createErrorEntity(e);
    }
  }

  /// restful post 操作
  Future post(String path,
      {dynamic params, Options options, CancelToken cancelToken}) async {
    try {
      var tokenOptions = options ?? getLocalOptions();
      var response = await dio.post(path,
          data: params, options: tokenOptions, cancelToken: cancelToken);
      return response.data;
    } on DioError catch (e) {
      throw createErrorEntity(e);
    }
  }

  /// restful put 操作
  Future put(String path,
      {dynamic params, Options options, CancelToken cancelToken}) async {
    try {
      var tokenOptions = options ?? getLocalOptions();
      var response = await dio.put(path,
          data: params, options: tokenOptions, cancelToken: cancelToken);
      return response.data;
    } on DioError catch (e) {
      throw createErrorEntity(e);
    }
  }

  /// restful delete 操作
  Future delete(String path,
      {dynamic params, Options options, CancelToken cancelToken}) async {
    try {
      var tokenOptions = options ?? getLocalOptions();
      var response = await dio.delete(path,
          data: params, options: tokenOptions, cancelToken: cancelToken);
      return response.data;
    } on DioError catch (e) {
      throw createErrorEntity(e);
    }
  }

  /// restful post form 表单提交操作
  Future postForm(String path,
      {dynamic params, Options options, CancelToken cancelToken}) async {
    try {
      var tokenOptions = options ?? getLocalOptions();
      var response = await dio.post(path,
          data: FormData.fromMap(params),
          options: tokenOptions,
          cancelToken: cancelToken);
      return response.data;
    } on DioError catch (e) {
      throw createErrorEntity(e);
    }
  }
}

class ErrorEntity implements Exception {
  int code;
  String message;
  ErrorEntity({this.code, this.message});

  String toString() {
    if (message == null) return "Exception";
    return "Exception: code $code, $message";
  }
}
