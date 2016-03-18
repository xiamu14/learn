module.exports = function(grunt){
	// var sassStyle = 'expanded';

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				separator: ";",
			},
			dist: {
				src: ['src/intro.js','src/project.js'],
				dest: 'dist/built.js',
			},
		},
	});
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.registerTask('concatjs',['concat']);
	grunt.registerTask('default');
	
};