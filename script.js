$( document ).ready(function() {

    console.log( "ready!" );

    $( ".noLeftP" ).click(function() {
        console.log("change btn 1 clicked");
        $(".firstbox").addClass("newfirstbox");
    });

    $( ".change2" ).click(function() {
        console.log("change btn 2 clicked");
        $(".secondbox").css({".newsecondbox":"red","border":"2px solid blue"});
    });
    $( ".noLeftP" ).click(function() {
        console.log("change btn 1 clicked");
        $(".firstbox").addClass("newfirstbox");
    });
    
    $( ".change3" ).click(function() {
        console.log("change btn 3 clicked");
    });

    $( ".noRightP" ).click(function() {
        console.log("change all btn clicked");
    });

});