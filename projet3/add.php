<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");



/*
La syntaxe qu'on tiendra en compte sera decompose de la maniere suivante:
	-> Apres le path vient ?input=nom=valeur_nom&appelationLegale=valeur_appelationLegale&permis=valeur_permis ainsi de suite pour tout les attributs

	->D'ou on extrait tout ce qui vient de l'input 

	-> On mettra des _ pour les espaces dans les valeurs et notre requete php se chargera de remettre les espaces en compte

*/


// include database and object files
include_once 'config/database.php';
include_once 'objects/brasseries.php';


// instantiate database and product object
$database = new Database();
$db = $database->getConnection();
 
// initialize object
$brasseries = new Brasseries($db);


//Si input falsy on die()
$input = isset($_GET['input']) ? $_GET['input'] : die();


$json = json_decode($input, true); 


$columns= '';
$values= '';

foreach($json as $key => $val){
	
	$columns = $columns. ", `" . $key . "`";

	if(is_int($val) == 1 || is_float($val) ==1){
		$values = $values . ",  " . $val;
	}
	else{
		$values = $values.", '".$val."'";
	}
}

$columns = substr($columns, 1); 
$values = substr($values, 1); 

$query = "INSERT INTO brasseries" ." (".$columns ") VALUES (".$values.")";

if($brasseries->create($columns, $values)){
    echo '{';
        echo '"message": "Brasseries was created."';
    echo '}';
}
 
// if unable to create the product, tell the user
else{
    echo '{';
        echo '"message": "Unable to create product."';
    echo '}';
}


?>