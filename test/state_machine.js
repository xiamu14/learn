// var StateMachine = require('javascript-state-machine');

// var fsm = new StateMachine({
//   init: 'solid',
//   transitions: [
//     { name: 'melt', from: 'solid', to: 'liquid' },
//     { name: 'freeze', from: 'liquid', to: 'solid' },
//     { name: 'vaporize', from: 'liquid', to: 'gas' },
//     { name: 'condense', from: 'gas', to: 'liquid' }
//   ],
//   methods: {
//     onMelt: function () { console.log('I melted') },
//     onFreeze: function () { console.log('I froze') },
//     onVaporize: function () { console.log('I vaporized') },
//     onCondense: function () { console.log('I condensed') }
//   }
// });
// fsm.melt();
// console.log(fsm.state);
// fsm.freeze();
// console.log(fsm.state);

// 发送请求按钮的锁定和未锁定状态机

class LockMachine {
  constructor (initState) {
    if (typeof initState === 'boolean'){
      this.currentState = initState;
    } else {
      throw new Error('typeError: invalid val');
    }
  }
  lock() {
    this.currentState = true;
  }
  unlock() {
    this.currentState = false;
  }
}

var lock = new LockMachine(false);

lock.unlock();
console.log(lock.currentState);

