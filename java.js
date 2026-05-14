function validation_login(){
     var inpt0=  document.getElementById("inpt0");//moot
    var inpt=  document.getElementById("inpt");///email
    var line1=document.getElementById("line1");
    var line=document.getElementById("line");
    line1.innerHTML="";
    line.innerHTML="";
    if(inpt.value==""&& inpt0.value==""){
         line.innerHTML="<td colspan='2' style='color:red ; text-align:center;' > enter voter the moot passe and email </td>" ;
          return false;} 
    if(inpt.value==""){
      line1.innerHTML="<td colspan='2' style='color:red ; text-align:center;' > enter voter Email </td>" ;
    return false;}
if(!inpt.value.includes("@")){
      line1.innerHTML="<td colspan='2' style='color:red ; text-align:center;' > Email must contain @ </td>" ;
    return false;}
if(inpt0.value==""){
      line.innerHTML="<td colspan='2' style='color:red ; text-align:center;' > enter voter password </td>" ;
    return false;}
    if(inpt0.value.length < 8){
      line.innerHTML="<td colspan='2' style='color:red ; text-align:center;' > Password must be at least 8 characters </td>" ;
      return false;
    }
     return true;
   }