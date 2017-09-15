import Rx from 'rxjs/Rx'

class Producer{
    constructor() {
        this.listener = [];
    }
    addListener(listener) {
        if(typeof listener === 'function') {
            this.listener.push(listener)
        }else{
            throw new Error('listener must to be a function')
        }
    }
    removeListener(listener) {
        this.listener.splice(this.listener.indexOf(listener), 1)
    }
    notify(message) {
        this.listener.forEach(listener => {
            listener(message)
        })
    }
}

var egghead = new Producer()

var source = Rx.Observable.fromEventPattern(
        (handler) => egghead.addListener(handler),
        (handler) => egghead.removeListener(handler)
    );

source.subscribe({
    next: function(value) {
        console.log(value)
    },
    complete: function(value) {
        console.log('complete')
    },
    error: function(error) {
        console.log(error)
    }
})

egghead.notify('Hello! Can you hear me?')