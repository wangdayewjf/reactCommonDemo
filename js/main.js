/*require(['requireJsonp'], function(likeNode) {
	
    alert('requireJsonp');
});*/


require(['jquery','underscore','nomalSelf','jquery.icheck'], function(jquery,underscore,nomalSelf,icheck) {
	
    console.log('jquery',jquery);
    console.log('underscore',underscore);
    console.log('underscore',_);//这些全局变量，只有require之后才不会undefined
    console.log('jquery',$);
    
    console.log('nomalSelf',nomalSelf);

    console.log('jquery.icheck',icheck);//有的插件加载不是插件加载，而是js加载，jquery.icheck 为undefined不要紧，文件加载了就可以？
    //
    //console.log('jquery.icheck',icheck);
});