type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
type XOR<T, U> = (Without<T, U> & U) | (Without<U, T> & T)

type a = {w: string};
type b = {h: string};

type aXorB = XOR<a, b>;

type aB = Without<a, b> & b;
type bA = Without<b, a> & a;

type aob = aB | bA;

const aBB: aB = {
  w: undefined,
  h: ""
}

const baa : bA = {
  h: undefined,
  w: ""
}

const ab: aob = {
  w: undefined,
  h: "",
}

interface Person {ethnicity: string;}
interface Pet {breed: string;}
function getOrigin(value: XOR<Person, Pet>) { /* ... */}

getOrigin({ethnicity: 'abc', breed: undefined}); //OK
getOrigin({breed: 'def', ethnicity: undefined}); //OK


type aa = {w: string, h?:never };
type bb = {h: string, w?: never};

type aabb = aa | bb;

const aABB : aabb = {
  h: "",
}

type j = string | number;

const J: j = 12;
