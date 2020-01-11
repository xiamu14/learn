// define function

let add1 = arg => arg +. 1.;

let add2 = arg => arg + 1;

let stringAppend = (x, y) => x ++ y;

// call function

let square = x => x * x;

let half = x => x /2;

let add = (x, y) => x + y;

Js.log("(5^2)/2=" ++ string_of_int(half(square(5))))

let () = {
  let squared = square(5);
  let halved = half(squared);
  let toString = string_of_int(halved);
  Js.log("(5^2)/2 = " ++ toString);
};
