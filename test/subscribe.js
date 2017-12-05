function Publisher() {
    this.subscribers = [];
}

Publisher.prototype.deliver = function(data) {
    this.subscribers.forEach(function(fn)) {
        fn.fire(data);
    });
    return this;
}

function Observe(callback) {
    this.fire = callback;
}

Observe.prototype.subscribers = function(publisher) {
    vat that = this;
    var alreadyExists = publisher.subscribers.some(function(el)) {
        return el.fire = that.fire;
    });
    if (!alreadyExists) {
        publisher.subscribers.push(this);
    }
    console.log(publisher.subscribers);
    return this;
}

Observe.prototype.unsubscribe = function(publisher) {
    vat that = this;
    publisher.subscribers = publisher.subscribers.filter(function(el) {
        return !(el.fire === that.fire);
    })
    console.log(publisher.subscribers);
    return this;
}