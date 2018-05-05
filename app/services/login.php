<?php
	session_start();
	$function = $_POST['function'];
    switch($function){
    	case('check'):
			if (isset($_SESSION['user'])){
				// logged in !
				echo json_encode($_SESSION['user']);
			}
			else{
				echo json_encode(false);
			}
			break;	
		case('login'):
			$servername = "localhost";
			$username = $_POST['username'];
			$password = $_POST['password'];
			$dbname = "mysql";

			// Create connection
			$conn = new mysqli($servername, $username, $password, $dbname);
			// Check connection
			if ($conn->connect_error) {
				die($conn->connect_error);
			}
			else{
				$_SESSION['user'] = $username;
				$_SESSION['password'] = $password;
				echo true;
			}
			$conn->close();
			break;
		case('logout'):
			// remove all session variables
			session_unset(); 
			// destroy the session 
			session_destroy(); 
			echo true;
			break;
		case('create'):
			$newUsername = $_POST['username'];
			$newPassword = $_POST['password'];

			// Create connection
			$conn = new mysqli("localhost", "root", "root", "mysql");
			// Check connection
			if ($conn->connect_error) {
				die($conn->connect_error);
			}
			$sql = "CREATE USER '$newUsername'@'localhost' IDENTIFIED BY '$newPassword'";
			if ($conn->query($sql) === FALSE) {
				echo "Error: " . $sql . "<br>" . $conn->error; 
			}
			$priv = "GRANT SELECT ON *.* TO '$newUsername'@'localhost'";
			if ($conn->query($priv) === FALSE) {
				echo "Error: " . $priv . "<br>" . $conn->error; 
			}

			$priv2 = "GRANT SELECT, INSERT, UPDATE, DELETE ON something.* TO '$newUsername'@'localhost'";
			if ($conn->query($priv2) === FALSE) {
				echo "Error: " . $priv2 . "<br>" . $conn->error; 
			}


			break;
	}
?>