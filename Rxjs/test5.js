// 实践第二章

import Rx from "rxjs/Rx";

const observable = Rx.Observable.interval(1000).take(5);

const subject = new Rx.Subject();

const observerA = {
  next: v => { console.log("A:", v); },
  error: err => { console.log("error:", err); },
  complete: () => { console.log("complete"); }
};

const observerB = {
  next: v => { console.log("B:", v); },
  error: err => { console.log("error:", err); },
  complete: () => { console.log("complete"); }
};

subject.subscribe(observerA);

observable.subscribe(subject);

setTimeout(() => {
  subject.subscribe(observerB);
}, 2000);
