var salesOffices = {}

salesOffices.clientList = []

salesOffices.listen = function(fn){
    this.clientList.push(fn)
}

salesOffices.trigger = function(){
    for(var i=0, fn; fn = this.clientList[i++];{
        fn.apply(this, arguments)
    }
}

// test
salesOffices.listen(function(price, squareMeter) {
    console.log('价格='+ price);
    console.log('squareMeter='+squareMeter);
})

salesOffices.trigger(200000, 80)