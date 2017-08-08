(function(){ 
    let version = '0.0.1'
    let jQuery = (selector)=>{
        console.log(document.querySelector(selector))
    }

    jQuery.prototype = {
        version: version,
        constructor: jQuery
    }

    window.jQuery = window.$ = (selector) => {
        return new jQuery(selector)
    }
})()