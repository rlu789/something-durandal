 <?php
	session_start();
	$servername = "localhost";
	$username = $_SESSION['user'];
	$password = $_SESSION['password'];
	$dbname = "something";

	// Create connection
	$conn = mysqli_connect($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
	$n = NULL;
	$title = $_POST['title'];
	$content = $_POST['content'];
	$user = $_POST['username'];
	$sql = "INSERT INTO blogs (id, title, content, username, datePosted) VALUES (NULL , '$title', '$content', '$user', CURRENT_DATE() )";
	if ($conn->query($sql) === TRUE) {
		echo 1;
	} else {
		echo NULL;
		//echo "Error: " . $sql . "<br>" . $conn->error; //uncomment to see error
	}
	$conn->close();
?> 