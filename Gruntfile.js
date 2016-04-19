module.exports = function(grunt){
	pkg : grunt.file.readJSON("package.json");
	var path = './d5/';
	grunt.initConfig({	 
		jade: {
			debug: {
			    options: {
				    data: {
				       debug: true,
				       timestamp: "<%= new Date().getTime() %>"
				    },
				    pretty: true,
			    },
			    files: [{
			    	expand: true,
			    	cwd: path,
			    	src: "*.jade",
			    	dest: path,
			    	ext: ".html"
			    }]
			}
		},

	  	watch: {
	  		scripts0: {
	  			files: ['./**/*.html','./**/*.js'],
	  			tasks: '',
	  			options: {
	  				spawn: false,
	  				event: 'all'
	  			}
	  		},
	  		scripts1: {
	  			files: ["./**/*.jade"],
	  			tasks: 'jadetohtml',
	  			options: {
	  				spawn: false,
	  				event: 'all'
	  			}
	  		}
	  	},

	  	browserSync: {
	  		bsFiles: {
	  			src: './**/*.html',
	  		},
	  		options: {
	  			watchTask: true,
	  			// host: "10.2.200.62",
	  			server: {
	  				baseDir: './'
	  			}
	  		}
	  	}
	});

	grunt.loadNpmTasks("grunt-contrib-jade");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-browser-sync");

	grunt.registerTask('jadetohtml',["jade"]);
	grunt.registerTask('browser',['jadetohtml','browserSync','watch']);
	grunt.registerTask('default');
	
};