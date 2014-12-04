<?php  
require_once('config.php');

$db = new mysqli(DB_HOST, DB_USER, DB_PASSW, DB_NAME);
if(mysqli_connect_errno())
	echo json_encode(array('mjs' => 'Error al intentar conectar la bd', 'error' => true));

$sql = 'INSERT INTO usuarios(nombre, ap_paterno, ap_materno, email, usuario, password) values(?, ?, ?, ?, ?, ?)';

$query = $db->prepare($sql);
$query->bind_param('ssssss', $_POST['name'], $_POST['ap_paterno'], $_POST['ap_materno'],  $_POST['email'], $_POST['usuario'], md5($_POST['passw']));

$query->execute();
$affected = $query->affected_rows;
$query->close();
if($affected > 0)
	echo json_encode(array('mjs' => 'Usuario creado correctamente', 'error' => false));
else
	echo json_encode(array('mjs' => 'No fue posible crear el usuario', 'error' => true));
?>