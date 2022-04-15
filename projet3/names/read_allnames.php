<?php


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
 
// get database connection
$database = new Database();
$db = $database->getConnection();
 
// prepare product object
$brasseries = new Brasseries($db);
 
// read the details of product to be edited
$stmt = $brasseries->allnames();


// create array
$brasseries_arr = array();



while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
    // extract row
    // this will make $row['name'] to
    // just $name only
    extract($row);
 
    array_push($brasseries_arr, $nom);
}


// make it json format
print_r(json_encode($brasseries_arr));



?>