/**
 * 根据域名判断当前环境状态
 */
export function getEnv() {
  const HREF = window.location.href;
  if (/www.qiushibaike.com/.test(HREF)) {
    return 'production';
  } else if (/qaz.qiushibaike.com/.test(HREF)) {
    return 'development';
  }
  return 'local';
}

// 获取不同环境下的 api 域名
export function getAPIHost() {
  const environment = getEnv();
  let apiHost = '';

  switch (environment) {
    case 'production':
      apiHost = '';
      break;
    case 'development':
      apiHost = '//qaz.qiushibaike.com';
      break;
    case 'local':
      apiHost = '//qaz.qiushibaike.com';
      break;
    default:
      break;
  }
  return apiHost;
}

// 获取 url 里的 query
export function getQuery(name) {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
  const r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
}

/**
 * format date -> 09-10 12:00(MM-DD hh:mm)
 * @param {String} date
 */
export function formatDate(value) {
  let fmt = 'MM-dd hh:mm';
  let tmp = {};
  if (value instanceof Date) {
    tmp = {
      'y+': this.getFullYear(),
      'M+': this.getMonth() + 1,
      'h+': this.getHours(),
      'm+': this.getMinutes(),
      's+': this.getSeconds(),
      'q+': Math.floor((this.getMonth() + 3) / 3),
      'S+': this.getMilliseconds(),
    };
  } else {
    throw Error('value is not a Date Object');
  }
  Object.keys(tmp).forEach((k) => {
    if (new RegExp(`(${k})`).test(fmt)) {
      if (k === 'y+') {
        fmt = fmt.replace(RegExp.$1, (`${tmp[k]}`).substr(4 - RegExp.$1.length));
      } else if (k === 'S+') {
        let lens = RegExp.$1.length;
        lens = lens === 1 ? 3 : lens;
        fmt = fmt.replace(RegExp.$1, (`00${tmp[k]}`).substr((`${tmp[k]}`).length - 1, lens));
      } else {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (tmp[k]) : ((`00${tmp[k]}`).substr((`${tmp[k]}`).length)));
      }
    }
  });
  return fmt;
}
