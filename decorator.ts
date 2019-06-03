function decorateArmour(target: Object, key: string, descriptor: any) {
  const method = descriptor.value;
  let moreDef = 100;
  let ret;
  descriptor.value = (...args:any[]) => {
    args[0] += moreDef;
    ret = method.apply(target, args);
    return ret;
  };
  return descriptor;
}

class Man {
  static def: number
  static atk: number
  static hp: number
  constructor(def = 2, atk = 3, hp = 3) {
    this.init(def, atk, hp);
  }

  @decorateArmour
  init(def:number, atk: number, hp:number) {
    Man.def = def; // 防御值
    Man.atk = atk; // 攻击力
    Man.hp = hp; // 血量
  }
  toString() {
    return `防御力:${Man.def},攻击力:${Man.atk},血量:${Man.hp}`;
  }
}

var tony = new Man();

console.log(`当前状态 ===> ${tony}`);
// 输出：当前状态 ===> 防御力:102,攻击力:3,血量:3
