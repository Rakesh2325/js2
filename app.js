var Name = document.getElementById("Name");
var FatherName = document.getElementById("Father-Name");
var Email = document.getElementById("Email_Address");
var Password = document.getElementById("Password");
var CNIC = document.getElementById("CNIC_Number");
var Mobile = document.getElementById("Mobile_Number");
var Courses = document.getElementById("Select_Courses");
var Qualification = document.getElementById("Select_Qualification");
var Gender = document.getElementById("Select_Gender");
function addData(){
if (Name.value === ""){
     message.style.display = "block";
     message.innerHTML = "Name requried.";
     message.style.color = "red";
     Name.focus()
     setTimeout(()=>{
        message.style.display = "none";
     },2000);
   } else if(FatherName.value === ""){
    message.style.display = "block";
    message.innerHTML = "Father name requried";
    message.style.color = "red";
    FatherName.focus()
    setTimeout(()=>{
       message.style.display = "none";
    },2000);
   }else if(Email.value === ""){
    message.style.display = "block";
    message.innerHTML = "Email address required";
    message.style.color = "red";
    Email.focus()
    setTimeout(()=>{
       message.style.display = "none";
    },2000);
   } else if(Password.value === ""){
      message.style.display = "block";
      message.innerHTML = "Password required";
      message.style.color = "red";
      Password.focus()
      setTimeout(()=>{
         message.style.display = "none";
      },2000);
    } else if(Password.value.length !== 6){
    message.style.display = "block";
    message.innerHTML = "Please enter 6 digits password";
    message.style.color = "red";
    Password.focus()
    setTimeout(()=>{
       message.style.display = "none";
    },2000);
   } else if(CNIC.value === ""){
      message.style.display = "block";
      message.innerHTML = "CNIC number required";
      message.style.color = "red";
      CNIC.focus()
      setTimeout(()=>{
         message.style.display = "none";
      },2000);
   } else if(CNIC.value.length !== 14){
    message.style.display = "block";
    message.innerHTML = "Please enter valid numbers in CNIC";
    message.style.color = "red";
    CNIC.focus()
    setTimeout(()=>{
       message.style.display = "none";
    },2000);
   } else if(Mobile.value === ""){
      message.style.display = "block";
      message.innerHTML = "Mobile number required";
      message.style.color = "red";
      Mobile.focus()
      setTimeout(()=>{
         message.style.display = "none";
      },2000);
   } else if(Mobile.value.length !== 11){
    message.style.display = "block";
    message.innerHTML = "Please enter valid phone number";
    message.style.color = "red";
    Mobile.focus()
    setTimeout(()=>{
       message.style.display = "none";
    },2000);
   } else if(Courses.value === ""){
    message.style.display = "block";
    message.innerHTML = "Select Courese";
    message.style.color = "red";
    Courses.focus()
    setTimeout(()=>{
       message.style.display = "none";
    },2000);
   } else if(Qualification.value === ""){
    message.style.display = "block";
    message.innerHTML = "Select Qualification";
    message.style.color = "red";
    Qualification.focus()
    setTimeout(()=>{
       message.style.display = "none";
    },2000);
   } else if(Gender.value === ""){
    message.style.display = "block";
    message.innerHTML = "Select Gender";
    message.style.color = "red";
    Gender.focus()
    setTimeout(()=>{
       message.style.display = "none";
    },2000);
   }  else {
    message.style.display ="block"
    message.innerHTML = "success"
    message.style.color = "green"
    console.log(Name.value);
    console.log(FatherName.value);
    console.log(Email.value);
    console.log(Password.value);
    console.log(CNIC.value);
    console.log(Mobile.value);
    console.log(Courses.value);
    console.log(Qualification.value);
    console.log(Gender.value);
    setTimeout(()=>{
        message.style.display = "none ";
        Name.value = "";
        FatherName.value = "";
        Email.value = "";
        Password.value = "";
        CNIC.value = "";
        Mobile.value = "";
        Courses.value = "";
        Qualification.value = "";
        Gender.value = "";
     },2000);
   }
}
