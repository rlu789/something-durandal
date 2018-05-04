 <?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "blogs";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM blogs";
$result = $conn->query($sql);
$data = array();

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
		$row_data = array(
			'title' => $row["title"]
		);
		array_push($data, $row_data);
    }
} else {
    echo "0 results";
}
 echo json_encode($data);

$conn->close();
?> 