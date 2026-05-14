function validation_nour(){
var  name= document.getElementById("name");
var moot= document.getElementById("moot");
var confi= document.getElementById("confi");
var adre= document.getElementById("adre");
var Email=document.getElementById("Email");
var age=document.getElementById("age");
var tele=document.getElementById("tele");
var prenom=document.getElementById("prenom");
var line=document.getElementById("line");
var line1=document.getElementById("line1");
var line2=document.getElementById("line2");
var line3=document.getElementById("line3");
var line4=document.getElementById("line4");
var line5=document.getElementById("line5");
var line6=document.getElementById("line6");
var line7=document.getElementById("line7");
var line8=document.getElementById("line8");
var wil = document.getElementById("wil");
  var error = document.getElementById("wilError");
   line.innerHTML="";
    line1.innerHTML="";
    line2.innerHTML="";
    line3.innerHTML="";
    line4.innerHTML="";
    line5.innerHTML="";
    line6.innerHTML="";
    line7.innerHTML="";
    line8.innerHTML="";
    error.innerHTML="";
    if(name.value==""&& prenom.value=="" && age.value=="" && tele.value=="" && Email.value==""&& adre.value==""&& moot.value=="" && confi.value==""){
      line8.innerHTML="<td colspan='2' style='color:red ; text-align:center;' > enter your information</td>" ;;return false;
    }
   if( name.value==""){
 line.innerHTML="<td colspan='2' style='color:red ; text-align:center;' > enter voter  last name </td>" ;;return false;
   }
   if(prenom.value==""){
 line1.innerHTML="<td colspan='2' style='color:red ; text-align:center;' > enter voter first name </td>" ;;return false;
   }
    if(age.value==""){
       line2.innerHTML="<td colspan='2' style='color:red ; text-align:center;' > enter voter Age </td>" ;;return false;
        }
         if (age.value < 18) {
        line3.innerHTML="<td colspan='2' style='color:red ; text-align:center;' > You must be at least 18 years old ❌</td>";
        return false;
    }
    if (isNaN(age.value)) {
      line3.innerHTML="<td colspan='2' style='color:red ; text-align:center;' > enter your age </td>";
        return false;
    }
    if (wil.value =="") {
    error.innerHTML ="<td colspan='2' style='color:red ; text-align:center;' > enter ❌</td>"; ;
    return false;
  }

     if(tele.value==""){
       line4.innerHTML="<td colspan='2' style='color:red ; text-align:center;' > enter the phon number </td>";return false;
    }
    if(isNaN(tele.value)){
         line3.innerHTML="<td colspan='2' style='color:red ; text-align:center;' > phon number must be a number ❌ </td> "; return false;
    }
    if(tele.value.length !=10){
       line3.innerHTML="<td colspan='2' style='color:red ; text-align:center;' > phon number must be a number ❌ </td> "; return false;
    }
    if(!(tele.value.startsWith("05") || tele.value.startsWith("06")  || tele.value.startsWith("07") ||tele.value.startsWith("03"))){
        line3.innerHTML="<td colspan='2' style='color:red ; text-align:center;' > phone number must start with 05, 06 or 07 ❌ </td>";return false;
    }


    if(Email.value==""){
   line4.innerHTML="<td colspan='2' style='color:red ; text-align:center;' > Enter your Email</td>";return false;  
 }
 if(!Email.value.includes("@") || !Email.value.includes(".")) {
       line4.innerHTML="<td colspan='2' style='color:red ; text-align:center;' > Invalid Email ❌</td>";return false;
        }
    if(!Email.value.includes(".")){
     line4.innerHTML="<td colspan='2' style='color:red ; text-align:center;' > Invalid Email ❌</td>";return false;
    }
    if(!Email.value.includes("com")){
       line4.innerHTML="<td colspan='2' style='color:red ; text-align:center;' > Invalid Email ❌</td>";return false;
    }
 if(adre.value==""){
   line5.innerHTML="<td colspan='2' style='color:red ; text-align:center;' > Enter your address</td>" ;return false;
 }
 if(adre.value.length < 5) {
       line5.innerHTML="<td colspan='2' style='color:red ; text-align:center;' > Address too short ❌</td>";return false;
 }
 if(moot.value==""){
 line6.innerHTML="<td colspan='2' style='color:red ; text-align:center;' > Enter the password</td>";return false;
   }
   if(moot.value.length<=8){
     line6.innerHTML="<td colspan='2' style='color:red ; text-align:center;' > Password must be at least 8 characters</td>";return false;
}
if(confi.value==""){
   line7.innerHTML="<td colspan='2' style='color:red ; text-align:center;' > Confirm your password</td>";return false;
}
 if( moot.value!== confi.value){
   line7.innerHTML="<td colspan='2' style='color:red ; text-align:center;' > Passwords do not match ❌</td>";return false;
 }
   return true;
} 