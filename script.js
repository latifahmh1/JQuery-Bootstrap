$( document ).ready(function() {

    console.log( "ready!" );

    $( ".noLeftP" ).click(function() {
        console.log("change btn 1 clicked");
        $(".box1").addClass("newbox1");
    });

    $( ".change2" ).click(function() {
        console.log("change btn 2 clicked");
        $(".box2").css({"background":"red","border":"2px solid blue"});
    });

    $( ".change3" ).click(function() {
        console.log("change btn 3 clicked");
    });

    $( ".noRightP" ).click(function() {
        console.log("change all btn clicked");
    });

});