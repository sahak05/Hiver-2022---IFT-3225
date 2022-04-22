$(document).ready(function(){
 
    // show html form when 'create product' button was clicked
    $(document).on('click', '.create-product-button', function(){

        if(sessionStorage.getItem('droits')=== 'MODIFY'){
        letAddBrass()
    }
    else{

        var create404 = "<div><h1>404 ERROR</h1><h1>Vous n'etes pas l'Admin !!!!</h1><div>"
        $("#page-content").html(create404);
    }
    })

    
});



function letAddBrass(){



    // load list of categories
    
        // build categories option html
        // loop through returned list of dat
        // we have our html form here where product information will be entered
        // we used the 'required' html5 property to prevent empty fields
        var create_product_html="";
        
        // 'read products' button to show list of products
        create_product_html+="<div id='read-products' class='btn btn-primary pull-right m-b-15px read-products-button'>";
        create_product_html+="<span class='glyphicon glyphicon-list'></span> Lire les brasseries";
        create_product_html+="</div>";
        
        // 'create product' html form
        create_product_html+="<form id='create-product-form' action='#' method='post' border='0'>";
        create_product_html+="<table class='table table-hover table-responsive table-bordered'>";
        
            // nom field
            create_product_html+="<tr>";
            create_product_html+="<td>Nom</td>";
            create_product_html+="<td><input type='text' name='nom' class='form-control' required /></td>";
            create_product_html+="</tr>";
 
            //appelation legale field
            create_product_html+="<tr>";
            create_product_html+="<td>Appelation Légal</td>";
            create_product_html+="<td><input type='text' name='appLegale' class='form-control'  /></td>";
            create_product_html+="</tr>";
 
            // description field
            create_product_html+="<tr>";
            create_product_html+="<td>Autre Appelation</td>";
            create_product_html+="<td><input type='text' name='autreApp' class='form-control'  /></td>";
            create_product_html+="</tr>";
        
            // Adresse
            create_product_html+="<tr>";
            create_product_html+="<td>Adresse</td>";
            create_product_html+="<td><input type='text' name='adresse' class='form-control' required /></td>";
            create_product_html+="</tr>";


            //ville
            create_product_html+="<tr>";
            create_product_html+="<td>Ville</td>";
            create_product_html+="<td><input type='text' name='ville' class='form-control' required /></td>";
            create_product_html+="</tr>";
 
            // site
            create_product_html+="<tr>";
            create_product_html+="<td>Site</td>";
            create_product_html+="<td><input type='text' name='site' class='form-control' required /></td>";
            create_product_html+="</tr>";
        
            // Courriel
            create_product_html+="<tr>";
            create_product_html+="<td>Courriel</td>";
            create_product_html+="<td><input type='text' name='courriel' class='form-control' required /></td>";
            create_product_html+="</tr>";


            //code postal
            create_product_html+="<tr>";
            create_product_html+="<td>Code Postal</td>";
            create_product_html+="<td><input type='text' name='c_d' class='form-control' required /></td>";
            create_product_html+="</tr>";
 
            //province
            create_product_html+="<tr>";
            create_product_html+="<td>Province</td>";
            create_product_html+="<td><input type='text' name='province' class='form-control' required /></td>";
            create_product_html+="</tr>";
        
            // pays
            create_product_html+="<tr>";
            create_product_html+="<td>Pays</td>";
            create_product_html+="<td><input type='text' name='pays' class='form-control' required /></td>";
            create_product_html+="</tr>";



            //latitude
            create_product_html+="<tr>";
            create_product_html+="<td>Latitude</td>";
            create_product_html+="<td><input type='text' name='lat' class='form-control' required /></td>";
            create_product_html+="</tr>";
 
            //longitude
            create_product_html+="<tr>";
            create_product_html+="<td>Longitude</td>";
            create_product_html+="<td><input type='text' name='longitude' class='form-control' required /></td>";
            create_product_html+="</tr>";
        
            // region
            create_product_html+="<tr>";
            create_product_html+="<td>Region</td>";
            create_product_html+="<td><input type='number' name='region' class='form-control' required /></td>";
            create_product_html+="</tr>";


            // permis
            create_product_html+="<tr>";
            create_product_html+="<td>Permis</td>";
            create_product_html+="<td><input type='text' name='permis' class='form-control' required /></td>";
            create_product_html+="</tr>";

            // brasseP
            create_product_html+="<tr>";
            create_product_html+="<td>Brasserie sous le permis</td>";
            create_product_html+="<td><input type='text' name='brasse' class='form-control' /></td>";
            create_product_html+="</tr>";

            // ambq
            create_product_html+="<tr>";
            create_product_html+="<td>Membre AMBQ</td>";
            create_product_html+="<td><input type='number' name='ambq' class='form-control' /></td>";
            create_product_html+="</tr>";


            // annee
            create_product_html+="<tr>";
            create_product_html+="<td>Annee</td>";
            create_product_html+="<td><input type='number' name='annee' class='form-control' /></td>";
            create_product_html+="</tr>";

            // telephone
            create_product_html+="<tr>";
            create_product_html+="<td>Telephone</td>";
            create_product_html+="<td><input type='tel' name='telephone' class='form-control' /></td>";
            create_product_html+="</tr>";

            // facebook
            create_product_html+="<tr>";
            create_product_html+="<td>FaceBook</td>";
            create_product_html+="<td><input type='text' name='facebook' class='form-control' /></td>";
            create_product_html+="</tr>";


            // ratebeer
            create_product_html+="<tr>";
            create_product_html+="<td>Ratebeer</td>";
            create_product_html+="<td><input type='text' name='ratebeer' class='form-control' /></td>";
            create_product_html+="</tr>";

            // untpadd
            create_product_html+="<tr>";
            create_product_html+="<td>untpadd</td>";
            create_product_html+="<td><input type='text' name='untpadd' class='form-control' /></td>";
            create_product_html+="</tr>";

            // auMenu
            create_product_html+="<tr>";
            create_product_html+="<td>auMenu</td>";
            create_product_html+="<td><input type='text' name='auMenu' class='form-control' /></td>";
            create_product_html+="</tr>";

            // twitter
            create_product_html+="<tr>";
            create_product_html+="<td>Twitter</td>";
            create_product_html+="<td><input type='text' name='twitter' class='form-control' /></td>";
            create_product_html+="</tr>";

            // wikipedia
            create_product_html+="<tr>";
            create_product_html+="<td>Wikidata</td>";
            create_product_html+="<td><input type='text' name='wiki' class='form-control' /></td>";
            create_product_html+="</tr>";

            // autres
            create_product_html+="<tr>";
            create_product_html+="<td>Autres</td>";
            create_product_html+="<td><input type='text' name='autres' class='form-control' /></td>";
            create_product_html+="</tr>";

            // notes
            create_product_html+="<tr>";
            create_product_html+="<td>Notes</td>";
            create_product_html+="<td><input type='text' name='notes' class='form-control' /></td>";
            create_product_html+="</tr>";


            // button to submit form
            create_product_html+="<tr>";
            create_product_html+="<td></td>";
            create_product_html+="<td>";
            create_product_html+="<button type='submit' class='btn btn-primary'>";
            create_product_html+="<span class='glyphicon glyphicon-plus'></span>Nouvel brasserie";
            create_product_html+="</button>";
            create_product_html+="</td>";
            create_product_html+="</tr>";
        
        create_product_html+="</table>";
        create_product_html+="</form>";

        // inject html to 'page-content' of our app
        $("#page-content").html(create_product_html);
 
        // chage page title
        changePageTitle("Ajoutez sa brasserie");
    

    // will run if create product form was submitted
    $(document).on('submit', '#create-product-form', function(event){
        event.preventDefault()
     //get form data
        var form_data=JSON.stringify($(this).serializeObject());
        
        // submit form data to api
        $.ajax({
            url: "https://www-ens.iro.umontreal.ca/~sadikoua/skdffivndfk/pj3/api/addJ.php",
            type : "POST",
            contentType : 'application/json',
            data : form_data,
            success : function(result) {
            // product was created, go back to products list
            
            showBrasseries();
            },
            error: function(xhr, resp, text) {
            // show error to console
            //we know we got an error but it doesn't stop us to add it
            alert("Fait !!!!") 
            showBrasseries()
            }
        }); // ajax
    })
 
return false;
    
}