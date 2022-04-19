

<?php

class Brasseries{

	//database connection and table name
	private $conn;
	private $table_name = "brasseries";


	//object properties
	public $nom; 
	public $appellationLegale;
	public $autreAppellation; 
	public $adresse;
	public $ville;
	public $code_postal;
	public $province;
	public $pays;
	public $latitude;
	public $longitude;
	public $region;
	public $permis;
	public $brassePermis;
	public $typePermis;
	public $ambq_membre;	
	public $annee;
	public $site;
	public $courriel;
	public $telephone;
	public $facebook;
	public $ratebeer;
	public $untappd;
	public $auMenu;
	public $twitter;
	public $wikidata;
	public $youtube;
	public $instagram;
	public $pinterest;
	public $snapchat;
	public $autre;
	public $notes;


	//constructor with $db as database connection
	public function __construct($db){
		$this->conn = $db;
	}

	//read brasseries

	function read(){
		//select all queries

		$query = "SELECT nom, appellationLegale, autreAppellation, adresse, ville, code_postal, province, pays, latitude, longitude, region, permis, brassePermis, typePermis, ambq_membre, annee, site, courriel, telephone, facebook, ratebeer, untappd, auMenu, twitter, wikidata, youtube, instagram, pinterest, snapchat, autre, notes FROM " . $this->table_name;

		//prepare the query statement
		$stmt = $this->conn->prepare($query);

		//execute query
		$stmt->execute();

		return $stmt;
	}


	//create a new brasserie in the database
	function create($columns, $values){

		//query to insert record
		$query = "INSERT INTO brasseries (".$columns .") VALUES (".$values.")";
echo $query;
		$stmt = $this->conn->prepare($query);


    	if($stmt->execute()){
    		return true;
    	}
    		return false;

	}


	//tout les noms
	// GET <MICRO>/NAMES
	function allnames(){

		//query to read all names 
		$query = "SELECT nom FROM " . $this->table_name;


		//prepare the query statement
		// prepare query statement
      	$stmt = $this->conn->prepare( $query );
  
      	// execute query
	    $stmt->execute();
      
      	return $stmt;
	}


	// GET <MICRO>/NAMES/<prefix>
	function namesLike($prefix){

		$query = "SELECT nom FROM " . $this->table_name . " WHERE nom LIKE ?";

		// prepare query statement
      	$stmt = $this->conn->prepare( $query );
      
      	// sanitize
      	$prefix=htmlspecialchars(strip_tags($prefix));
      	$prefix = "{$prefix}%";
      
      // bind
      $stmt->bindParam(1, $prefix);

      // execute query
      $stmt->execute();
      
      return $stmt;
	}


	// used when filling up the update product form
    function findPermis(){
 
		// query to read single record
		$query = "SELECT nom, appellationLegale, autreAppellation, adresse, ville, code_postal, province, pays, latitude, longitude, region, brassePermis, typePermis, ambq_membre, annee, site, courriel, telephone, facebook, ratebeer, untappd, auMenu, twitter, wikidata, youtube, instagram, pinterest, snapchat, autre, notes FROM " . $this->table_name . " WHERE permis = ?";

		// prepare query statement
		$stmt = $this->conn->prepare( $query );

		// bind id of product to be updated
		$stmt->bindParam(1, $this->permis);

		// execute query
		$stmt->execute();

		// get retrieved row
		$row = $stmt->fetch(PDO::FETCH_ASSOC);

		// set values to object properties
		$this->nom=$row['nom'];
		$this->appellationLegale=$row['appellationLegale'];
		$this->autreAppellation=$row['autreAppellation'];
		$this->adresse=$row['adresse'];
		$this->ville=$row['ville'];
		$this->code_postal=$row['code_postal'];
		$this->province=$row['province'];
		$this->pays=$row['pays'];
		$this->latitude=$row['latitude'];
		$this->longitude=$row['longitude'];
		$this->region=$row['region'];
		$this->brassePermis=$row['brassePermis'];
		$this->typePermis=$row['typePermis'];
		$this->ambq_membre=$row['ambq_membre'];
		$this->annee=$row['annee'];
		$this->site=$row['site'];
		$this->courriel=$row['courriel'];
		$this->telephone=$row['telephone'];
		$this->facebook=$row['facebook'];
		$this->ratebeer=$row['ratebeer'];
		$this->untappd=$row['untappd'];
		$this->auMenu=$row['auMenu'];
		$this->twitter=$row['twitter'];
		$this->wikidata=$row['wikidata'];
		$this->youtube=$row['youtube'];
		$this->instagram=$row['instagram'];
		$this->pinterest=$row['pinterest'];
		$this->snapchat=$row['snapchat'];
		$this->autre=$row['autre'];
		$this->notes=$row['notes'];
    }




	function delete(){
	
		$query = "DELETE FROM " . $this->table_name . " WHERE nom = ?";


		// prepare query
		$stmt = $this->conn->prepare($query);

		// sanitize
		$this->nom=htmlspecialchars(strip_tags($this->nom));

		// bind id of record to delete
		$stmt->bindParam(1, $this->nom);

		// execute query
		$stmt->execute();
		if($stmt->rowCount()){

			return true;
		}

		return false;
	}

}

?>