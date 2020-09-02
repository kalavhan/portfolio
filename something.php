<!DOCTYPE html>
<html>
<body>

<form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
  Name: <input type="text" name="fname">
  otherName: <input type="text" name="fname">
  <input type="submit">
</form>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // collect value of input field
    $name = $_POST['fname'][0];
    if (empty($name)) {
        echo "Name is empty";
    } else {
        echo file_get_contents("php://input").;
    }
}
?>

</body>
</html>
