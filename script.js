
let nameError=document.getElementById('nameError');
let phoneError=document.getElementById('phoneError');
let emailError=document.getElementById('emailError');
let descriptionError=document.getElementById('descriptionError');
      let icon=<i class="fa-solid fa-circle-check"></i>;
      
function nameValidation(){
let userName=document.getElementById('userName').value;

  if(userName.length==0){
    nameError.innerHTML="Please enter your name!";
   return false;
  }

  if(!userName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML="Please enter your fullName!";
    return false;
  }
   
  nameError.innerHTML=icon;
  return true;
}

function contactValidation(){
  let userPhone=document.getElementById('userPhone').value;
  if(userPhone.length==0){
    phoneError.innerHTML="Please enter your Phone number!";
  return false;
  }

  if(!userPhone.match(/^[0-9]{10}$/)){
     phoneError.innerHTML="Please enter valid Phone number";
     return false;
  }

  phoneError.innerHTML=icon;
  return true;
}

function emailValidation(){
  let userEmail=document.getElementById('userEmail').value;
  if(userEmail.length==0){
  emailError.innerHTML="Please enter your email Id!";
  return false;
  }
//(!userEmail.match(/^ [A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
  //   {
  //     emailError.innerHTML="please Enter valid email!";
  //     return false;
  //   }
    emailError.innerHTML=icon;
    return true;
}

function descriptionValidation(){
  let userDescription=document.getElementById('userDescription').value;
 let require=30;
 let left=require-userDescription.length;
  if(left>0){
    descriptionError.innerHTML=left+"more characters required!";
    return false;
  }
  descriptionError.innerHTML=icon;
  return true;
}