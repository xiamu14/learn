import Rx from 'rxjs/Rx'

var source = Rx.Observable.interval(1000);

source.subscribe({
    next: function(value) {
        console.log(value)
    },
    complete: function(){
        console.log('complete!')
    },
    error: function(error){
        console.log('Throw Error:', error)
    }
});