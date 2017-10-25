require.config({
	baseUrl: 'js',
    paths: {
        'jquery': 'lib/jquery-3.2.1.min',
        'underscore':'lib/underscore', //用于requirejs导入html类型的依赖
        'nomalSelf':'nomal/nomalSelf',
        'jquery.icheck':'lib/icheck.min',
        'react':'https://unpkg.com/react@16/umd/react.production.min',
        'reactDom':'https://unpkg.com/react-dom@16/umd/react-dom.production.min.js',
        'babel':'https://cdn.bootcss.com/babel-standalone/6.22.1/babel.min.js',
        'backbone':'lib/backbone',

        react: 'vendor/react-with-addons.min',
        "JSXTransformer": 'vendor/JSXTransformer'

        text: 'vendor/text',
    },
    shim:{
    	
    	'underscore': {
            exports: '_'
            /*
             这里不要被误导，使用还是underscore 这样使用，只是，这里讲underscore变成了全局变量，变量名为_
             
             问：那是不是没有支持这种的，不能被require引入？
             * */
        },

        'jquery':{
        	exports: '$'
        },
        'nomalSelf':{
        	exports: 'nomal'
        },
        'jquery.icheck':{
            deps: ['jquery'],
            exports:'icheck'
        },
        'backbone':{
            deps: ['jquery','underscore'],
            exports:'backbone'
        }
        
    }
});

require(['main'], function(main) {});