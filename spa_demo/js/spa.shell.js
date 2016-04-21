/* 
 * spa.shell.js
 * shell module for spa
 */

/* jshint
	instant of eshint
*/

/* global $, spa */

spa.shell = (function() {
    // ------ BEGIN MODULE　SCOPE VARIABLES ------
    var configMap = {
        main_html: String() +
	        '<div class="spa-shell-head">' +
	        '<div class="spa-shell-head-logo"></div>' +
	        '<div class="spa-shell-head-acct"></div>' +
	        '<div class="spa-shell-head-search"></div>' +
	        '</div>' +
	        '<div class="spa-shell-main">' +
	        '<div class="spa-shell-main-nav"></div>' +
	        '<div class="spa-shell-main-content"></div>' +
	        '</div>' +
	        '<div class="spa-shell-foot"></div>' +
	        '<div class="spa-shell-chat"></div>' +
	        '<div class="spa-shell-modal"></div>',
	    chat_extend_time: 1000,
	    chat_retract_time: 300,
	    chat_extend_height: 450,
	    chat_retract_height: 15,
	    chat_extended_title: 'Click to retract',
	    chat_retracted_title: 'Click to extend'
    },
    stateMap = {
    	$container : null,
    	is_chat_retracted: true
    },
    jqueryMap = {},

    setJqueryMap, toggleChat, initModule;
    // ------ END MODULE SCOPE CARIABLES ------

    // ------ BEGIN UTILITY METHODS ------
    // ------ END UTILITY METHODS ------

    // ------ BEGIN DOM METHODS ------
    // Begin DOM method /setJqueryMap/
    setJqueryMap = function(){
    	var $container = stateMap.$container;
    	jqueryMap = {
    		$container: $container,
    		$chat: $container.find('.spa-shell-chat')
    	};
    };
    //  END DOM method /setJqueryMap/

    // BEGIN DOM method /toggleChat/
    // Purpose ： Extends or retracts chat slider
    // Arguments:
    // 	* do_extend - if true,extends slider; if false,extends retracts
    // 	* callback - optional function to excute at end of animation
    // setting:
    // 	* chat_extend_time, chat_retract_time
    // 	* chat_extend_height, chat_retract_height
    // returns:
    //  * true - slider animation activated
    //  * false - slider animation not activated
    // state : sets stateMap.is_chat_retracted
    //  * true - slider is retracted
    //  * false - slider is extended
    toggleChat = function(do_extend, callback){
    	var px_chat_ht = jqueryMap.$chat.height(),
    		is_open = px_chat_ht === configMap.chat_extend_height,
    		is_closed = px_chat_ht === configMap.chat_retract_height,
    		is_sliding = !is_open && !is_closed;

    	// avoid race condition
    	if(is_sliding){
    		return false;
    	}
    	// Begin extend chat slider
    	if(do_extend){
    		jqueryMap.$chat.animate(
	    		{height: configMap.chat_extend_height},
	    		configMap.chat_extend_time,
	    		function(){
	    			jqueryMap.$chat.attr(
	    				'title', configMap.chat_extended_title
	    			);
	    			stateMap.is_chat_retracted = false;
	    			if(callback){
	    				callback(jqueryMap.$chat);
	    			}
	    		}
    		);
    		return true;
    	}
    	// End extend chat slider

    	// Begin retract chat slider
    	jqueryMap.$chat.animate(
    		{height: configMap.chat_retract_height},
    		configMap.chat_retract_time,
    		function(){
    			jqueryMap.$chat.attr(
    				'title', configMap.chat_retracted_title
    			);
    			stateMap.is_chat_retracted = true;
    			if (callback) {   				
    				callback(jqueryMap.$chat);
    			}
    		}
		);
    	return true;
    	// End retract chat slider
    };
    // End DOM method /toggleChat/
    // ------ END DOM METHODS ------

    // ------ BRGIN EVENT HANDLERS ------
    onClickChat = function(event){
    	if(toggleChat(stateMap.is_chat_retracted)){
    		$.uriAnchor.setAnchor({
    			chat: (stateMap.is_chat_retracted?'open':'closed')
    		});
    	};
    	return false;
    };
    // ------ EMD EVENT HANDLERS ------

    // ------ BEGIN PUBLIC METHODS ------
    // ------ Begin Public method /initModule/
    initModule = function( $container ){
    	// load HTML and map jQuery collections
    	stateMap.$container = $container;
    	$container.html( configMap.main_html );
    	setJqueryMap();

    	// initialize chat slider and bind click handler
    	// stateMap.is_chat_retracted = true;
    	jqueryMap.$chat.attr('title', configMap.chat_retracted_title).click(onClickChat);
    	
    };
    return {initModule: initModule};

    // ------ END PUBLIC METHODS ------
})();
