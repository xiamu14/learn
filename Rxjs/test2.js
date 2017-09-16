import Rx from 'rxjs/Rx'

var source = Rx.Observable.timer(1000, 3000);

// 取得 subscribtion
var subscription = source.subscribe({
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

setTimeout(()=>{
    subscription.unsubscribe() // 停止订阅
}