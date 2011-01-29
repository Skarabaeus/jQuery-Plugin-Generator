// for more information about developing widgets with jQuery UI
// checkout http://jqueryui.com/docs/Developer_Guide

(function(){
	var #{plugin_name} = function(){

		var _myPrivateFunction = function() {
		};

		// put all private functions in here
		// that improves minification. See http://blog.project-sierra.de/archives/1622

		return {
			// default options
			options: {

			},

			// required function. Automatically called when widget is created
			_create: function() {
				// you can access the currently select DOM element through
				// this.element
			},

			destroy: function() {

			}
		};
	}();
	// register widget
	$.widget("ui.#{plugin_name}", #{plugin_name});
})();
