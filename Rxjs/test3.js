import Rx from 'rxjs/Rx'

let source = Rx.Observable.interval(200).take(6)
let newest = Rx.Observable.interval(100).take(3)
let result = source.zip(newest, (x,y)=> x+y)

result.subscribe({
    next: (value)=>{console.log(value)},
    complete: ()=>{console.log('complete!')},
    error: (error)=>{console.log(error)},
})

