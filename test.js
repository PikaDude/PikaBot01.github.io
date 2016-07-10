$("button").click(function(){
    $.getJSON("http://128.199.142.235/test.json", function(result){
        $.each(result, function(i, field){
            $("div").append(field + " ");
        });
    });
}); 