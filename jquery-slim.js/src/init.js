var init = (jQuery){
    jQuery.fn.init = (selector , context, root) {
        if(!selector) {
            return this;
        } else {
            var elem = document.querySelector(selector);
            if(elem){
                this[0] = elem;
                this.length = 1;
            }
            return this;
        }
    };
    jQuery.fn.init.prototype = jQuery.fn;
}

export default init;