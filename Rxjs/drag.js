// var dragDom = document.getElementById('drag')
// var body = document.body

// var mouseDown = Rx.Observable.fromEvent(dragDom, 'mousedown')
// var mouseUp = Rx.Observable.fromEvent(body, 'mouseup')
// var mouseMove = Rx.Observable.fromEvent(body, 'mousemove')

// var source = mouseDown.map(event => mouseMove.takeUntil(mouseUp)).concatAll()
// // console.log(source)
// source.map(m => {
//         return {
//             x: m.clientX,
//             y: m.clientY
//         }
//     })
//     .subscribe(pos => {
//         dragDom.style.left = pos.x + 'px'
//         dragDom.style.top = pos.y + 'px'
//         console.log(pos)
//     })

const dragDOM = document.getElementById('drag');
const body = document.body;

const mouseDown = Rx.Observable.fromEvent(dragDOM, 'mousedown');
const mouseUp = Rx.Observable.fromEvent(body, 'mouseup');
const mouseMove = Rx.Observable.fromEvent(body, 'mousemove');

mouseDown
    .map(event => mouseMove.takeUntil(mouseUp))
    .concatAll()
    .map(event => ({ x: event.clientX, y: event.clientY }))
    .subscribe(pos => {
            dragDOM.style.left = pos.x + 'px';
            dragDOM.style.top = pos.y + 'px';
        },
        (error) => {
            console.log(error)
        })
