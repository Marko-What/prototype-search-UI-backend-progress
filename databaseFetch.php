<?php
	include_once("databaseConnection.php");
	include_once("functions.php");
?>

<?php 
if(mysqli_connect_errno()){ //it return null or error number
	echo " trying to establish ... connection to database failed ...";
	die("connection failed: ". mysqli_connection_error() . "(" . mysqli_connect_errno() .")"
);	
} else {
	/*echo "database connection successfully established ...";*/
}

?>

<?php

	function multiInputSqlQuery($email, $first_name, $last_name){
	global $connection;
	
	$query = "SELECT * ";
	$query .= "FROM SampleDataTable ";
	$query .= "WHERE email = '$email'"; 
	$query .= " AND first_name = '$first_name'";
	$query .= " AND last_name = '$last_name'";

	$result = mysqli_query($connection, $query);
	// test if there is some query error ...
	if(!$result){
		/*die("database connection query failed ..Multi");*/
	}
	if($result){
		/*echo "connection successfully established23";	*/
	/*	echo $email;*/
		 while($subject = mysqli_fetch_assoc($result)){
			echo $subject['first_name'];
			echo "<br />";
			echo $subject['email'];
			echo "<br />";
		} /* end of while loop */
	}

		
	} /*end of a multiInputSqlQuery function s*/
?>
<?php 
/*
function sqlDataSanitize($QueryValue11, $QueryValue22, $QueryValue33){
	if($QueryValue11 != null){
		 return $email = mysqli_real_escape_string($connection, $QueryValue11);
	}
   
	if($QueryValue33 != null){
		return $last_name = mysqli_real_escape_string($connection, $QueryValue33);
	}
	
	if($QueryValue22 != null){
		return $first_name = mysqli_real_escape_string($connection, $QueryValue22);
	}
	

	}	*/
?>


<?php
if(($_POST['type']) == "multi"){
/*	echo "echo back some data multi ///";*/	 	 
	/*echo $_POST['multi'];*/
	if( isset($_POST['email']) && isset($_POST['contact']) && isset($_POST['last_name']) && isset($_POST['first_name']) ) {
	/*
	$email = mysqli_real_escape_string($_POST['email']);	
	*/



	/*$email = $_POST['email'];*/

	$email_dirty = $_POST['email'];
	$QueryValue11 = filter_var($email_dirty, FILTER_SANITIZE_EMAIL);
	$QueryValue111 = mysqli_real_escape_string($connection, $QueryValue11);

	$first_name_dirty = $_POST['first_name'];
	$QueryValue22 = filter_var($first_name_dirty, FILTER_SANITIZE_STRING);
	$QueryValue222 = mysqli_real_escape_string($connection, $QueryValue22);

	$last_name_dirty = $_POST['last_name'];
	$QueryValue33 = filter_var($last_name_dirty, FILTER_SANITIZE_STRING);
	$QueryValue333 = mysqli_real_escape_string($connection, $QueryValue33);


	/*$email = sqlDataSanitize($QueryValue11,null, null);
	$first_name = sqlDataSanitize(null, $QueryValue22, null);
	$last_name =  sqlDataSanitize(null, null, $QueryValue33);*/

	multiInputSqlQuery($QueryValue111, $QueryValue222, $QueryValue333);


	}	 /* end of if multiAll */

	
}	 /* end of if isset($_POST['multi']))*/



?>


<?php
	if(($_POST['type']) == "single"){
		

	if(isset($_POST['email'])) {
		$QueryValue = "email";
	
		$email_dirty = $_POST['email'];
		$QueryValue1 = filter_var($email_dirty, FILTER_SANITIZE_EMAIL);
		$QueryValue111 = mysqli_real_escape_string($connection, $QueryValue1);
	}

	if(isset($_POST['first_name'])) {
	
		$first_name_dirty = $_POST['first_name'];
		/*$first_name = filter_var($first_name_dirty, FILTER_SANITIZE_STRING);*/

		$QueryValue = "first_name";	
		$QueryValue1 = filter_var($first_name_dirty, FILTER_SANITIZE_STRING);
		$QueryValue111 = mysqli_real_escape_string($connection, $QueryValue1);
	}
	
	if(isset($_POST['last_name'])) {
		$QueryValue = "last_name";
		
	/*	$last_name_dirty = $_POST['last_name'];*/
	  $QueryValue1 = filter_var($last_name_dirty, FILTER_SANITIZE_STRING);
	  $QueryValue1 = $_POST['last_name'];
	 $QueryValue111 = mysqli_real_escape_string($connection, $QueryValue1);
	}
	
	/*if(empty($_POST[$QueryValue])){
		echo "empty input field ...";	
	}*/



	global $connection;

	$query = "SELECT * ";
	$query .= "FROM SampleDataTable ";
	$query .= "WHERE $QueryValue = '$QueryValue111'"; 
/*	$query .= " AND first_name = '$first_name'"; */
   

	$result = mysqli_query($connection, $query);
	// test if there is some query error ...
	if(!$result){
		echo "user does not exist ...";
		/*die("database connection query failed ..Multi");*/
	}
	if($result){
		/*echo "connection successfully established23";	*/
		/*echo $email;*/

		 while($subject = mysqli_fetch_assoc($result)){


		 	if(!$subject[$QueryValue]){
		 		echo "user does not exist123s ...";
		 	}


			echo $subject['first_name'];
			echo "<br />";
			echo $subject['last_name'];
			echo "<br />";
			echo $subject['email'];
			
		} /* end of while loop */
	
	}


	}  /* end of isset$_POST[single] */	

?>
