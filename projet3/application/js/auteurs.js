$(document).ready(function(){
 
    $("#Auteurs").click(function(){
        $("#div_login").hide();
        $("#app").hide();
        document.getElementById("viz").innerHTML = ""; 
        $("#auteurs").show();
       
    });
    $("#Table").click(function(){
        $("#auteurs").hide();
        $("#app").show();
    });
    $("#Login").click(function(){
        $("#auteurs").hide();
        $("#div_login").show();
    });
    $("#Plot").click(function(){
        $("#auteurs").hide();
        $("#viz").show();
        
    });   
    
});