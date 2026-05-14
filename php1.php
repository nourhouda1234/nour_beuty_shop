
<?php
$link = mysqli_connect("localhost","root","","base-client");
if(!$link){
die("connection falied:".mysqli_connect_error());
}
if($_SERVER["REQUEST_METHOD"]=="POST"){
$nom=$_POST['nom'];
$prenom=$_POST['prenom'];
$age=$_POST['Age'];
$wilaya=$_POST['wilaya'];
$tel=$_POST['phon'];
$mail=$_POST['E_mail'];
$addres=$_POST['adresse'];
$mot=$_POST['mot_de_passe'];
$sex=$_POST['sexe'];
$result="INSERT INTO client(no_clt,pno_clt,age_clt,wi_clt,tel_clt,mail_clt,adr_clt,mot_clt,sexe_clt)
VALUES('$nom','$prenom','$age','$wilaya','$tel','$mail','$addres','$mot','$sex')";
if(mysqli_query($link,$result)){
    echo"registration succssefuul! your id id=". mysqli_insert_id($link);}
}else{
    echo "error:". mysqli_error($link);
}
mysqli_close($link);
?>