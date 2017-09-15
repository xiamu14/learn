import Rx from 'rxjs/Rx'

var source = Rx.Observable.create(function(observe){
    var i = 0;
    setInterval(()=>{
        observe.next(i++)
    },1000)
});

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