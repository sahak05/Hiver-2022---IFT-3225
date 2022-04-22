<?php


	ini_set('display_errors', 1);
	ini_set('display_startup_errors', 1);
	error_reporting(E_ALL);

	// required headers
	header("Access-Control-Allow-Origin: *");
	header("Content-Type: application/json; charset=UTF-8");
	header("Access-Control-Allow-Methods: POST");
	header("Access-Control-Max-Age: 3600");
	header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


	// include database and object file
	include_once 'config/database.php';
	include_once 'objects/brasseries.php';


	// get database connection
	$database = new Database();
	$db = $database->getConnection();

	// prepare product object
	$brasseries = new Brasseries($db);

	// get product name
	$data = isset($_GET['input']) ? $_GET['input'] : die();
	$data = str_replace('_', ' ', $data);


	// set product name to be deleted
	$brasseries->nom = $data;

	// delete the product
	if($brasseries->delete()){
		// set response code - 200 ok
		http_response_code(200);
		// tell the user
		echo json_encode(array("message" => "Brasseries was deleted."));
	}

	// if unable to delete the product
	else{
		// set response code - 503 service unavailable
		http_response_code(503);
		// tell the user
		echo json_encode(array("message" => "Unable to delete brasseries."));
	}

?>