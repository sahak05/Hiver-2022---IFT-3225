$(document).ready(function(){     

    $("#consultation").click(function(){
        $("#table").hide();
        $("#interfaceConsultation").show();
        $("#concept").show();
    });


    $("#jeux").click(function(){
        $("#table").hide();
        $("#interfaceConsultation").hide();
        $("#concept").hide();
    });


    $("#accueil").click(function(){
        $("#table").show();
        $("#interfaceConsultation").hide();
        $("#concept").hide();
    });

     


});