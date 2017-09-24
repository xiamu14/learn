// 自己练习的开始

import Rx from "rxjs/Rx";

const observable = Rx.Observable.interval(1000).take(3);

observable.subscribe({
  next: v => {
    console.log("v", v);
  },
  error: err => {
    console.log("err", err);
  },
  complete: () => {
    console.log("complete!");
  }
});
