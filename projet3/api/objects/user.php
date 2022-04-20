<?php

Class User{

	private $conn;
	private $table_name = "accounts";


	public $account_name; 
	public $account_passwd;
	public $account_right;


	//constructor with $db as database connection
	public function __construct($db){
		$this->conn = $db;
	}


	function findA(){
		$query = "SELECT account_name, account_passwd, account_right FROM accounts WHERE account_name=" .$this->account_name." AND account_passwd=" . $this->account_passwd;
		
		// prepare query statement
		$stmt = $this->conn->prepare( $query );

		// execute query
      $stmt->execute();
      
      return $stmt;
	}
}

?>