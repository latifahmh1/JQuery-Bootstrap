$( document ).ready(function() {

    console.log( "ready!" );

    $('.noLeftP').on('click', function(){
        console.log('change btn 1 clicked');
        $('.firstbox').addClass('newfirstbox');
    });
});

    $( ".change2" ).click(function() {
        console.log("change btn 2 clicked");
        $(".firstbox").addClass("newsecondbox");
    });

    $( ".change3" ).click(function() {
        console.log("change btn 3 clicked");
        $(".firstbox").addClass("newthirdbox");
    });

    $( ".noRightP" ).click(function() {
        console.log("change all btn clicked");
        $(".firstbox").css({".newsecondbox":"black","border":"6px solid gold"});
        $(".newfirstbox").addClass("changeallbox");
        $(".secondtbox").addClass("changeallbox");
        $(".newsecondbox").addClass("changeallbox");
        $(".thirdbox").addClass("changeallbox");
        $(".newthirdbox").addClass("changeallbox");
    });
   

    $( ".change3" ).click(function() {
        console.log("change btn 3 clicked");
    });

    $( ".noRightP" ).click(function() {
        console.log("change all btn clicked");
    });

});