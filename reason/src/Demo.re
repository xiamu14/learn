let rec last = list =>
  switch (list) {
  | [] => None
  | [x] => Some(x)
  | [_, ...xs] => last(xs)
  };

Js.log(last(["12"]));
