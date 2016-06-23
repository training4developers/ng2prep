(function(global) {

  var map = {
		'app': 'js',
		//'ts': 'js'
	};

  var packages = {
    'app': {
			main: 'main.js',
			defaultExtension: 'js'
		},
		// 'ts': {
		// 	main: 'demo.js',
		// 	defaultExtension: 'js'
		// }
  };

  var config = {
    map: map,
    packages: packages
  }

  System.config(config);

})(this);
