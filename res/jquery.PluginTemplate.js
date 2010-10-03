(function( $ ) {

	var methods = {
		init : function( options ) {
			var settings = {
				// Replace with you own settings
        // 'location'         : 'top',
        // 'background-color' : 'blue'
      };

      // If options exist, lets merge them
			// with our default settings
			if ( options ) {
				$.extend( settings, options );
			}

			return this.each(function() {
				var $this = $(this);

				// Read / Write Data
				// $this.data("mykey", value)
				// temp = $this.data("mykey")

	    });
		},

		destroy : function() {
			// pseudo destructor. Needs to be called manually.
			// Add here things like unbind and removeData calls
		}

		// Add here your functions
		// myFunc1 : function( ) { },
		// myFunc2 : function( ) { }
	};

	$.fn.#{plugin_name} = function( method ) {
		// Method calling logic
		if ( methods[method] ) {
			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
		}
  };
})( jQuery );