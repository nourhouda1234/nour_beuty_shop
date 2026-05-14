function validation_prouduct(){

    var peau = document.getElementsByName("peau[]");
    var quantite = document.getElementById("quantite");
    var line = document.getElementById("line");

    line.innerHTML = "";

    var check = false;

    for(var i = 0; i < peau.length; i++){
        if(peau[i].checked){
            check = true;
            break;
        }
    }

    if(check == false){
        line.innerHTML =
        "<td colspan='2' style='color:red; text-align:center;'>Choose skin type ❌</td>";
        return false;
    }

    if(quantite.value == ""){
        line.innerHTML =
        "<td colspan='2' style='color:red; text-align:center;'>Choose quantity ❌</td>";
        return false;
    }

    return true;
}