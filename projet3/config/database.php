<?php

class Database{

	//specify my credentials
	private $host = "www-ens.iro.umontreal.ca";
	private $db_name = "sadikoua_projet_3";
	private $username = "sadikoua";
	private $password = "ouap123S";
	public $conn;


	//get the database connection
	public function getConnection (){
		$this->conn = null;

		try{
			$this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
			$this->conn->exec("set names utf8");
		}catch(PDOException $exception){
			echo "Connection error: " . $exception->getMessage();
		}

		return $this->conn;
	}
}

?>