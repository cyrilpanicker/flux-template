var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(grunt){
    
    grunt.initConfig({
        
        ts:{
            options:{
                module:'commonjs',
                target:'es5',
                sourceMap:false,
                fast:'never',
                jsx:'preserve'
            },
            default:{
                files:[
                    {
                        src:['source/**/*.ts*'],
                        dest:'build'
                    }
                ]
            }
        },
        
        webpack:{
            default:{
                devtool:'source-map',
                entry:'./build/app.jsx',
                output:{
                    filename:'scripts.js',
                    path:'./public'
                },
                plugins:[
                    new HtmlWebpackPlugin({
                        title:'Demo App',
                        filename:'index.html'
                    })
                ],
                module:{
                    loaders:[
                        {
                            test: /\.jsx?$/,
                            include:'./build',
                            loader: 'babel',
                            query: {
                                presets: ['react', 'es2015']
                            }
                        }
                    ]
                },
                resolve:{
                    extensions: ['', '.js', '.jsx']
                }
            }
        },
        
        connect:{
            default:{
                options:{
                    hostname:'localhost',
                    port:8000,
                    base:'./public',
                    keepalive:true
                }
            }
        }
        
    });
    
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-webpack');
    grunt.loadNpmTasks('grunt-contrib-connect');
    
    grunt.registerTask('compile',['ts']);
    grunt.registerTask('bundle',['webpack']);
    grunt.registerTask('serve',['connect']);
};