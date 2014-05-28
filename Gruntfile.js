/*global module:false*/
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Metadata.
        requirejs: {
            compile: {
                options: {
                    appDir: "./src/",
                    baseUrl: "./js",
                    mainConfigFile: './src/js/main1.js',
                    dir: './dist',
                    fileExclusionRegExp: /^templates/,
                    modules: [
                        {
                            name: 'main1',
                            include: [
                                'test'
                            ]
                        }
                    ]

                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.registerTask('default', ['requirejs:compile']);


};
