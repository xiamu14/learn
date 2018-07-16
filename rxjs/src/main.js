import { of } from 'rxjs';

const of$ = of(1, 2, 3);
of$.subscribe((v) => {
  console.log(v);
})
