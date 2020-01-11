let whatNumberAmIThinking = (myNumber: option(int)) =>
  switch myNumber {
  | None => "I'm not thinking of any number"
  | Some(number) => "My number is:" ++ string_of_int(number)
  };

Js.log(whatNumberAmIThinking(Some(12)));
