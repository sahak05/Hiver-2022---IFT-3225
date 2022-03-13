$(document).ready(function(){     

    $("#consultation").click(function(){
        $("#table").hide();
        $("#interfaceConsultation").show();
        $("#concept").show();
        $("#interfaceJeux").hide();
        
    });


    $("#jeux").click(function(){
        $("#table").hide();
        $("#interfaceConsultation").hide();
        $("#concept").hide();
        $("#interfaceJeux").show();
        $("#recherche").hide();
      
    });


    $("#accueil").click(function(){
        $("#table").show();
        $("#interfaceConsultation").hide();
        $("#concept").hide();
        $("#interfaceJeux").hide();
        
    });
  



   


});

