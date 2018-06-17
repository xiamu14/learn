// ===========================
// interface implements
// ===========================
interface Person {
  name;
  age;
  say();
}

class Man implements Person {
  name;
  age;
  constructor(name:string, age:number) {
    this.name = name;
    this.age = age;
  }
  say() {
    console.log(`I'm ${this.name}`);
  }
}

const batman = new Man('batman', 36);

batman.say();
