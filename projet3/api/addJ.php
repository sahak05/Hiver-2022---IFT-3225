<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
include_once 'config/database.php';
include_once 'objects/brasseries.php';

 
// instantiate database and product object
$database = new Database();
$db = $database->getConnection();
 
// initialize object
$brasseries = new Brasseries($db);

// get posted data
$data = json_decode(file_get_contents("Php://input"));
 
	$brasseries->nom = isset($data->nom) ? $data->nom : "";
	$brasseries->appellationLegale = isset($data->appLegale )? $data->appLegale : "" ; 
	$brasseries->autreAppellation =isset($data->autreApp )?  $data->autreApp : "" ; 
	$brasseries->adresse =isset($data->adresse )?  $data->adresse : "" ; 
	$brasseries->ville = isset($data->ville )? $data->ville : "" ; 
	$brasseries->code_postal =isset($data->c_d )?  $data->c_d : "" ; 
	$brasseries->province =isset($data->province )?  $data->province : "" ; 
	$brasseries->pays =isset($data->pays )?  $data->pays : "" ; 
	$brasseries->latitude =isset($data->lat )?  $data->lat : "" ; 
	$brasseries->longitude =isset($data->longitude )?  $data->longitude : "" ; 
	$brasseries->region =isset($data->region )?  $data->region : "" ; 
	$brasseries->brassePermis =isset($data->brasse )?  $data->brasse : "" ; 
	$brasseries->permis =isset($data->permis )?  $data->permis : "" ; 
	$brasseries->ambq_membre =isset($data->ambq )?  $data->ambq : "" ; 
	$brasseries->annee =isset($data->annee )?  $data->annee : "" ; 
	$brasseries->site =isset($data->site )?  $data->site : "" ; 
	$brasseries->telephone = isset($data->telephone )? $data->telephone : "" ; 
	$brasseries->facebook =isset($data->facebook )?  $data->facebook : "" ; 
	$brasseries->ratebeer =isset($data->ratebeer )?  $data->ratebeer : "" ; 
	$brasseries->untappd =isset($data->untappd )?  $data->untpadd : "" ; 
	$brasseries->auMenu =isset($data->auMenu )?  $data->auMenu : "" ; 
	$brasseries->twitter =isset($data->twitter )?  $data->twitter : "" ; 
	$brasseries->wikidata =isset($data->wiki )?  $data->wiki : "" ; 
	$brasseries->courriel =isset($data->courriel )?  $data->courriel : "" ; 
	$brasseries->autre = isset($data->autres )? $data->autres : "" ; 
	$brasseries->notes = isset($data->notes )? $data->notes : "" ; 
	$brasseries->typePermis = "" ; 
	$brasseries->youtube ="" ; 
	$brasseries->instagram =  "" ; 
	$brasseries->pinterest = "" ; 
	$brasseries->snapchat = "" ;


 
// create the product
if($brasseries->createAvecJ()){
    echo '{';
        echo '"message": "Brasserie was created."';
    echo '}';
}
 
// if unable to create the product, tell the user
else{
    echo '{';
        echo '"message": "Unable to create brasserie."';
    echo '}';
}
?>