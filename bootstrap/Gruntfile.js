module.exports = function(grunt){

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		less: {
			development: {
				options: {
					compress: false,
	                yuicompress: false,
	                barnner: "测试一下啊！"
				},
				files: {
					"css/dev/main.css": ["css/less/main.less","css/less/common.less"]
					// "css/dev/common.css": "css/less/common.less"
				}
			},
			production: {
				options: {
					compress: false,
	                yuicompress: false
				},
				files: {
					"css/release/main.css": "css/less/main.less",
					"css/release/common.css": "css/less/common.less"
				}
			}
		},

		cssmin: {
		  	options: {
		  		report: "min",
		    	shorthandCompacting: false,
		    	roundingPrecision: -1
		  	},
		  	target: {
		   		files: {
		   			'css/release/main.min.css': ['css/dev/main.css', 'css/dev/common.css']
		    }
		  }
		},

		concat: {
			options: {
				separator: "",
			},
			dist: {
				src: ['mobile/js/main.js','mobile/js/common.js'],
				dest: 'mobile/js/main1.js'
			}
		},

		uglify: {
      		compressjs: {
        		files: {
          			'mobile/js/main1.min.js': ['mobile/js/main1.js'],
        		}
      		}
    	},

    	jshint: {
    		all: ['mobile/js/main1.js']
    	},

    	watch: {
    		scripts: {
    			files: ['template/jade/*.jade',"css/less/*.less"],
				tasks: ["devless"],
				options: {
					spawn: false
				}
    		}
    	},

	    browserSync: {
		    bsFiles: {
		        src : ['index.html','template/dev/*.html','css/dev/*.css']
		    },
		    options: {
		    	watchTask: true,
		        server: {
		            baseDir: "./"
		        }
		    }
		}
	});

	
	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-uglify");	
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-newer");
	grunt.loadNpmTasks("grunt-browser-sync");

    grunt.registerTask("devless",["newer:less:development"]);
    grunt.registerTask("release",["less:production","cssmin:target"]);
	grunt.registerTask("browser",['devless','browserSync','watch']);
	grunt.registerTask('default');
	
};


