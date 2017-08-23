var version = '0.0.1',
    jQuery = function(selector, text){
        return new jQuery.fn.init(selector, text);
    }

jQuery.fn = jQuery.prototype = {
    jquery: version,
    constructor: jQuery,
    setBackground: function(){
        this[0].style.background = 'yellow';
        return this
    },
    setColor: function(){
        this[0].style.color = 'blue';
        return this
    }
};

export default jQuery;