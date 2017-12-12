const hello = () => {
    return "Hello World";
};
// main
const main = document.getElementById("js-main");
if (main) {
    main.textContent = hello();
}

// 布尔值
let isDone: boolean = true;
// 数字
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

//字符串
let myname: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my myname is ${myname}.

I'll be ${ age + 1} years old next month.`;

console.log(sentence);
