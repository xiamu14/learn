/**
 * 根据域名判断当前环境状态
 */
export function getEnv() {
  const HREF = window.location.href;
  if (/production/.test(HREF)) { // 正则判断线上域名
    return 'production';
  } else if (/development/.test(HREF)) { // 线上测试环境域名
    return 'development';
  }
  return 'local';
}

/**
 * 判断参数具体类型，返回例如 String, Array
 * @param {Object} obj
 */
export function typeofObject(obj) {
  const class2type = {};
  'Boolean Number String Function Array Date RegExp Object Error'.split(' ').forEach((e) => {
    class2type[`[object ${e}]`] = e.toLowerCase();
  });
  if (obj == null) {
    return String(obj);
  }
  // console.log(typeof obj);
  return typeof obj === 'object' || typeof obj === 'function' ?
    class2type[class2type.toString.call(obj)] || 'object' :
    typeof obj;
}
