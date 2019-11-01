type GetList = "getList";
type GetPost = "getPost";
type Result<T> = T extends GetList
  ? string
  : T extends GetPost
  ? void
  : undefined;

function test<T>(param: T, path: Result<T>) {
  console.log("");
  if (typeof param === "string") {
    return param;
  } else {
    return 0;
  }
}

test<GetPost>("getPost", null);

function foo(x: number): Array<number> {
  return [x];
}
type fn = ReturnType<typeof foo>;
