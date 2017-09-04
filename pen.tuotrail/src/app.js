import MarkdownIt from 'markdown-it';
let md = new MarkdownIt();
let result = md.render('# markdown-it rulezz!');
console.log(result);
