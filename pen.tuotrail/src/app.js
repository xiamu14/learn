import MarkdownIt from 'markdown-it';
import emoji from 'markdown-it-emoji';
import mk from 'markdown-it-katex';
import mc from 'markdown-it-checkbox';
import mta from "markdown-it-toc-and-anchor";
import store from "store";
let md = new MarkdownIt();

md.use(emoji);
md.use(mk);
md.use(mc);
md.use(mta);

const penBox = document.getElementById('penBox');
const previewBox = document.getElementById('previewBox');
const btnPreview = document.getElementById('btn-preview');
const btnSave = document.getElementById('btn-save');
// stores
let stores = {

}

// actions --> action depend on store
let actions = {
    render: text => {
        let html = md.render(text);
        console.log('编译后的 md:', html)
        previewBox.innerHTML = html;
    }
}

function initZoom() {
    // step1 get localStorage
    let text = store.get('text').content
    if(text){
        penBox.innerText = text
        actions.render(text)
    }
}

function preview(){
    let text = penBox.innerText;
    console.log('编写的内容:', text.length)
    actions.render(text)
    $('pre code').each(function(i, e) { hljs.highlightBlock(e) });
}

function handle() {
    // btn-preview
    btnPreview.addEventListener('click', () => {
        preview()
    })
    // btn-save
    btnSave.addEventListener('click', ()=>{
        let text = penBox.innerText;
        store.set('text', {'content': text}) // 实践时要注意阈值
    })

    // 编写区失去焦点时刷新预览区
    // penBox.addEventListener('blur', ()=>{
    //     preview()
    // })

    // 每输入一个字符刷新预览区
    // penBox.addEventListener('input', ()=>{
    //     preview()
    // })

    // 检测是换行符的时候刷新预览区，删除没法处理
    penBox.addEventListener('keydown',(event)=>{
        if(event.keyCode === 13 && !event.shiftKey) {
            preview()
        }
    })
}

function test() {
    // console.log(store)
    // store.set('user', { name:'Marcus' })
    // store.each(function(value, key) {
    //     console.log(key, '==', value)
    // })
}

function init() {
    // 事件绑定
    handle()
    // 初始化编辑、预览区
    initZoom()
    // 测试
    test()
}

init()
