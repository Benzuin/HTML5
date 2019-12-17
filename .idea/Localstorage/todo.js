$(document).ready(function(){
    $("#save").click(function () {
        $("#result").append('<li>' + $("#todo").val() + '</li>');
        var elems = document.getElementsByTagName( "li" );
        var object = {};
        for (var i = 0; i < elems.length; ++i){
        object[i] = elems[i].innerHTML;
        }
        localStorage.setItem("todor", JSON.stringify(object))
    });
    var stored = JSON.parse(localStorage.getItem("todor"));
    console.log(stored)
    var counter = 0;
    var g = true;
    while (g) {
        g = stored[counter];
        counter += 1;
    }
    counter -= 1;
    for (var u=0; u<counter; ++u){
        var item = stored[u];
        console.log(item)
        $("#result").append('<li>' + item + '</li>');
    };
});
