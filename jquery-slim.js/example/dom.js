import * as jQSlim from '../dist/jquery-slim.js';

let jQ = new jQSlim.Init({
    dom: jQSlim.dom,
    css: jQSlim.css,
    event: jQSlim.event,
    touch: jQSlim.touch,
    ajax: jQSlim.ajax,
});

// example

jQ('#id').css({});