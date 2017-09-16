import Rx from 'rxjs/Rx'

let click  = Rx.Observable.fromEvent(document.body, 'click')
let source = Rx.Observable.interval(500).take(3)

source.subscribe({
    next: function(value){
        console.log(value)
    },
    error: function(err){
        console.log(err)
    },
    complete: function(){
        console.log('complete')
    }
})

