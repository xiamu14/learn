import MarkdownIt from 'markdown-it';
import emoji from 'markdown-it-emoji';
import mk from 'markdown-it-katex';
import mc from 'markdown-it-checkbox';
import mta from "markdown-it-toc-and-anchor"
let md = new MarkdownIt();

md.use(emoji);
md.use(mk);
md.use(mc);
md.use(mta);

let penBox = document.getElementById('penBox');
let previewBox = document.getElementById('previewBox');
let btnPreview = document.getElementById('btn-preview');

btnPreview.addEventListener('click', () => {
    let html = penBox.innerText;
    console.log('编写的内容:',html.length)
    let result = md.render(html);
    console.log('编译后的 md:', result)
    previewBox.innerHTML = result;
    $('pre code').each(function(i, e) {hljs.highlightBlock(e)});
})
