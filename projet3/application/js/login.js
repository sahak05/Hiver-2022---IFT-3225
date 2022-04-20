//PRISE EN CHARGE DU LOGIN

$(document).ready(function(){     

    $("#Login").click(function(){
    	$("#div_login").show();
        $("#app").hide();
    });

    $("#btn-login").click(function(event){
    	event.preventDefault();
    	var user = $("#name").val();
    	var password = $('input[type="password"]').val();

    	
    	checkRegister(user, password)

    	$("#name").val(null);
    	$('input[type="password"]').val(null)
    });

    $("#Table").click(function(){
    	$("#div_login").hide();
        $("#app").show();
    });

});

function checkRegister(user, password){
	var enreg=null;
	$.ajax({
      type: 'GET',
      url: "https://www-ens.iro.umontreal.ca/~sadikoua/skdffivndfk/pj3/api/login.php?name='"+user+"'&pwd='"+password+"'",
      async: false,
      dataType: "json",
      success: function(data) {
        console.log(data);
        enreg=data;
      },  
    });

    if(enreg["account_name"]){
    	sessionStorage.setItem('user', enreg["account_name"])
    	sessionStorage.setItem('droits', enreg["account_right"])
    	
    	let confirmation = "Connexion reussie "+ enreg['account_name']
    	alert (confirmation)

    }else{

    	alert ("Verifiez vos identifiants.")
    	sessionStorage.clear();
    }


}

//FIN DE PRISE EN CHARGE DU LOGIN