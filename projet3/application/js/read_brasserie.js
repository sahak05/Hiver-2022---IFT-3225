
$(document).ready(function(){
 
    $("#Table").click(function(){
        $("#div_login").hide();
        document.getElementById("viz").innerHTML = ""; 
        $("#app").show();
        

        if(sessionStorage.getItem('droits')){
            showBrasseries();
        }
    });
    
    // when a 'read products' button was clicked
    $(document).on('click', '.read-products-button', function(){
        showBrasseries();
    });
    $("#Login").click(function(){
        $("#app").hide();
        $("#div_login").show();
        
    });
    $("#Plot").click(function(){
        $("#app").hide();
        $("#viz").show();
        
    });
   
    



    //////////////////////////////////////////


    $(document).on('click', '.read-one-product-button', function(){
 
    // get product id
    var permis = $(this).attr('data-permis');

    // read product record based on given ID
    $.getJSON("https://www-ens.iro.umontreal.ca/~sadikoua/skdffivndfk/pj3/api/names/getpermis.php?permis=" + permis, function(data){
        //console.log(data)
        // start html
        var read_one_product_html="";
 
        // when clicked, it will show the product's list
        read_one_product_html+="<div id='read-products' class='btn btn-primary pull-right m-b-15px read-products-button'>";
        read_one_product_html+="<span class='glyphicon glyphicon-list'></span> Read Brasseries";
        read_one_product_html+="</div>";

        // product data will be shown in this table
        read_one_product_html+="<table class='table table-bordered table-hover'>";
 
        // Appelation Legale
        read_one_product_html+="<tr>";
            read_one_product_html+="<td class='w-30-pct'>Appelation Légal</td>";
            read_one_product_html+="<td class='w-70-pct'>" + data.records.appellationLegale + "</td>";
        read_one_product_html+="</tr>";
        
        // autreAppellation
        read_one_product_html+="<tr>";
            read_one_product_html+="<td>Autre Appelation</td>";
            read_one_product_html+="<td>" + data.records.autreAppellation + "</td>";
        read_one_product_html+="</tr>";
        
        // adresse
        read_one_product_html+="<tr>";
            read_one_product_html+="<td>Adresse</td>";
            read_one_product_html+="<td>" + data.records.adresse + "</td>";
        read_one_product_html+="</tr>";
 
        // ville
        read_one_product_html+="<tr>";
            read_one_product_html+="<td>Ville</td>";
            read_one_product_html+="<td>" + data.records.ville + "</td>";
        read_one_product_html+="</tr>";

        // site
        read_one_product_html+="<tr>";
            read_one_product_html+="<td>Site</td>";
            read_one_product_html+="<td>" + data.records.site + "</td>";
        read_one_product_html+="</tr>";
        // courriel
        read_one_product_html+="<tr>";
            read_one_product_html+="<td>Courriel</td>";
            read_one_product_html+="<td>" + data.records.courriel + "</td>";
        read_one_product_html+="</tr>";

        // code_postal
        read_one_product_html+="<tr>";
            read_one_product_html+="<td class='w-30-pct'>Code Postal</td>";
            read_one_product_html+="<td class='w-70-pct'>" + data.records.code_postal + "</td>";
        read_one_product_html+="</tr>";
        
        // Province
        read_one_product_html+="<tr>";
            read_one_product_html+="<td>Province</td>";
            read_one_product_html+="<td>" + data.records.province + "</td>";
        read_one_product_html+="</tr>";
        
        // pays
        read_one_product_html+="<tr>";
            read_one_product_html+="<td>Pays</td>";
            read_one_product_html+="<td>" + data.records.pays + "</td>";
        read_one_product_html+="</tr>";
 
        // latitude
        read_one_product_html+="<tr>";
            read_one_product_html+="<td>Latitude</td>";
            read_one_product_html+="<td>" + data.records.latitude + "</td>";
        read_one_product_html+="</tr>";


        // longitude
        read_one_product_html+="<tr>";
            read_one_product_html+="<td class='w-30-pct'>Longitude</td>";
            read_one_product_html+="<td class='w-70-pct'>" + data.records.longitude + "</td>";
        read_one_product_html+="</tr>";
        
        // region
        read_one_product_html+="<tr>";
            read_one_product_html+="<td>Region</td>";
            read_one_product_html+="<td>" + data.records.region + "</td>";
        read_one_product_html+="</tr>";
        
        // permis
        read_one_product_html+="<tr>";
            read_one_product_html+="<td>Permis</td>";
            read_one_product_html+="<td>" + permis + "</td>";
        read_one_product_html+="</tr>";
 
        // brassePermis
        read_one_product_html+="<tr>";
            read_one_product_html+="<td>Brasse Permis</td>";
            read_one_product_html+="<td>" + data.records.brassePermis + "</td>";
        read_one_product_html+="</tr>";


        // ambq
        read_one_product_html+="<tr>";
            read_one_product_html+="<td class='w-30-pct'>Membre de l'AMBQ</td>";
            read_one_product_html+="<td class='w-70-pct'>" + data.records.ambq_membre + "</td>";
        read_one_product_html+="</tr>";
        
        // annee
        read_one_product_html+="<tr>";
            read_one_product_html+="<td>Année</td>";
            read_one_product_html+="<td>" + data.records.annee + "</td>";
        read_one_product_html+="</tr>";
        
            
        // telephone
        read_one_product_html+="<tr>";
            read_one_product_html+="<td class='w-30-pct'>Telephone</td>";
            read_one_product_html+="<td class='w-70-pct'>" + data.records.telephone + "</td>";
        read_one_product_html+="</tr>";
        
        // facebook
        read_one_product_html+="<tr>";
            read_one_product_html+="<td>Facebook</td>";
            read_one_product_html+="<td>" + data.records.facebook + "</td>";
        read_one_product_html+="</tr>";


 
        read_one_product_html+="</table>";

        // inject html to 'page-content' of our app
        $("#page-content").html(read_one_product_html);
        
        // chage page title
        changePageTitle(data.records.nom);
        
    }); // getJSON
    }); // on click


    /////////////////////////////////////////
    
});

