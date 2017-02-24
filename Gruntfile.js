module.exports = function(grunt) {
	
	grunt.loadNpmTasks('grunt-injector');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.initConfig({
		watch: {
			javascript: {
				files: ['src/main/resources/static/app/*.js', 'src/main/resources/static/app/views/**/*.js'],
				tasks: ['injector:javascript'],
			},
			css: {
				files: ['src/main/resources/static/app/views/**/*.css'],
				tasks: ['injector:css'],
			}

		},
		injector: {
			javascript:{
				options:{
					starttag: '<!-- injector:js -->',
					endtag: '<!-- endinjector -->',
					ignorePath: 'src/main/resources/static',
				},
				files: {
					'src/main/resources/static/index.html': [
						'src/main/resources/static/app/*.js',
						'src/main/resources/static/app/views/**/*.js'
					],
				},
			},
			
			css: {
				options:{
					starttag: '<!-- injector:css -->',
					endtag: '<!-- endinjector -->',
					ignorePath: 'src/main/resources/static',
				},
				files:{
					'src/main/resources/static/index.html': [
						'src/main/resources/static/app/views/**/*.css'
					],
				},
			},
			
		},
	})
		
	grunt.registerTask('default', ['watch']);
	
}