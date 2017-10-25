require(["http://example.com/api/data.json?callback=define"],   
    function (data) {
        //The data object will be the API response for theJSONP data call.
        console.log(data);
        
        //问：这里必须是get请求，而且?callback=define也是必须的？
    }
);