// function to show list of products
function showBrasseries(){
    
    $.ajax({
    type: 'GET',
    url: "https://www-ens.iro.umontreal.ca/~sadikoua/skdffivndfk/pj3/api/names/read.php",
    async: false,
    dataType: "json",
    success: function(data) {
        // html for listing products
        readProductsTemplate(data, "");
        /*$(document).ready( function () {
            $('.table').DataTable();
        } );*/
        
 
        // chage page title
        changePageTitle("Read Brasseries");
    },
    error: function(XMLHttpRequest, status, err) {
      console.log(err);
    }
    });

};




/*
// function to show list of products
function showProducts(){
    
    // get list of products from the API
    $.getJSON("../rest-api/product/read.php", function(data){
	
	// html for listing products
	var read_products_html="";
 
	// when clicked, it will load the create product form
	read_products_html+="<div id='create-product' class='btn btn-primary pull-right m-b-15px create-product-button'>";
	read_products_html+="<span class='glyphicon glyphicon-plus'></span> Create Product";
	read_products_html+="</div>";
	
	// start table
	read_products_html+="<table class='table table-bordered table-hover'>";
	
	// creating our table heading
	read_products_html+="<tr>";
        read_products_html+="<th class='w-25-pct'>Name</th>";
        read_products_html+="<th class='w-10-pct'>Price</th>";
        read_products_html+="<th class='w-15-pct'>Category</th>";
        read_products_html+="<th class='w-25-pct text-align-center'>Action</th>";
	read_products_html+="</tr>";
	
	// loop through returned list of data
	$.each(data.records, function(key, val) {
 
	    // creating new table row per record
	    read_products_html+="<tr>";
	    
            read_products_html+="<td>" + val.name + "</td>";
            read_products_html+="<td>$" + val.price + "</td>";
            read_products_html+="<td>" + val.category_name + "</td>";
	    
            // 'action' buttons
            read_products_html+="<td>";
            // read one product button
            read_products_html+="<button class='btn btn-primary m-r-10px read-one-product-button' data-id='" + val.id + "'>";
            read_products_html+="<span class='glyphicon glyphicon-eye-open'></span> Read";
            read_products_html+="</button>";
	    
            // edit button
            read_products_html+="<button class='btn btn-info m-r-10px update-product-button' data-id='" + val.id + "'>";
            read_products_html+="<span class='glyphicon glyphicon-edit'></span> Edit";
            read_products_html+="</button>";
	    
            // delete button
            read_products_html+="<button class='btn btn-danger delete-product-button' data-id='" + val.id + "'>";
            read_products_html+="<span class='glyphicon glyphicon-remove'></span> Delete";
            read_products_html+="</button>";
            read_products_html+="</td>";
	    
	    read_products_html+="</tr>"; 
 
	});
	
	// end table
	read_products_html+="</table>";

	// inject to 'page-content' of our app
	$("#page-content").html(read_products_html);
	
	// chage page title
	changePageTitle("Read Products");
    }); // getJSON
}; // showProduct

*/
