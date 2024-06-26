// product list html
function readProductsTemplate(data, keywords){
 
    var read_products_html="";
    
    // when clicked, it will load the create product form
    read_products_html+="<div id='create-product' class='btn btn-primary pull-right m-b-15px create-product-button'>";
    read_products_html+="<span class='glyphicon glyphicon-plus'>Créez votre Brasserie</span> ";

    read_products_html+="</div>";
    read_products_html+="<br>"
    read_products_html+="<br>"
    // start table
    read_products_html+="<table class='table table-bordered table-hover table table-striped'>";
    
    // creating our table heading
    read_products_html+="<tr>";
    read_products_html+="<th class='w-10-pct'>Nom</th>";
    read_products_html+="<th class='w-10-pct'>Appelation Légale</th>";
    read_products_html+="<th class='w-10-pct'>Adresse</th>";
    read_products_html+="<th class='w-10-pct'>Pays</th>";
    read_products_html+="<th class='w-10-pct'>Permis</th>";
    read_products_html+="<th class='w-5-pct'>Membre AMBQ</th>";
    read_products_html+="<th class='w-5-pct'>Année</th>";
    read_products_html+="<th class='w-30-pct text-align-center'>Actions</th>";
    read_products_html+="</tr>";
    
    // loop through returned list of data
    $.each(data.records, function(key, val) {
 
        // creating new table row per record
        read_products_html+="<tr>";
	
        read_products_html+="<td>" + val.nom + "</td>";
        read_products_html+="<td>" + val.appellationLegale + "</td>";
        read_products_html+="<td>" + val.adresse + "</td>";
        read_products_html+="<td>" + val.pays + "</td>";
        read_products_html+="<td>" + val.permis + "</td>";
        read_products_html+="<td>" + val.ambq_membre + "</td>";
        read_products_html+="<td>" + val.annee + "</td>";

        // 'action' buttons
        read_products_html+="<td>";
        // read product button
        read_products_html+="<button class='btn btn-primary m-r-20px read-one-product-button' data-permis='" + val.permis + "'>";
        read_products_html+="<span class='glyphicon glyphicon-eye-open'></span> Read";
        read_products_html+="</button>";
	
        // delete button
        read_products_html+="<button class='btn btn-danger delete-product-button' data-nom='" + val.nom + "'>";
        read_products_html+="<span class='glyphicon glyphicon-remove'></span> Delete";
        read_products_html+="</button>";
        read_products_html+="</td>";
	
        read_products_html+="</tr>";
	
    });
    
    // end table
    read_products_html+="</table>";
    
    // inject to 'page-content' of our app
    $("#page-content").html(read_products_html);
}

