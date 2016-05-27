/**
 * Gruntfile
 *
 * This Node script is executed when you run `grunt` or `sails lift`.
 * It's purpose is to load the Grunt tasks in your project's `tasks`
 * folder, and allow you to add and remove tasks as you see fit.
 * For more information on how this works, check out the `README.md`
 * file that was generated in your `tasks` folder.
 *
 * WARNING:
 * Unless you know what you're doing, you shouldn't change this file.
 * Check out the `tasks` directory instead.
 */

module.exports = function (grunt) {
	grunt.initConfig({
		browserify: {
			dist: {
				files: {
					"build/test.js": ["src/test.js"]
				}
			}
		}
	});

	grunt.loadNpmTasks("grunt-browserify");

};
