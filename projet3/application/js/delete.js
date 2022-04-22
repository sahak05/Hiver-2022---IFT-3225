$(document).ready(function(){
 
    // will run if the delete button was clicked
    $(document).on('click', '.delete-product-button', function(){
    	
		// get the product id

		var nom = $(this).attr('data-nom');
		
		
		if(sessionStorage.getItem('droits')=== 'MODIFY'){
			// delete request will be here
				console.log("SWINF")
				
		 
				    // send delete request to api / remote server
				    $.ajax({
						url: "https://www-ens.iro.umontreal.ca/~sadikoua/skdffivndfk/pj3/api/delete.php?input="+nom.split(' ').join('_'),
						type : "POST",
						dataType : 'json',
						success : function(data) {
							console.log(data)
						    alert(data.message)
						    // re-load list of products
						    showBrasseries();
						},
						error: function(xhr, resp, text) {
						    console.log(xhr, resp, text);
						}
				    }); // ajax
		 
				
			}

			else{
				alert("Vous devez etre Administrateur pour modifier/supprimer")
			}
		
    }); // click event
});