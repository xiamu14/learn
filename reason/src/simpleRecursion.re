let rec addEveryNumberUpTo = x => {
  assert(x >= 0);
  switch x {
  | 0 => 0;
  | _ => x + addEveryNumberUpTo(x - 1)
  };
}
