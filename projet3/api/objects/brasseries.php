

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



	function createAvecJ(){
 
      // query to insert record
      $query = "INSERT INTO
                " . $this->table_name . "
            SET
                nom=:nom, appellationLegale=:appellationLegale, autreAppellation=:autreAppellation, adresse=:adresse, ville=:ville, code_postal=:code_postal, province=:province, pays=:pays, latitude=:latitude, longitude=:longitude, region=:region, permis=:permis, brassePermis=:brassePermis, typePermis=:typePermis, ambq_membre=:ambq_membre, annee=:annee, site=:site, courriel=:courriel, telephone=:telephone, facebook=:facebook, ratebeer=:ratebeer, untappd=:untappd, auMenu=:auMenu, twitter=:twitter, wikidata=:wikidata, youtube=:youtube, instagram=:instagram, pinterest=:pinterest, snapchat=:snapchat, autre=:autre, notes=:notes";
      
      // prepare query
      $stmt = $this->conn->prepare($query);
      
      // sanitize
      /*$this->nom=htmlspecialchars(strip_tags($this->nom));
      $this->appellationLegale=htmlspecialchars(strip_tags($this->appellationLegale));
      $this->autreAppellation=htmlspecialchars(strip_tags($this->autreAppellation));
      $this->adresse=htmlspecialchars(strip_tags($this->adresse));
      $this->ville=htmlspecialchars(strip_tags($this->ville));
      $this->code_postal=htmlspecialchars(strip_tags($this->code_postal));
      $this->province=htmlspecialchars(strip_tags($this->province));
      $this->pays=htmlspecialchars(strip_tags($this->pays));
      $this->latitude=htmlspecialchars(strip_tags($this->latitude));
      $this->longitude=htmlspecialchars(strip_tags($this->longitude));
      $this->region=htmlspecialchars(strip_tags($this->region));
      $this->permis=htmlspecialchars(strip_tags($this->permis));
      $this->brassePermis=htmlspecialchars(strip_tags($this->brassePermis));
      $this->typePermis=htmlspecialchars(strip_tags($this->typePermis));
      $this->ambq_membre=htmlspecialchars(strip_tags($this->ambq_membre));
      $this->annee=htmlspecialchars(strip_tags($this->annee));
      $this->site=htmlspecialchars(strip_tags($this->site));
      $this->courriel=htmlspecialchars(strip_tags($this->courriel));
      //$this->annee=htmlspecialchars(strip_tags($this->annee));
      $this->telephone=htmlspecialchars(strip_tags($this->telephone));
      $this->facebook=htmlspecialchars(strip_tags($this->facebook));
      $this->ratebeer=htmlspecialchars(strip_tags($this->));
      $this->untappd=htmlspecialchars(strip_tags($this->untappd));
      $this->auMenu=htmlspecialchars(strip_tags($this->auMenu));
      $this->twitter=htmlspecialchars(strip_tags($this->twitter));
      $this->wikidata=htmlspecialchars(strip_tags($this->wikidata));
      $this->youtube=htmlspecialchars(strip_tags($this->youtube));
      $this->instagram=htmlspecialchars(strip_tags($this->instagram));
      $this->pinterest=htmlspecialchars(strip_tags($this->pinterest));
      $this->snapchat=htmlspecialchars(strip_tags($this->snapchat));
      $this->autre=htmlspecialchars(strip_tags($this->autre));
      $this->notes=htmlspecialchars(strip_tags($this->notes));*/
      
      
      // bind values
      
      $stmt->bindParam(":nom", $this->nom);
      $stmt->bindParam(":autreAppellation", $this->autreAppellation);
      $stmt->bindParam(":appellationLegale", $this->appellationLegale);
      $stmt->bindParam(":adresse", $this->adresse);
      $stmt->bindParam(":ville", $this->ville);
      $stmt->bindParam(":code_postal", $this->code_postal);
      $stmt->bindParam(":province", $this->province);
      $stmt->bindParam(":pays", $this->pays);
      $stmt->bindParam(":latitude", $this->latitude);
      $stmt->bindParam(":longitude", $this->longitude);
      $stmt->bindParam(":region", $this->region);
      $stmt->bindParam(":permis", $this->permis);
      $stmt->bindParam(":brassePermis", $this->brassePermis);
      $stmt->bindParam(":typePermis", $this->typePermis);
      $stmt->bindParam(":ambq_membre", $this->ambq_membre);
      $stmt->bindParam(":annee", $this->annee);
      $stmt->bindParam(":site", $this->site);
      $stmt->bindParam(":courriel", $this->courriel);
      $stmt->bindParam(":telephone", $this->telephone);
      $stmt->bindParam(":facebook", $this->facebook);
      $stmt->bindParam(":ratebeer", $this->ratebeer);
      $stmt->bindParam(":untappd", $this->untappd);
      $stmt->bindParam(":auMenu", $this->auMenu);
      $stmt->bindParam(":twitter", $this->twitter);
      $stmt->bindParam(":wikidata", $this->wikidata);
      $stmt->bindParam(":youtube", $this->youtube);
      $stmt->bindParam(":instagram", $this->instagram);
      $stmt->bindParam(":pinterest", $this->pinterest);
      $stmt->bindParam(":snapchat", $this->snapchat);
      $stmt->bindParam(":autre", $this->autre);
      $stmt->bindParam(":notes", $this->notes);
      

      
      // execute query
      if($stmt->execute()){
        return true;
      }
      
      return false;
      
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