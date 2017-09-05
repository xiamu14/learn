import MarkdownIt from 'markdown-it';
let md = new MarkdownIt();

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
