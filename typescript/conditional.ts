interface T0 {
  name: string;
  age: string;
}

interface T1 {
  name: string;
  student: number;
}

type T2 = T0 | T1;

// NOTE: question？ Exclude 是否只对联合类型 / 交叉类型有用，接口无效
type T3 = Exclude<T2, T0>;
type T4 = Exclude<T0, T2>;

type T5 = T0 & T1; // T6
const t5: T5 = {
  name: "",
  age: "",
  student: 0
};

function testFn<T>(data: T): T {
  return data;
}

testFn<{}>({a: 12}).a;
