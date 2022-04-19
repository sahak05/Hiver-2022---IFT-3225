
<?php


//ICI NOUS AVONS LE CODE QUI FAIR LA TROISIEME REQUETES GET DU TP PERMIS
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);



header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');
 
// include database and object files
include_once '../config/database.php';
include_once '../objects/brasseries.php';


// instantiate database and product object
$database = new Database();
$db = $database->getConnection();
 
// initialize object
$brasseries = new Brasseries($db);


$brasseries->permis = isset($_GET['permis']) ? $_GET['permis'] : die();

$brasseries->findPermis();



	//brasseries names array
	$brasseries_arr = array();
	$brasseries_arr["records"] = array(

		"nom" =>   $brasseries->nom,
		"appellationLegale" =>  $brasseries->appellationLegale,
		"autreAppellation" =>  $brasseries->autreAppellation,
		"adresse" =>  $brasseries->adresse,
		"ville" =>  $brasseries->ville, 
		"code_postal" =>  $brasseries->code_postal,
		"province" =>  $brasseries->province,
		"pays" =>  $brasseries->pays,
		"latitude" =>  $brasseries->latitude,
		"longitude" =>  $brasseries->longitude,
		"region" =>  $brasseries->region,
		"brassePermis" =>  $brasseries->brassePermis,
		"typePermis" =>   $brasseries->typePermis,
		"ambq_membre" =>  $brasseries->ambq_membre,
		"annee" =>  $brasseries->annee,
		"site" =>  $brasseries->site,
		"courriel" =>  $brasseries->courriel,
		"telephone" =>  $brasseries->telephone,
		"facebook" =>  $brasseries->facebook,
		"ratebeer" =>  $brasseries->ratebeer,
		"untappd" =>  $brasseries->untappd,
		"auMenu" =>  $brasseries->auMenu,
		"twitter" =>  $brasseries->twitter,
		"wikidata" =>  $brasseries->wikidata,
		"youtube" =>   $brasseries->youtube,
		"instagram" =>  $brasseries->instagram,
		"pinterest" =>  $brasseries->pinterest,
		"snapchat" =>  $brasseries->snapchat,
		"autre" =>  $brasseries->autre,
		"notes" =>  $brasseries->notes
	);
	echo json_encode($brasseries_arr);


?>