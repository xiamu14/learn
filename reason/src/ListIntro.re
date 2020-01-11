let rec length = lst =>
switch lst {
| [] => 0
| [_, ...tl] => 1 + length(tl)
};
