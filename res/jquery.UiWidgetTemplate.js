(function(){
	var #{plugin_name} = function(){

		/**
		* Private functions
		* functions starting with a _ are pseudo private.
		* They cannot be access from the outside.
		*/
		_myPrivateFunction: function() {

		},

		// required function. Automatically called when widget is created
		_create: function() {
			// you can access the currently select DOM element through
			// this.element
		},

		// Once the element is created, all other calls to the widget
		// name where the first parameter is not a string will call the _init()
		// method; if options are passed, the .option() method will be called
		// before the _init() method.
		_init: function() {

		},

		options: {
		},


		destroy: function() {

		}
		};
	}();
	// register widget
	$.widget("ui.#{plugin_name}", #{plugin_name});
})();
