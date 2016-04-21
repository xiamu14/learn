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
	  		scripts: {
	  			files: ["./**/*.jade"],
	  			tasks: 'jadetohtml',
	  			options: {
	  				spawn: false,
	  				// event: 'all'
	  			}
	  		}
	  	},

	  	browserSync: {
	  		bsFiles: {
	  			src: ['./**/*.html','./**/*.js','./**/*.css'],
	  		},
	  		options: {
	  			watchTask: true,
	  			server: {
	  				baseDir: './'
	  			}
	  		}
	  	}
	});

	grunt.loadNpmTasks("grunt-contrib-jade");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-browser-sync");
	grunt.loadNpmTasks("grunt-newer");
	grunt.loadNpmTasks("grunt-eslint");

	grunt.registerTask('jadetohtml',["newer:jade"]);
	grunt.registerTask('browser',['browserSync','watch']);
	grunt.registerTask('default');
	
};