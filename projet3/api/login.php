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
include_once 'config/database.php';
include_once 'objects/user.php';


// instantiate database and product object
$database = new Database();
$db = $database->getConnection();
 
// initialize object
$user = new User($db);

$user->account_name = isset($_GET['name']) ? $_GET['name'] : "";
$user->account_passwd = isset($_GET['pwd']) ? $_GET['pwd'] : "";



$stmt = $user->findA();


if($stmt->rowCount()>0){

	echo json_encode($stmt->fetch(PDO::FETCH_ASSOC));
}else{
    echo json_encode(
        array("message" => "No User.")
    );
}

?>