<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);




// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
 
// include database and object files
include_once '../config/database.php';
include_once '../objects/brasseries.php';

// instantiate database and product object
$database = new Database();
$db = $database->getConnection();
 
// initialize object
$brasseries = new Brasseries($db);
 
// query products
$stmt = $brasseries->read();


$brasseries_arr = array();
$brasseries_arr["records"] = array();

// retrieve our table contents
// fetch() is faster than fetchAll()
//http://stackoverflow.comquestions/2770630pdofetchall-vs-pdofetch-in-a-loop

while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
    // extract row
    // this will make $row['name'] to
    // just $name only
    extract($row);


    $brasseries_item=array(
        "nom" => $nom,
        "appellationLegale" => $appellationLegale,
        "province" => $province,
        "pays" => $pays,
        "telephone" => $telephone,
        "site" => $site
    );
 
    array_push($brasseries_arr["records"], $brasseries_item);
}
 
echo json_encode($brasseries_arr);


?>