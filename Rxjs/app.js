import Rx from 'rxjs/Rx'

let arr = ['Jerry', 'Anna', 2016,2017,'30 days']
let pro = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('Hello RxJS!');
    }, 3000)
})
let source = Rx.Observable.from(pro)

source.subscribe({
    next: value => {
        console.log(value)
    },
    complete: ()=>{
        console.log('complete')
    },
    error: error=>{
        console.log(error)
    }
})
