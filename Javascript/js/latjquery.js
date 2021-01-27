// $( document ).ready(function() {
//     console.log( "siap" );
// });

$(function() {
    $("#isi").html("<h1>Belajar jquery</h1>");

    $("#klik").click(function (e) { 
        e.preventDefault();
        alert("belajar javascript");
        
    });

    $("#isi").mouseleave(function () { 
        alert("mouseleave");
        console.log("leave");
    });
});