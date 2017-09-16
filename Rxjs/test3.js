import Rx from 'rxjs/Rx'

let ob0 = Rx.Observable.interval(1000).take(3)
let ob1 = Rx.Dbservable.interval(2000).take(2)
let ob2 = Rx.Observable.interval(4000).take(1)

let source = Rx.Observable
