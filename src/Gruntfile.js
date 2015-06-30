/* jshint node:true */
module.exports = function(grunt) {
    'use strict';

    require('load-grunt-tasks')(grunt);

    var jmConfig = {

        // gets the package vars
        pkg: grunt.file.readJSON('package.json'),

        // setting folder templates
        dirs: {
            site: '../_site',
            content: '../content',
            css: '../assets/css',
            js: '../assets/js',
            images: '../assets/img',
            fonts: '../assets/fonts',
            sass: '../_sass',
            tmp: 'tmp'
        },

        // javascript linting with jshint
        jshint: {
            options: {
                jshintrc: '<%= dirs.js %>/.jshintrc'
            },
            all: [
                'Gruntfile.js',
                '<%= dirs.js %>/main.js'
            ]
        },

        // uglify to concat and minify
        uglify: {
            bootstrap: {
                files: {
                    '<%= dirs.js %>/bootstrap.min.js': [
                        '<%= dirs.js %>/bootstrap/transition.js',
                        '<%= dirs.js %>/bootstrap/alert.js',
                        '<%= dirs.js %>/bootstrap/button.js',
                        '<%= dirs.js %>/bootstrap/carousel.js',
                        '<%= dirs.js %>/bootstrap/collapse.js',
                        '<%= dirs.js %>/bootstrap/dropdown.js',
                        '<%= dirs.js %>/bootstrap/modal.js',
                        '<%= dirs.js %>/bootstrap/tooltip.js',
                        '<%= dirs.js %>/bootstrap/popover.js',
                        '<%= dirs.js %>/bootstrap/scrollspy.js',
                        '<%= dirs.js %>/bootstrap/tab.js',
                        '<%= dirs.js %>/bootstrap/affix.js'
                    ]
                }
            },
            dist: {
                files: {
                    '<%= dirs.js %>/main.min.js': [
                        '<%= dirs.js %>/jquery.min.js',
                        '<%= dirs.js %>/bootstrap.min.js',
                        '<%= dirs.js %>/jquery.fitvids.js',
                        '<%= dirs.js %>/main.js' // Custom JavaScript
                    ]
                }
            }
        },

        // watch for changes and trigger sass, jshint, uglify and livereload browser
        watch: {
            js: {
                files: [
                    '<%= jshint.all %>'
                ],
                tasks: ['jshint', 'uglify']
            },
            livereload: {
                options: {
                    livereload: true
                },
                files: [
                    '<%= dirs.site %>/**/*.{css,js,html}'
                ]
            },
            options: {
                spawn: false
            }
        },

        // image optimization
        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 7,
                    progressive: true
                },
                files: [{
                    expand: true,
                    filter: 'isFile',
                    cwd: '<%= dirs.images %>/',
                    src: '**/*.{png,jpg,gif}',
                    dest: '<%= dirs.images %>/'
                }]
            },
            content: {
                options: {
                    optimizationLevel: 7,
                    progressive: true
                },
                files: [{
                    expand: true,
                    filter: 'isFile',
                    cwd: '<%= dirs.content %>/',
                    src: '**/*.{png,jpg,gif}',
                    dest: '<%= dirs.content %>/'
                }]
            }
        },

        // zip the theme
        zip: {
            dist: {
                cwd: '../',
                src: [
                    '../**',
                    '!../src/**',
                    '!../**.md',
                    '!<%= dirs.sass %>/**',
                    '!<%= dirs.js %>/bootstrap/**',
                    '!<%= dirs.js %>/libs/**',
                    '!../**.zip',
                    '<%= dirs.js %>/main.min.js'
                ],
                dest: '../<%= pkg.name %>.zip'
            }
        },

        // downloads dependencies
        curl: {
            bootstrap_sass: {
                src: 'https://github.com/twbs/bootstrap-sass/archive/master.zip',
                dest: '<%= dirs.tmp %>/bootstrap-sass.zip'
            }
        },

        // unzip files
        unzip: {
            bootstrap_scss: {
                src: '<%= dirs.tmp %>/bootstrap-sass.zip',
                dest: '<%= dirs.tmp %>/'
            }
        },

        // renames and moves directories and files
        rename: {
            bootstrap_scss: {
                src: '<%= dirs.tmp %>/bootstrap-sass-master/assets/stylesheets',
                dest: '<%= dirs.sass %>/bootstrap'
            },
            bootstrap_js: {
                src: '<%= dirs.tmp %>/bootstrap-sass-master/assets/javascripts/bootstrap',
                dest: '<%= dirs.js %>/bootstrap'
            },
            bootstrap_fonts: {
                src: '<%= dirs.tmp %>/bootstrap-sass-master/assets/fonts/bootstrap',
                dest: '<%= dirs.fonts %>/bootstrap'
            }
        },

        // clean directories and files
        clean: {
            options: {
                force: true
            },
            bootstrap_prepare: [
                '<%= dirs.tmp %>',
                '<%= dirs.sass %>/bootstrap/',
                '<%= dirs.js %>/bootstrap/',
                '<%= dirs.js %>/bootstrap.min.js',
                '<%= dirs.fonts %>/bootstrap/'
            ],
            bootstrap: [
                '<%= dirs.tmp %>'
            ]
        },

        replace: {
            woocommerce: {
                src: ['<%= dirs.sass %>/woocommerce/*.scss'],
                overwrite: true,
                replacements: [{
                    from: /@import ".+";\n/g,
                    to: ''
                }, {
                    from: '../fonts/',
                    to: '../fonts/woocommerce/'
                }, {
                    from: '../images/',
                    to: '../images/woocommerce/'
                }]
            }
        }

    };

    // Initialize Grunt Config
    // --------------------------
    grunt.initConfig(jmConfig);

    // Register Tasks
    // --------------------------

    // Default Task
    grunt.registerTask('default', [
        'jshint',
        'uglify'
    ]);

    // Optimize Images Task
    grunt.registerTask('optimize', ['imagemin']);

    // Compress
    grunt.registerTask('compress', [
        'default',
        'zip'
    ]);

    // Bootstrap Task
    // Note: you need config the file /_sass/variable.scss and run jekyll for build new css
    grunt.registerTask('bootstrap', [
        'clean:bootstrap_prepare',
        'curl:bootstrap_sass',
        'unzip:bootstrap_scss',
        'rename:bootstrap_scss',
        'rename:bootstrap_js',
        'rename:bootstrap_fonts',
        'clean:bootstrap',
        'uglify'
    ]);

    // Short aliases
    grunt.registerTask('w', ['watch']);
    grunt.registerTask('o', ['optimize']);
    grunt.registerTask('c', ['compress']);
};
