import { interval } from 'rxjs';

// 每1秒发出数字序列中的值
const source = interval(1000);
// 数字: 0,1,2,3,4,5....
const subscribe = source.subscribe(val => console.log(val));
