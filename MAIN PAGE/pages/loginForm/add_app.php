<?php
require_once('../public/mysql.php');

if (isset($_POST["app_name"]) && preg_match("/^[\w\s]+$/", $_POST["app_name"]) && isset($_POST['redirect_uri']) && filter_var($_POST['redirect_uri'], FILTER_VALIDATE_URL) !== false) {
	open();
	//$conn = new PDO("pgsql:host=localhost;dbname=otv", "gisuser");
	//$stmt = $conn->prepare("INSERT INTO oauth_clients(client_id, client_secret, name, redirect_uri,grant_types) VALUES (?,?,?,?,'authorization_code')");
	$clientId = bin2hex(random_bytes(16));
	$secret = bin2hex(random_bytes(32));
//	$secret = 'edefeca2fe073e79cb41036827d07080df849babdd0462b0edb263b3b1185192';

	$mysql = new MySQL('localhost', 'usersoath', 'sgxFSs4ABl}Pte%', 'dbsoath');
	try {
		$mysql->insert('oauth_clients', [
			'client_id' => $clientId,
			'client_secret' => password_hash($secret, PASSWORD_DEFAULT),
			'name' => $_POST["app_name"],
			'redirect_uri' => $_POST["redirect_uri"],
			'grant_types' => 'authorization_code',
		]);
	} catch (Exception $e) {
		echo 'Caught exception: ', $e->getMessage();
	}
	//$stmt->execute([$clientId, password_hash($secret, PASSWORD_DEFAULT), $_POST["app_name"], $_POST["redirect_uri"]]);
	echo "<p>You added the app '$_POST[app_name]'.<br />Its client ID is $clientId.<br />Its secret is $secret.</p>";
	close();
} else {
	open();
	if (isset($_POST['app_name']) || isset($_POST['redirect_uri'])) {
		echo "<p class='err__message'>Invalid app name (should only contain letters, numbers and underscores) or redirect URI.</p>";
	}
	?>
    <h1>Client registration</h1>
    <form method="post" action="">
        App Name:<br/>
        <input type="text" name="app_name"/><br/>
        Redirect URI:<br/>
        <input name="redirect_uri" type="text"/><br/>
        <input type="submit" value="Go!"/>
    </form>
	<?php
	close();
}


function open() {
?>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="css/otv.css"/>
</head>
<body>
<div id='main'>
	<?php
	}

	function close() {
	?>
</div>
</body>
</html>
<?php
}
?>
