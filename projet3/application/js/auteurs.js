$(document).ready(function(){
 
    $("#Auteurs").click(function(){
        $("#div_login").hide();
         $("#doc_id").hide();
        $("#app").hide();
        document.getElementById("viz").innerHTML = ""; 
        $("#auteurs").show();
       
    });
   
    $("#Login").click(function(){
        $("#auteurs").hide();
         $("#doc_id").hide();
        $("#div_login").show();
    });
    $("#Plot").click(function(){
        $("#auteurs").hide();
        $("#doc_id").hide();
        $("#viz").show();
        
    });   


    $("#Doc").click(function(){
        document.getElementById("viz").innerHTML = ""; 
        $("#div_login").hide();
        $("#auteurs").hide();
        $("#app").hide();
        $("#viz").hide();
        if(sessionStorage.getItem('droits')){
           $("#doc_id").show();
       }

       

        
    });  
    
});