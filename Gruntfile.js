module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                strpBanners:true,
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js', // pkg.name对应package.json中的name
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        watch: {
            build: {
                files: ['src/*.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['uglify', 'watch']);
}
