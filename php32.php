<?php
$conn = mysqli_connect("localhost","root","","base-client");
if($_SERVER["REQUEST_METHOD"]=="POST"){

if(!$conn){
    die("Connection failed");
}

$produit = $_POST['produit'];
$prix = $_POST['prix'];
$ref = $_POST['ref'];
$quantite = $_POST['quantite'];

/* checkbox (peau) */
$peau = isset($_POST['peau']) ? implode(",", $_POST['peau']) : "";

$sql = "INSERT INTO command_produit
(produit, prix, ref, peau, quantite)
VALUES
('$produit', '$prix', '$ref', '$peau', '$quantite')";

if(mysqli_query($conn,$sql)){
    echo "Commande enregistrée ✔";
}else{
    echo "Error: ".mysqli_error($conn);
}
}
mysqli_close($conn);
?>