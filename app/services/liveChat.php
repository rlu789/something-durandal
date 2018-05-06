<?php
	session_start();
	$servername = "localhost";
	$username = $_SESSION['user'];
	$password = $_SESSION['password'];
	$dbname = "something";

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
    $function = $_POST['function'];
    
    $log = array();
    
    switch($function) {
    
    	 case('get'):
        	 $sql = "SELECT * FROM chat";
			 $result = $conn->query($sql);

			 if ($result->num_rows > 0) {
				while($row = $result->fetch_assoc()) {
					$row_data = array(
						'id' => $row["id"],
						'message' => $row["message"],
						'username' => $row["username"]
					);
					array_push($log, $row_data);
				}
			 }

			 $conn->close();
        	 break;	
    	
    	 case('update'):
			 $state = $_POST['state'];
		     $sql = "SELECT * FROM chat WHERE id > $state";
			 $result = $conn->query($sql);

			if ($result->num_rows > 0) {
				while($row = $result->fetch_assoc()) {
					$row_data = array(
						'id' => $row["id"],
						'message' => $row["message"],
						'username' => $row["username"]
					);
					array_push($log, $row_data);
				}
			 }

			 $conn->close();
             break;
    	 
    	 case('send'):
			$message = $_POST['message'];
			$username = $_POST['username'];
			$sql = "INSERT INTO chat (id, message, username) VALUES (NULL , '$message', '$username' )";
    		if ($conn->query($sql) === TRUE) {
				echo 1;
			} else {
				//echo NULL;
				echo "Error: " . $sql . "<br>" . $conn->error; //uncomment to see error
			}
			break;
    }
    
    echo json_encode($log);

?>