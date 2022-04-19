

<?php


//ICI NOUS AVONS LE CODE QUI FAIR LES DEUX PREMIERES REQUETES GET DU TP AVEC ET SANS PREFIX

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


$prefix = isset($_GET['prefix']) ? $_GET['prefix'] : "";

$stmt = $brasseries->namesLike($prefix);

//check if more than 0 record found 

if($stmt->rowCount()>0){

	//brasseries names array
	$brasseries_arr = array();
	$brasseries_arr["records"] = array();

	while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
	    // extract row
	    // this will make $row['name'] to
	    // just $name only
	    extract($row);
	 
	    array_push($brasseries_arr["records"], $nom);
	};
	echo json_encode($brasseries_arr);

}else{
    echo json_encode(
        array("message" => "No products found.")
    );
}

?>