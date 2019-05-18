<?php
header('Content-Type: application/json');
try {
    $database = new PDO('mysql:host=db5000080437.hosting-data.io;dbname=dbs75175;charset=utf8', 'dbu37571', 'Loca!56leclerc23?');
}
catch(Exception $e) {
    die('Erreur : ' . $e->getMessage());
}

$result = $database->query("SELECT * FROM questionnaire_results");
$phparray = $result->fetchAll(PDO::FETCH_ASSOC);
$json = json_encode($phparray, JSON_PRETTY_PRINT);
echo $json;
?>