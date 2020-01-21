/**
 * 定义一种底层数据类型
 *
 */

const fruits = [
  {
    iid: 0,
    desc: "苹果",
    endValue: 1
  },
  {
    iid: 1,
    desc: "橘子",
    endValue: 2
  },
  {
    iid: 2,
    desc: "桃花",
    endValue: 3
  }
];

/**
 * 复杂枚举对象
 */

type EnumType = {
  [key: string]: any;
}[];

class Enum {
  data: EnumType;
  /**
   * 定义具有多值的枚举属性类
   * @param data
   */
  constructor(data: EnumType) {
    this.data = data;
  }

  /**
   * 获取数组中此键名的值组成的数组
   * @param key
   */
  getValArr(key: string) {
    const result = this.data.map(item => item[key]);
    return result;
  }
  /**
   * 根据特定的 key value 获取到数组子项
   * @param obj key - val
   */
  getItemByObj(obj: { key: string; val: any }) {
    let result = {};
    this.data.forEach(item => {
      if (item[obj.key] === obj.val) {
        result = item;
        return true;
      }
    });
    return result;
  }
}

const fruitsEnum = new Enum(fruits);

console.log(fruitsEnum.getValArr("iid"));

console.log(fruitsEnum.getItemByObj({ key: "iid", val: 1 }));

type Te = {
  [key in ("a" | "b")]: {
    test?: string;
  };
};

type Ae = Record<"a" | "b", {test?: string}>
