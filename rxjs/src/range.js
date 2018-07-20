import { range } from 'rxjs';

const source$ = range(1, 10);

source$.subscribe(
  console.log,
  null,
  () => console.log('complete'),
);
